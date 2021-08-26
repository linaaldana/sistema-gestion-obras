const db = require('../database/models/index');
const Obra = require('../database/models/obra')(db.sequelize, db.Sequelize.DataTypes);



exports.createObra = async (req, res) => {
    const { fechaInicio, fechaFin, nombre, descripcion, direccion, porcentajeAvance, jefeObra, tecnicos, cliente } = req.body;    
    
    const obra = new Obra({
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        nombre: nombre,
        descripcion: descripcion,
        direccion: direccion,
        porcentajeAvance: porcentajeAvance,
        jefeObra: jefeObra,
        tecnicos: tecnicos,
        cliente: cliente,        
    });
    const obraGuardada = await obra.save();
    console.log(obraGuardada);
    res.status(200).json({ message: 'Obra creada'});
}
exports.getObras = async (req, res) => {
    const obras = await Obra.findAll();
    res.status(200).json(obras);
}
exports.getObraById = async (req, res) => {
    const obra = await Obra.findByPk(req.params.id);
    if(!obra) return res.status(400).json({title: 'not found', error: 'La obra no existe.'})
    res.status(200).json({obra});
}
exports.updateObraById = async (req, res) => {
    await Obra.update(req.body, { where: { id: req.params.id } });
    res.json({
        status: 'Obra actualizada'
    });
}
exports.deleteObraById = async (req, res) => {
    await Obra.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json({
        status: 'Obra eliminada'
    });
}