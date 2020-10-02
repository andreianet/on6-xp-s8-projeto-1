const express = require("express")
const app = express()
const router = require('./route/gamesRoutes.js')

app.use('/jogos', router)



module.exports = app