import { Viaje } from '../models/Viaje.js';

const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    })

}

const paginaNosotros = (req, res) => {

    // const viajes = 'Viaje a Alemania';

    res.render('Nosotros', {
        // le paso valores hacia la vista desde aqui
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => {
    // Consultar la base de datos, el findAll viene desde la api de sequelize
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    })
}

// Muestra un viaje por su Slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params; 

    try {
        const viaje = await Viaje.findOne({ where: { slug } }); // slug es la columna de la base de datos
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })

}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}