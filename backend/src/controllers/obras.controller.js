const db = require('../database/models/index');
const obra_trabajadores = require('../database/models/obra_trabajadores');
const Obra = require('../database/models/obra')(db.sequelize, db.Sequelize.DataTypes);
const Trabajador = require('../database/models/trabajador')(db.sequelize, db.Sequelize.DataTypes);
const Obra_Trabajadores = require('../database/models/obra_trabajadores')(db.sequelize, db.Sequelize.DataTypes);



exports.createObra = async (req, res) => {
    const { fechaInicio, fechaFin, nombre, descripcion, direccion, porcentajeAvance, jefeObra, trabajadores, cliente } = req.body;    
    
    const obra = new Obra({
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        nombre: nombre,
        descripcion: descripcion,
        direccion: direccion,
        porcentajeAvance: porcentajeAvance,
        jefeObra: jefeObra,        
        cliente: cliente,        
    });
    
    const obraGuardada = await obra.save();
    for (const trabajador of trabajadores) {    
        const obra_trabajadores = new Obra_Trabajadores({
            obraId: obraGuardada.id,
            trabajadorId: trabajador.id
        });
        await obra_trabajadores.save();
    };
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
