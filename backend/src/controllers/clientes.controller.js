const db = require('../database/models/index');
const Cliente = require('../database/models/cliente')(db.sequelize, db.Sequelize.DataTypes);



exports.createCliente = async (req, res) => {
    const { tipoIdentificacion, numeroIdentificacion, nombre, direccion, telefono, email, usuario } = req.body;    
    
    const cliente = new Cliente({
        tipoIdentificacion: tipoIdentificacion,
        numeroIdentificacion: numeroIdentificacion,
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        email: email,
        usuario: usuario
    });
    const clienteGuardado = await cliente.save();
    console.log(clienteGuardado);
    res.status(200).json({ message: 'cliente creado'});
}
exports.getClientes = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
}
exports.getClienteById = async (req, res) => {
    const cliente = await Cliente.findByPk(req.params.id);
    if(!cliente) return res.status(400).json({title: 'not found', error: 'El cliente no existe.'})
    res.status(200).json({cliente});
}
exports.updateClienteById = async (req, res) => {
    await Cliente.update(req.body, { where: { id: req.params.id } });
    res.json({
        status: 'cliente actualizado'
    });
}
exports.deleteClienteById = async (req, res) => {
    await Cliente.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json({
        status: 'cliente eliminado'
    });
}