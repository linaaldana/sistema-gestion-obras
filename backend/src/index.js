const express = require('express');
const morgan = require('morgan');
const { Pool, Client } = require('pg');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuarios');
const authRoutes = require('./routes/auth');
const { createRoles } = require('./libs/initialSetup');

const connectionString = 'postgressql://registro_aca:lina159@localhost:5432/sistema_gestion_obras';

const client = new Client({
    connectionString: connectionString
})

var corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



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
app.use('/auth', authRoutes);

//Static files
app.use(express.static(__dirname + '/public'));

//Server is listening

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});
