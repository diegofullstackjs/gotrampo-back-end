const {Router} = require('express');
const Route = Router();
const UserCreate = require('../controllers/UserCreate')
const UserAuth = require('../controllers/AuthController')
const UserController = require('../controllers/UserController');
const AuthMiddleware = require('../middleware/Auth')
Route.post('/update/location',[AuthMiddleware.JWTVERIFY],UserController.update_location)
Route.post('/create',UserCreate)
Route.post('/login',UserAuth)
module.exports = Route;