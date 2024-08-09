const express = require('express')
const route = express.Router()
const controller = require('../controller/controllerProducts')

route.get('/findAll', controller.findAll)
route.get('/find/:id', controller.findById)
route.post('/addProduct', controller.addItem)
route.put('/update/:id', controller.updateProduct)
route.delete('/delete/:id', controller.removerProduct)


module.exports = route