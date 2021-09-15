const express = require('express');
const morgan = require('morgan');
const { Pool, Client } = require('pg');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require("swagger-jsdoc");
const usuarioRoutes = require('./routes/usuarios');
const obraRoutes = require('./routes/obras');
const clienteRoutes = require('./routes/clientes');
const trabajdorRoutes = require('./routes/trabajadores');
const avancesRoutes = require('./routes/avances');
const fotosRoutes = require('./routes/fotos');
const georeferenciasRoutes = require('./routes/georeferencias');
const vozRoutes = require('./routes/voz');
const authRoutes = require('./routes/auth');
const { createData } = require('./libs/initialSetup');

const connectionString = 'postgressql://registro_aca:lina159@localhost:5432/sistema_gestion_obras';

const client = new Client({
    connectionString: connectionString
})

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Sistema Gestion de Obras",
        description: "SGO API Information",
        servers: ["http://localhost:3000"]
      }
    },
    // ['.routes/*.js']
    apis: ["app.js"]
  };

const app = express();

createData();
client.connect()
    .then(db => console.log('BD connected'))
    .catch(err => console.error(err));

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
app.use('/usuarios', usuarioRoutes);
app.use('/obras', obraRoutes);
app.use('/clientes', clienteRoutes);
app.use('/trabajadores', trabajdorRoutes);
app.use('/avances', avancesRoutes);
app.use('/fotos', fotosRoutes);
app.use('/georeferencias', georeferenciasRoutes);
app.use('/voz', vozRoutes);
app.use('/auth', authRoutes);

//Static files
app.use(express.static(__dirname + '/public'));

//Server is listening

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});
