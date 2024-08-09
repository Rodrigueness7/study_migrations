const Product = require('../model/product')

const addItem = async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.addProducts(product)
        res.send('add')
    } catch (error) {
        res.send(error)
    }
}

const findAll = async (req, res) => {
    try {
        const product = new Product(req.body)
        const newProduct = ((await product.findProduct()).map(
            itens => {
               return itens    
            }
        ))
        res.send(newProduct)
    } catch (error) {
        res.send(error)
    }
}

const findById = async (req, res) => {
    try {
       const product = new Product(req.body)
       const result =  product.findByIdProduct(req.params.id)
        result.then(
            data => {
                res.send(data)
            } 
        )
    } catch (error) {
        res.send(error.message)   
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = new Product(req.body)
        product.updateProduct(req.params.id, req.body)
        res.send('feito')
    } catch (error) {
        res.send(error.message)
    }

}

const removerProduct = async (req, res) => {
    try {
        const product = new Product(req.body)
        product.deleteProduct(req.params.id)
        res.send('delete')
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {addItem, findAll, findById, updateProduct, removerProduct}