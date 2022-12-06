const mongoose = require('mongoose');

const conn=require('../../utils/db');

const truckLoginSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
})
const TruckLogin = conn.truckDb.model('trucklogin',truckLoginSchema)

module.exports = TruckLogin;