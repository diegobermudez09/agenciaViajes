// Se ejecuta linea por linea
// inicializar express
import express from 'express'
import router from './routes/index.js';
import db from './config/db.js';

const app = express(); // es necesario que solo haya UNA instancia global de la aplicación

// Conectar la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

// Definir Puerto
const port = process.env.PORT || 4000;

// los que llevan app. son lineas de midellware

// Obtener el año actual
app.use((req, res, next) => {

    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
})

// Habilitar PUG
app.set('view engine', 'pug');

// Agregar Router
app.use('/', router) // el .use> soporta todos los metodos de https 

// Definir la carpeta publica
app.use(express.static('public'));


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})