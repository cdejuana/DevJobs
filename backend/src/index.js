// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

//Require external modules
const mongoose = require('mongoose')
const routes = require('./routes')

// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/app-empleo',  {useNewUrlParser: true})
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

// declare a route
fastify.get('/', async (req, res) => {
    return { hello: 'world'}
})

// initialise routes
routes.forEach((route, index) => {
    fastify.route(route)
})

// run the server
const start = async () => {
    try {
        await fastify.listen(3000)
        console.log('servidor conectado')
        fastify.log.info(`server listening on ${fastify.server.address().port}`)        
    } catch (error) {
        fastify.log.error(error)
        console.log('error')
        process.exit(1)        
    }
}

start()