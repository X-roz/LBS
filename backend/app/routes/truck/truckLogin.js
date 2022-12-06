const express=require('express')
const router=express.Router();
const main=require('../../controllers/truck/truckLogincontrols')

router.post('/get-trucklogin-details',main.fetchDetails)

router.patch('/add-truck-details',main.addTruck);

router.get('/truck-details',main.truckDetails)

router.post('/add-truckload',main.truckload)

router.get('/get-truckstatus',main.truckStatus)

router.get('/get-truckload',main.getTruckLoad)

router.patch('/deliverstatus',main.deliverStatus)

router.delete('/delete-truck-details',main.deleteTruck)

router.get('/truckload-by-id',main.truckloadbyid)

module.exports=router