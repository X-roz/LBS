const mongoose = require('mongoose');

const conn = require('../../utils/db');

const loadLoginSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
})
const LoadLogin = conn.loadDb.model('loadlogin',loadLoginSchema)

module.exports = LoadLogin;