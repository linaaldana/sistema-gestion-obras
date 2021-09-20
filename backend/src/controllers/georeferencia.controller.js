const db = require('../database/models/index');
const Georeferencia = require('../database/models/georeferencia')(db.sequelize, db.Sequelize.DataTypes);

exports.createGeoreference = async (req, res) => {
    const { idAvanceObra } = req.body;  
    const date = Date.now();
    const id = "nv" + date;
    
    const georeferencia = new Georeferencia({
        idAvanceObra: idAvanceObra,
        path: "../../media/audio/" + id
    });
    const audioGuardado = await georeferencia.save();
    console.log(audioGuardado);
    res.status(200).json({ message: 'Mensaje de georeferencia creado'});
}
exports.getGeoreferences = async (req, res) => {
    const georeferencia = await Georeferencia.findAll();
    res.status(200).json(georeferencia);
}
exports.getGeoreferenceById = async (req, res) => {
    const georeferencia = await Georeferencia.findByPk(req.params.id);
    if(!georeferencia) return res.status(400).json({title: 'not found', error: 'La georeferencia especificada no existe.'})
    res.status(200).json({georeferencia});
}
exports.updateGeoreferenceById = async (req, res) => {
    await Georeferencia.update(req.body, { where: { id: req.params.id } });
    res.json({
        status: 'Georeferencia actualizada'
    });
}
exports.deleteGeoreferenceById = async (req, res) => {
    await Georeferencia.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json({
        status: 'Georeferencia eliminada'
    });
}