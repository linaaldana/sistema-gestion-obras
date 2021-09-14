const db = require('../database/models/index');
const Foto = require('../database/models/foto')(db.sequelize, db.Sequelize.DataTypes);

exports.createAudio = async (req, res) => {
    const { idAvanceObra, idGeoreferencia } = req.body;  
    const date = Date.now();
    const id = "nv" + date;
    
    const foto = new Foto({
        idAvanceObra: idAvanceObra,
        idGeoreferencia: idGeoreferencia,
        path: "../../media/photos/" + id
    });
    const audioGuardado = await foto.save();
    console.log(audioGuardado);
    res.status(200).json({ message: 'Mensaje de foto creado'});
}
exports.getAudios = async (req, res) => {
    const foto = await Foto.findAll();
    res.status(200).json(foto);
}
exports.getAudioById = async (req, res) => {
    const foto = await Foto.findByPk(req.params.id);
    if(!foto) return res.status(400).json({title: 'not found', error: 'La imagen especificado no existe.'})
    res.status(200).json({foto});
}
exports.deleteAudioById = async (req, res) => {
    await Foto.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json({
        status: 'Foto eliminada'
    });
}