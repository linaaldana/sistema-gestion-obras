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
    createClients();
    createWorks();
}

var createRoles = async () => {
    const count = await Role.count({ distinct: 'id' });

    if (count > 0) return;

    new Role({ nombre: 'Administrador' }).save();
    new Role({ nombre: 'Jefe de Obra' }).save();
    new Role({ nombre: 'Subcontratista' }).save();
    new Role({ nombre: 'Técnico/Trabajador' }).save();
    new Role({ nombre: 'Cliente' }).save();
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

    new User({  nombre: 'juanito perez',
                username: 'juanito',
                email: 'juanito@juanito.com',
                password: await User.encryptPassword('juanito'),
                role: '5',
                telefono: '987654321',
                direccion: '321 calle falsa, Springfield',
                foto: null }).save();
}

var createClients = async () => {
    const count = await Client.count({ distinct: 'id' });

    if (count > 0) return;

    new Client({tipoIdentificacion: 'Cedula de ciudadania',
                numeroIdentificacion: '258741963',
                usuario: '2'}).save()
}

var createWorks = async () => {
    const count = await Work.count({ distinct: 'id' });

    if (count > 0) return;

    new Work({  fechaInicio: new Date('1995-12-17T03:24:00'),
                fechaFin: new Date('2089-12-17T03:24:00'),
                nombre: 'Edificio FAI univalle',
                descripcion: 'Ya paila mi FAI',
                direccion: 'Calle 13 # 100-00',
                porcentajeAvance: '10',
                jefeObra: null,
                cliente: '2'})
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