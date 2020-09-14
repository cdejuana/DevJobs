// Import our Controllers
const ofertaController = require('../controllers/ofertaController')

const routes = [
    {
        method: 'GET',
        url: '/api/ofertas',
        handler: ofertaController.getOfertas
    },
    {
        method: 'GET',
        url: '/api/ofertas/:id',
        handler: ofertaController.getSingleOferta
    },
    {
        method: 'POST',
        url: '/api/ofertas',
        handler: ofertaController.addOferta,
        //schema: documentation.addCarSchema
    },
    {
        method: 'PUT',
        url: '/api/ofertas/:id',
        handler: ofertaController.updateOferta
    },
    {
        method: 'DELETE',
        url: '/api/ofertas/:id',
        handler: ofertaController.deleteOferta
    },   
]

module.exports = routes