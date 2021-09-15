const db = require('../database/models/index');
const Avance = require('../database/models/avanceobra')(db.sequelize, db.Sequelize.DataTypes);



exports.createAvance = async (req, res) => {
    const { descripcion, idObra } = req.body;    
    
    const avance = new Avance({
        fecha: Date.now(),
        descripcion: descripcion,
        idObra: idObra
    });
    const avanceGuardado = await avance.save();
    console.log(avanceGuardado);
    res.status(200).json({ message: 'avance creado'});
}
exports.getAvances = async (req, res) => {
    const avances = await Avance.findAll();
    res.status(200).json(avances);
}
exports.getAvanceById = async (req, res) => {
    const avance = await Avance.findByPk(req.params.id);
    if(!avance) return res.status(400).json({title: 'not found', error: 'El avance no existe.'})
    res.status(200).json({avance});
}
exports.updateAvanceById = async (req, res) => {
    await Avance.update(req.body, { where: { id: req.params.id } });
    res.json({
        status: 'avance actualizado'
    });
}
exports.deleteAvanceById = async (req, res) => {
    await Avance.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json({
        status: 'avance eliminado'
    });
}