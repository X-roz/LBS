const express=require('express')
const router=express.Router()
const main=require('../../controllers/load/loadSignuncontrols')

router.get('/get-loadsignup-details',main.fetchDetails)

router.post('/add-loadsignup-details',main.addDetails);


module.exports=router;