require('dotenv').config()
const express = require('express')
const app = express()
const route = require('./routes/route')


app.use(express.json(), express.urlencoded({extended: true}), route)

app.listen(process.env.PORT, (error) => {
    try {
        if(error) {
            throw new Error('Server is not running')
        }
        console.log(`Server is running in port: ${process.env.PORT}`)
    } catch (error) {
        console.log(error.message)
    }
})
