const EmpresaCreate = require('../models/Empresa');

module.exports = async (req,res) => {
    try{
        const data = await EmpresaCreate.create(req.body);

        return res.status(200).json(data)
    }catch(e){
        console.warn(e)
        return res.status(500).json({error: true, message: "Ocorreu um erro inesperado"})
    }

}