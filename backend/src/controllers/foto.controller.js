const db = require('../database/models/index');
const Foto = require('../database/models/foto')(db.sequelize, db.Sequelize.DataTypes);
const fs = require('fs');

exports.createPhoto = async (req, res) => {
    const { idAvanceObra, idGeoreferencia } = req.body;  
    const date = Date.now();
    const id = "ph" + date;
    
    const foto = new Foto({
        idAvanceObra: idAvanceObra,
        idGeoreferencia: idGeoreferencia,
        path: "../../media/photos/" + id
    });
    fs.writeFileSync(voz.path, Buffer.from(new Uint8Array(req.file.buffer)));
    const fotoGuardada = await foto.save();
    console.log(fotoGuardada);
    res.status(200).json({ message: 'Foto creada'});
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