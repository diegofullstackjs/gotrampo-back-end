const MainController = require('../controllers/MainController')

const {Router} = require('express');

const Route = Router();

Route.post('/', MainController.fetch)
module.exports = Route;