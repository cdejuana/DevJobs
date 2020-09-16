// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

//Require external modules
const mongoose = require('mongoose')
const routes = require('./routes')

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/app-empleo',  {useNewUrlParser: true})
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

// CORS
fastify.register(require('fastify-cors'), { 
    // put your options here
    // You can use it as is without passing any option, or...
    // https://github.com/fastify/fastify-cors
})

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
        fastify.swagger()
        fastify.log.info(`listening on ${fastify.server.address().port}`)
        console.log('servidor conectado')
        fastify.log.info(`server listening on ${fastify.server.address().port}`)        
    } catch (error) {
        fastify.log.error(error)
        console.log('error')
        process.exit(1)        
    }
}

start()