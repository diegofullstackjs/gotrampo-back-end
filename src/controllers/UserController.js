const UerModel = require('../models/Usuario')
module.exports.update_location = async (req,res) => {
    const {latitude,longitude} = req.body;
    const me = await UerModel.findOne({_id:req.usuario._id}).exec();
    me.location.type = "Point";
    me.location.coordinates = [latitude,longitude];
    await me.save();
    return res.status(200).json(me)
}