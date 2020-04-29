'use strict'
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname,'src','config','.env')})
const morgan = require('morgan')
const bodyParser = require('body-parser')
const http = require('http')
const express = require('express')
const mongodb = require('./src/config/database')
const indexRoutes = require('./src/routes/index')
const usersRoutes = require('./src/routes/users')
const empresaRoute = require('./src/routes/empresas')

const app = express();
const server = http.createServer(app)

process.env.MODE === 'development'? app.use(morgan('dev')) : app.use(morgan('combined'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',indexRoutes)
app.use('/users',usersRoutes)
app.use('/empresas',empresaRoute)

/* socket */
const io = require('socket.io').listen(server)
require('./src/websocket/socket')(io)
app.use((req,res,next) => {
    req.io = io;
    next();
})

server.listen(process.env.PORT || 3333,() => {
    mongodb()
})
