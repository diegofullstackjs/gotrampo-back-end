const EmpresasModel = require('../models/Empresa')
const jwt = require('jsonwebtoken')
module.exports = async (req,res) => {
    const {email,password} = req.body;
    try{
        const find = await EmpresasModel.findOne({email:email}).exec();
        if(find){
            if(find.password !== password)
            {
                return res.status(200).json({message: "Senha incorreta"})
            }
           await jwt.sign({find},process.env.SECRET_KEY,{expiresIn: '30d'},(err,token) => {
               if(err){
                   console.log(err)
                   return res.status(200).json({message: "Ocorreu um erro em gerar a autenticaçao"})
               }
               return res.status(200).json({user:find,token:token})
           });
        }

    }catch(e){
        console.warn(e)
        return res.status(500).json({error: true, message: "Ocorreu um erro inesperado"})
    }
}