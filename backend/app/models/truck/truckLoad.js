const mongoose = require('mongoose');

const conn=require('../../utils/db');

const truckloadSchema = new mongoose.Schema({

    truckprovider_name: {
        type: String,
        required: true
    },
    loadprovider_name: {
        type: String,
        required: true
    },
    truck_email: {
        type: String,
        required: true
    },
    load_email: {
        type: String,
        required: true
    },
    truck_no: {
        type: String,
        required: true
    },
    load_id:{
        type: String,
        required: true
    },
    company_name: {
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
    status:{
        type : String,
        required: true
    },
    driver1_name :{
        type : String, 
        required: true
    },
    driver2_name :{
        type : String, 
        required: false
    },
    driver1_number:{
        type : String, 
        required: true
    },
    driver2_number:{
        type : String, 
        required: false
    },
    truck_no:{
        type : String, 
        required: false
    }

},{timestamps:true})
const TruckLoad = conn.truckDb.model('truckloads',truckloadSchema)

module.exports = TruckLoad;