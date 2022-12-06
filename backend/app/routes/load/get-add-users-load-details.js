const express = require('express')
const router= express.Router();
const main=require('../../controllers/load/get-add-user-load-details')

router.get('/get-user-load-details',main.getUserDeatils);

router.post('/add-user-load-details',main.addLoadDetails);

router.get('/get-loads',main.getLoads);


router.get('/get-load-status',main.getLoadStatus)

router.get('/get-loadbyid',main.getLoadbyid)


module.exports=router