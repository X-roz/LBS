const mongoose=require('mongoose')

const conn=require('../../utils/db')

const loadSignupSchema = new mongoose.Schema({
    
    first_name:{
        type:String,
        required: true
    },
    last_name:{
        type:String,
        required: true
    },
    company_name:{
        type:String,
        required: true
    },
    gender: {
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
    company_phone_number: {
        type: Number,
        required: true
    },
    company_address:{
        type:String,
        required:true
    }

},{timestamps:true})

const LoadSignup = conn.loadDb.model('loadsignup',loadSignupSchema);

module.exports=LoadSignup;