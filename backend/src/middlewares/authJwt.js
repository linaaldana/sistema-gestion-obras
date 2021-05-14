const jwt = require('jsonwebtoken');
const config = require('../config');
const db = require('../database/models/index');
const Usuario = require('../database/models/usuario')(db.sequelize, db.Sequelize.DataTypes);
const Role = require('../database/models/role')(db.sequelize, db.Sequelize.DataTypes);

exports.verifyToken = async (req, res, next) => {
    try{
        const token = req.headers["x-access-token"];
    console.log(token);

    if(!token) return res.status(403).json({message: "No token provided"});
    const decoded = jwt.verify(token, config.SECRET);
    
    const user = await Usuario.findOne({id: decoded.id})
    if (!user) return res.status(404).json({message: 'no user found'});
    console.log(decoded);
    next();
    }catch (error){
        return res.status(401).json({message: 'Unauthorized'});
    }
}

exports.isModerator= async (req,res,next) => {
   const usuario =  await Usuario.findOne({id: req.id })
   await Role.findOne({id: Usuario.role});

   next();

}