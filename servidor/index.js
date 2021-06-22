const express = require('express');
const conectarDB = require('./config/db');

// crear el servidor
const app = express();

// conectar a la base de datos
conectarDB();

// puerto de la app
const  PORT = process.env.PORT || 4000;

// definir la página principal
// app.get('/', (req, res) => {
//     res.send('Hola mundo')
// });

// arrancar la app
app.listen(PORT, () => {
    console.log("El servidor esta funcionando en el puerto ${PORT}");
});