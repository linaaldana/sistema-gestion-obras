const db = require('../database/models/index');
const Usuario = require('../database/models/usuario')(db.sequelize, db.Sequelize.DataTypes);
const Role = require('../database/models/role')(db.sequelize, db.Sequelize.DataTypes);


exports.createUsuario = async (req, res) => {
    const { nombre, username, email, password, role, telefono, direccion, foto } = req.body;
    const roleFound = await Role.findOne({ where: { nombre: role}});
    console.log(roleFound);
    const newUser = new Usuario({
        nombre: nombre,
        username: username,
        email: email,
        password: await Usuario.encryptPassword(password),
        role: roleFound.id,
        telefono: telefono,
        direccion: direccion,
        foto: foto
    });
    const usuarioGuardado = await newUser.save();
    console.log(usuarioGuardado);
    res.status(200).json({ message: 'Usuario creado'});
}
exports.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
}
exports.getUsuarioById = (req, res) => {

}
exports.updateUsuarioById = async (req, res) => {
    await Usuario.update(req.body, { where: { id: req.params.id } });
    res.json({
        status: 'Usuario actualizado'
    });
}
exports.deleteUsuarioById = async (req, res) => {
    await Usuario.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json({
        status: 'Usuario eliminado'
    });
}

