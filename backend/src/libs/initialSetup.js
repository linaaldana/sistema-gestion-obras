const db = require('../database/models/index');
const Role = require('../database/models/role')(db.sequelize, db.Sequelize.DataTypes);

exports.createRoles = async () => {
    const count = await Role.count({ distinct: 'id' });

    if (count > 0) return;

    new Role({ nombre: 'Administrador' }).save();
    new Role({ nombre: 'Jefe de Obra' }).save();
    new Role({ nombre: 'Subcontratista' }).save();
    new Role({ nombre: 'Técnico/Trabajador' }).save();
}