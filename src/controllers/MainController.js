const UserModel = require('../models/Usuario')

module.exports.fetch = async (req,res) =>{
    try{
        console.log(req.body)
        const find = await UserModel.find({
            location:{
                $near:{
                    $minDistance: 0,
                    $maxDistance: 1000,
                    $geometry: {
                     type: "Point",
                     coordinates: [req.body.longitude, req.body.latitude]
                    }
                }
            }
        }).exec()

        return res.status(200).json(find)
    }catch(e){
        console.warn(e)
        return res.status(500).json({error: true, message: "Ocorreu um erro inesperado"})
    }
}