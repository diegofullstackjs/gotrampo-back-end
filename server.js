'use strict'
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname,'src','config','.env')})
const morgan = require('morgan')
const http = require('http')
const express = require('express')
const indexRoutes = require('./src/routes/index')
const usersRoutes = require('./src/routes/users')

const app = express();
const server = http.createServer(app)

process.env.MODE === 'development'? app.use(morgan('dev')) : app.use(morgan('combined'))

app.use(indexRoutes)
app.use(usersRoutes)
const io = require('socket.io').listen(server)
server.listen(process.env.PORT || 3333)