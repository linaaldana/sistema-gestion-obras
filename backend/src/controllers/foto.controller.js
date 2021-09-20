const db = require('../database/models/index');
const Foto = require('../database/models/foto')(db.sequelize, db.Sequelize.DataTypes);

exports.createPhoto = async (req, res) => {
    console.log(req.file);
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, "./uploads/image.png");

    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        res
          .status(200)
          .contentType("text/plain")
          .end("File uploaded!");
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }
}
exports.getPhotos = async (req, res) => {
    const foto = await Foto.findAll();
    res.status(200).json(foto);
}
exports.getPhotoById = async (req, res) => {
    const foto = await Foto.findByPk(req.params.id);
    if(!foto) return res.status(400).json({title: 'not found', error: 'La imagen especificada no existe.'})
    res.sendFile(foto.path);
}
exports.deletePhotoById = async (req, res) => {
    await Foto.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json({
        status: 'Foto eliminada'
    });
}