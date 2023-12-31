require('dotenv').config()
const compression = require("compression");
const express = require("express");
const { default: helmet } = require('helmet')
const morgan = require("morgan");
const app = express()

//init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
//init db
require('./dbs/init.mogosodb')
const { checkOverload } = require('./helpers/check.connect')
checkOverload()
//init routers
app.get('/', (req, res, next) => {
    return res.status(200).json({
        messge: 'Wellcome SDG 258'
    })
})

//hangding error

module.exports = app