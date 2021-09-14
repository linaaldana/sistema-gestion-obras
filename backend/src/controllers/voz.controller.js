const db = require('../database/models/index');
const Voz = require('../database/models/voz')(db.sequelize, db.Sequelize.DataTypes);

exports.createAudio = async (req, res) => {
    const { idAvanceObra } = req.body;  
    const date = Date.now();
    const id = "nv" + date;
    
    const voz = new Voz({
        idAvanceObra: idAvanceObra,
        path: "../../media/audio/" + id
    });
    const audioGuardado = await voz.save();
    console.log(audioGuardado);
    res.status(200).json({ message: 'Mensaje de voz creado'});
}
exports.getAudios = async (req, res) => {
    const voz = await Voz.findAll();
    res.status(200).json(voz);
}
exports.getAudioById = async (req, res) => {
    const voz = await Voz.findByPk(req.params.id);
    if(!voz) return res.status(400).json({title: 'not found', error: 'El audio especificado no existe.'})
    res.status(200).json({voz});
}
exports.deleteAudioById = async (req, res) => {
    await Voz.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json({
        status: 'Nota de voz eliminada'
    });
}