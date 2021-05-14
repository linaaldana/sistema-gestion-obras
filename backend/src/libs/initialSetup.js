const db = require('../database/models/index');
const Role = require('../database/models/role')(db.sequelize, db.Sequelize.DataTypes);

exports.createRoles = async () => {
    const count = await Role.count({ distinct: 'id' });

    if (count > 0) return;

    new Role({ nombre: 'admin' }).save();
}