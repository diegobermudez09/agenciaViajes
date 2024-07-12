import express from 'express'

const router = express.Router(); // estamos usando la instancia de express pero solo utilizando el router

/*
    req> lo que enviamos
    res> lo que express nos responde

    send> solo imprime texto
    render> espera el nombre de la vista para mostrarlo
*/
router.get('/', (req, res) => {
    res.render('inicio')
})
router.get('/nosotros', (req, res) => {

    // const viajes = 'Viaje a Alemania';

    res.render('Nosotros', { 
        // le paso valores hacia la vista desde aqui
        // textoViajes: viajes
    })
})

export default router;