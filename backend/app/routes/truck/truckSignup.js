const express= require('express')
const router=express.Router();
const main=require('../../controllers/truck/truckSigupcontrols')

router.get('/get-trucksignup-details',main.fetchDetails);

router.post('/add-trucksignup-details',main.addDetails);


module.exports=router;

