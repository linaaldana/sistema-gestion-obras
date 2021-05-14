const db = require('../database/models/index');
const Usuario = require('../database/models/usuario')(db.sequelize, db.Sequelize.DataTypes);
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.signup = async (req, res) => {
    const { username, password, role } = req.body;
    const newUser = new Usuario({
        username: username,
        password: await Usuario.encryptPassword(password), role: role
    });
    const usuarioGuardado = await newUser.save();

    const token = jwt.sign({ id: usuarioGuardado.id }, config.SECRET, {
        expiresIn: 86400
    })

    res.json({ token });
}

exports.signin = async (req, res) => {
    const user = await Usuario.findOne({where: { username: req.body.username }});

    if (!user) return res.status(400).json({ title: "not found", error: "El usuario no existe" });

    const matchPassword = await Usuario.comparePassword(req.body.password, user.password);

    if (!matchPassword) {
        console.log(user);
        return res.status(401).json({ token: null, error: 'Contraseña invalida' })
    };


    const token = jwt.sign({ id: user.id }, config.SECRET, {
        expiresIn: 86400
    })

    res.status(200).json({ token });
}