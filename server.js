'use strict'
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname,'src','config','.env')})
const http = require('http')
const express = require('express')

const app = express();
const server = http.createServer(app)

const io = require('socket.io').listen(server)
server.listen(process.env.PORT || 3333)