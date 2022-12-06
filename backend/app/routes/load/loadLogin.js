const express = require('express');
const router = express.Router();
const main=require('../../controllers/load/loadLogincontrols');



router.post('/get-loadlogin-details',main.fetchDetails)


module.exports = router