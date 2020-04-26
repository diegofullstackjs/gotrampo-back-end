const mongoose = require('mongoose');

global.Promise = mongoose.Promise;

module.exports = async () => {
    try{
        mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        }).then(() => {
            console.info('DATABASE CONECTED')
        })
    }catch(e){
        const err = new Error(err);
        throw err;
    }
}