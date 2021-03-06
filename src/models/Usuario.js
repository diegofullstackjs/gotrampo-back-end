const {Schema,model} = require('mongoose')
const Usuario = new Schema({
    name:{type:String,required:true},
    phone:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique: true},
    password:{type:String,required:true},
    cpf:{type:String,required:true},
    is_actived:{type:Boolean, default:true},
    location: {
        type:{
            type: String,
            enum: ['Point']
        },
        coordinates:{
            type:[Number],
            index: "2dsphere"
        }
    },
    create_at:{
        type:Date,
        default: Date.now
    }
})
module.exports = model('usuarios',Usuario)