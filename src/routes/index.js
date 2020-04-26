const {Router} = require('express');

const Route = Router();

module.exports = Route.get('/',(req,res) => {
    return res.status(200).json({
        message: "User found"
    })
})