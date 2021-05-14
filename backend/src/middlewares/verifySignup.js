const db = require('../database/models/index');
const Usuario = require('../database/models/usuario')(db.sequelize, db.Sequelize.DataTypes);

exports.checkDuplicateUsername = async (req, res, next)=>{
    const user= await Usuario.findOne({username: req.body.username});

    if(user) return res.status(400).json({message: "The user already exists"});

    next();
}