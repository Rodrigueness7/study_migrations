const db = require('../database/db')
const {Sequelize} = require('sequelize')


class Product {
    idProduct
    product
    value
    amount


    constructor(data) {
        this._idProduct = data.idProduct
        this._product = data.product
        this._value = data.value
        this._amount = data.amount
    }

    get _idProduct() {
        return this.idProduct
    }

    set _idProduct(value) {
        if(value == undefined) {
            return this.idProduct = 0
        }
        return this.idProduct = value
    }

    get _product() {
        return this.product
    }

    set _product(value) {
        if(value == undefined) {
            return this.product = null
        }
        return this.product = value
    }

    get _value() {
        return this.value
    }

    set _value(value) {
        if(value == undefined) {
            return this.value = null
        }
        return this.value = value
    }

    get _amount() {
        return this.amount
    }

    set _amount(value) {
        if(value == undefined) {
            return this.amount = null
        }
        return this.amount = value
    }

  
    item = db.define('Product', {
        idProduct: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        product: {
            type: Sequelize.STRING,
            allowNull: false
        },
        value: {
            type: Sequelize.DECIMAL
        },
        amount: {
            type: Sequelize.INTEGER
        }
        
     })

   async addProducts(data) {
    await this.item.create(data)
    }

   async findProduct() {
       const values = (await this.item.findAll()).map(itens => {
           return itens.dataValues
        }) 
        return values
    }

   async findByIdProduct(data) {
     const valueId = await this.item.findByPk(data)

    return valueId
   }

   async updateProduct(req,data) {
    const value = await this.item.findByPk(req)

    value.product = data.product,
    value.value = data.value,
    value.amount = data.amount

    await value.save();
   }

   async deleteProduct(req) {
    const valueId = await this.item.findByPk(req)

    valueId.destroy()

   }
}

module.exports = Product