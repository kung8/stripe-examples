require('dotenv').config()
const {SERVER_PORT} = process.env
const ctrl = require('./controller')
const express = require('express')
const app = express()
app.use(express.json())

app.post('/api/payment',ctrl.pay)

app.listen(SERVER_PORT,()=>console.log(`Keep running on ${SERVER_PORT}`))