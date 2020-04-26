const {Router} = require('express');
const Route = Router();
const UserCreate = require('../controllers/UserCreate')
const UserAuth = require('../controllers/AuthController')
Route.post('/create',UserCreate)
Route.post('/login',UserAuth)
module.exports = Route;