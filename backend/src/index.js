const express = require('express');
const morgan = require('morgan');
const { Pool, Client } = require('pg');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuarios');
const obraRoutes = require('./routes/obras');
const clienteRoutes = require('./routes/clientes');
const authRoutes = require('./routes/auth');
const { createRoles } = require('./libs/initialSetup');

const connectionString = 'postgressql://registro_aca:lina159@localhost:5432/sistema_gestion_obras';

const client = new Client({
    connectionString: connectionString
})

const app = express();

createRoles();
client.connect()
    .then(db => console.log('BD connected'))
    .catch(err => console.error(err));

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes
app.use('/usuarios', usuarioRoutes);
app.use('/obras', obraRoutes);
app.use('/clientes', clienteRoutes);
app.use('/auth', authRoutes);

//Static files
app.use(express.static(__dirname + '/public'));

//Server is listening

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});
