const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./config/router')
require('./config/db')

app.use(express.json())
app.use(cors())


app.get('/', function (req, res) {
    res.send('Hello Word')
})

app.post('/', function (req, res) {

    res.json()
})

app.use(router)
app.listen(3000, function () {
    console.log('Server Running')
})