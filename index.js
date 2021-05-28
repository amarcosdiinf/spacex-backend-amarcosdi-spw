const express = require('express');
const app = express();
const cors = require('cors')

const {config} = require('./config/index');

const misionesApi = require('./rutas/misiones');
const corsOptions = {origin : ["http://localhost:3001", "https://spacex-backend.vercel.app/"]}

app.use(cors(corsOptions));

app.use(express.json());

misionesApi(app);

app.listen(config.port, () => {
    console.log(`servidor escuchando en ${config.port}`);
})