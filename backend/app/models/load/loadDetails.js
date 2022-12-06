const mongoose = require('mongoose');

const conn=require('../../utils/db');

const loadDetailsSchema = new mongoose.Schema({

    load_id:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    from: {
        type : String,
        required: true
    },
    to: {
        type : String, 
        required: true
    },
    goods_name: {
        type : String, 
        required: true
    },
    tons:{
        type:Number,
        required:true
    },
    amount :  {
        type : Number, 
        required: true
    },
    pick_address :{
        type : String, 
        required: true
    },
    drop_address :{
        type : String,
        required: true
    },
    from_phone_number:{
        type:Number,
        required:true
    },
    to_phone_number:{
        type:Number,
        required:true
    },
    from_state:{
        type : String,
        required: true
    },
    to_state:{
        type : String,
        required: true
    },
    due_date:{
        type:Number,
        required:true
    },
    status :{
        type : String, 
        required: true
    }   
    
},{timestamps:true})
const LoadDetails = conn.loadDb.model('loaddetails',loadDetailsSchema)

module.exports = LoadDetails;