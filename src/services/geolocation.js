const geocoder = require('node-geocoder');

module.exports = (street) => {
    new Promisse((resolve,reject) => {
        const options = {
            provider: process.env.GEOCORDER,
            httpAdapter: "https",
            apiKey: "MAPGUEST_KEY",
            formatter:null
        }
        
        const coder = geocoder(options);
        
        geocoder.gecode(street), (err,res) => {
            if(err){
                let e = new Error(err);
                reject(err)
            }
            resolve(res)
        }
    })


}