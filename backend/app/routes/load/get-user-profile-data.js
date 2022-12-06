const express =require('express')
const router = express.Router()
const main=require('../../controllers/load/get-user-profile-data')

router.get('/get-profile-data',main.getUserProfile)

module.exports=router;