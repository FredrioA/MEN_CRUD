const monngoose = require('mongoose')

var schema = new monngoose.Schema({
    name:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require:true,
        unique:true
    }
})

const Userdb = monngoose.model('userdb',schema);

module.exports = Userdb;