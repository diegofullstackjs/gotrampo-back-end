const {Schema,model} = require('mongoose')
module.exports = model('empresas',
    new Schema({
            name:{type:String,required:true},
            owner:{type:String,required:true},
            phone:{type:String,required:true,unique:true},
            email:{type:String,required:true,unique: true},
            password:{type:String,required:true},
            cnpj:{type:String,unique:true,required:true},
            is_actived:{type:Boolean, default:true}
     })
     
)