// inicializar express

const express = require('express');

const app = express();

// Definir Puerto
const port = process.env.PORT || 4000;

app.listen(() => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})