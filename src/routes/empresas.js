
const {Router} = require('express');
const EmpresaCreate = require('../controllers/EmpresaCreate')
const EmpresaAuth = require('../controllers/EmpresasAuth')
const EmpresaController = require('../controllers/EmpresaController')
const Route = Router();

Route.post('/create',EmpresaCreate)
Route.post('/login',EmpresaAuth)
Route.post('/update/location',EmpresaController.update_location)


module.exports = Route;