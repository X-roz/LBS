const mongoose = require('mongoose');

const conn=require('../../utils/db');

const truckDetailsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    truck_details: {
        type: Array,
        required: false
    }
})
const TruckDetails = conn.truckDb.model('truckdetails',truckDetailsSchema)

module.exports = TruckDetails;