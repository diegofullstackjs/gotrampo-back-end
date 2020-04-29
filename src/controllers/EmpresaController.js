const EmpresasModel = require('../models/Empresa')
module.exports.update_location = async (req,res) => {
    const {latitude,longitude} = req.body;
    const me = await EmpresasModel.findOne({_id:req.usuario._id}).exec();
    me.location.type = "Point";
    me.location.coordinates = [latitude,longitude];
    await me.save();
    return res.status(200).json(me)
}