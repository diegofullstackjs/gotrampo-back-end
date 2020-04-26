const jwt = require('jsonwebtoken');

module.exports.JWTVERIFY = async (req,res,next) => {
    const header = req.headers.authorization;
    if(header){
        const token = header.replace("Bearer ","")
        await jwt.verify(token,process.env.SECRET_KEY,(err,user)=> {
            if(err){
                console.warn(err)
                return res.status(200).json({message: err.message})
            }
            req.usuario = user.find;

            next()
        })
    }else{
        return res.status(200).json({message: "Nao foi enviada a token"})
    }
}