const db = require('../database/models/index');
const Trabajador = require('../database/models/trabajador')(db.sequelize, db.Sequelize.DataTypes);



exports.createTrabajador = async (req, res) => {
    const { tipoIdentificacion, numeroIdentificacion, nombre, direccion, telefono, email, cargo, usuario } = req.body;    
    
    const trabajador = new Trabajador({
        tipoIdentificacion: tipoIdentificacion,
        numeroIdentificacion: numeroIdentificacion,
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        email: email,
        cargo: cargo,
        usuario: usuario,
    });
    const trabajadorGuardado = await trabajador.save();
    console.log(trabajadorGuardado);
    res.status(200).json({ message: 'trabajador creado'});
}
exports.getTrabajadores = async (req, res) => {
    const trabajadores = await Trabajador.findAll();
    res.status(200).json(trabajadores);
}
exports.getTrabajadorById = async (req, res) => {
    const trabajador = await Trabajador.findByPk(req.params.id);
    if(!trabajador) return res.status(400).json({title: 'not found', error: 'El trabajador no existe.'})
    res.status(200).json({trabajador});
}
exports.updateTrabajadorById = async (req, res) => {
    await Trabajador.update(req.body, { where: { id: req.params.id } });
    res.json({
        status: 'trabajador actualizado'
    });
}
exports.deleteTrabajadorById = async (req, res) => {
    await Trabajador.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json({
        status: 'trabajador eliminado'
    });
}