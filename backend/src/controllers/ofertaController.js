const boom = require('boom')

// Get Data Models
const Oferta = require('../models/Oferta')

// Get all cars
exports.getOfertas = async (req, res) => {
    try {
        const ofertas = await Oferta.find()
        return ofertas
    } catch (error) {
        throw boom.boomify(error)
    }
}

// Get single car by ID
exports.getSingleOferta = async (req, res) => {
    try {
        const id = req.params.id_oferta
        const oferta = await Oferta.findById(id)
        return oferta
    } catch (error) {
        throw boom.boomify(error)
    }
}

// Add a new oferta
exports.addOferta = async (req, res) => {
    try {
        const oferta = new Oferta(req.body)
        // const oferta = new Car({ ...req.body })
        return oferta.save()
    } catch (error) {
        throw boom.boomify(error)
    }
}

// Update an existing oferta
exports.updateOferta = async (req, res) => {
    try {
        const id = req.params.id
        const oferta = req.body
        const { ...updateData } = oferta
        const update = await Oferta.findByIdAndUpdate(id, updateData, { new: true})
        return update
    } catch (error) {
        throw boom.boomify(error)
    }
}

// Delete a oferta
exports.deleteOferta = async (req, res) => {
    try {
        const id = req.params.id
        const oferta = await Oferta.findByIdAndRemove(id)
        return oferta
    } catch (error) {
        throw boom.boomify(error)
    }
}

