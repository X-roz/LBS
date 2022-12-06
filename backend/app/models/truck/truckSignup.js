const mongoose=require('mongoose')

const conn=require('../../utils/db');

const truckSignupSchema = new mongoose.Schema({

    First_name: {
        type: String,
        required: true
    },
    Last_name:{
        type:String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    owner_phone_number: {
        type: Number,
        required: true
    },
    address:{
        type:String,
        required:true
    }
},{timestamps:true})

const TruckSignup = conn.truckDb.model('trucksignup',truckSignupSchema)

module.exports=TruckSignup;