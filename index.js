const express = require('express');
const app = express();

const {config} = require('./config/index');

const misionesApi = require('./rutas/misiones');

const cors = require('cors');
//const corsOptions = { origin : ["http://localhost:4200", "https://spacex-amarcosdi-amarcosdiinf-upsaes.vercel.app/"]}; 
// app.use(cors(corsOptions));

app.use(cors())

/*
if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
         res.header('Access-Control-Allow-Origin', '*');
         res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
         app.options('*', (req, res) => {
               res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
              res.send();
      });
   });
}
*/

app.use(express.json());
app.use(express.urlencoded({extended: false}));

misionesApi(app);

app.listen(config.port, () => {
    console.log(`servidor escuchando en ${config.port}`);
})