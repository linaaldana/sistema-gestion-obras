const db = require('../database/models/index');
const Advance = require('../database/models/avanceobra')(db.sequelize, db.Sequelize.DataTypes);
const Client = require('../database/models/cliente')(db.sequelize, db.Sequelize.DataTypes);
const Photo = require('../database/models/foto')(db.sequelize, db.Sequelize.DataTypes);
const Georeference = require('../database/models/georeferencia')(db.sequelize, db.Sequelize.DataTypes);
const Work = require('../database/models/obra')(db.sequelize, db.Sequelize.DataTypes);
const Role = require('../database/models/role')(db.sequelize, db.Sequelize.DataTypes);
const User = require('../database/models/usuario')(db.sequelize, db.Sequelize.DataTypes);

exports.createData = async () => {
    createRoles();
    createUsers();
    createWorks();
    createGeoreferences();
    createAdvances();
    createPhotos();
    createClients();
}

var createRoles = async () => {
    const count = await Role.count({ distinct: 'id' });

    if (count > 0) return;

    new Role({ nombre: 'admin' }).save();
}

var createUsers = async () => {
    const count = await User.count({ distinct: 'id' });

    if (count > 0) return;

    new User({  nombre: 'admin',
                username: 'admin',
                email: 'admin@admin.com',
                password: await User.encryptPassword('admin'),
                role: '1',
                telefono: '123456789',
                direccion: '123 calle falsa, Springfield',
                foto: null }).save();
}

var createWorks = async () => {
    const count = await Work.count({ distinct: 'id' });

    if (count > 0) return;
}

var createGeoreferences = async () => {
    const count = await Georeference.count({ distinct: 'id' });

    if (count > 0) return;
}

var createAdvances = async () => {
    const count = await Advance.count({ distinct: 'id' });

    if (count > 0) return;
}

var createPhotos = async () => {
    const count = await Photo.count({ distinct: 'id' });

    if (count > 0) return;
}

var createClients = async () => {
    const count = await Client.count({ distinct: 'id' });

    if (count > 0) return;
}