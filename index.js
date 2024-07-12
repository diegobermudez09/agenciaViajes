// inicializar express
import express from 'express'
import router from './routes/index.js';

const app = express(); // es necesario que solo haya UNA instancia global de la aplicación

// Definir Puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Agregar Router
app.use('/', router) // el .use> soporta todos los metodos de https 




app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})