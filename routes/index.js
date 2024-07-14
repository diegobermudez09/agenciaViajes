import express from 'express'
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js'
const router = express.Router(); // estamos usando la instancia de express pero solo utilizando el router

/*
    req> lo que enviamos
    res> lo que express nos responde

    send> solo imprime texto
    render> espera el nombre de la vista para mostrarlo
*/
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje); // : comodin* el slug es la columna de la base de datos


router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);


export default router;