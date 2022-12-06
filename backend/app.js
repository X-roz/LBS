const express = require('express')

const app = express()
app.use(express.json())

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

//login route
const loadLoginRoute = require('./app/routes/load/loadLogin');
app.use('/loadlogin',loadLoginRoute)

const truckLoginRoute=require('./app/routes/truck/truckLogin');
app.use('/trucklogin',truckLoginRoute)


// sign up routes
const loadSignupRoute=require('./app/routes/load/loadSignup');
app.use('/loadsignup',loadSignupRoute)

const truckSignupRoute=require('./app/routes/truck/truckSignup');
app.use('/trucksignup',truckSignupRoute);


// getting particular user load details 
const getUserLoadDetails = require('./app/routes/load/get-add-users-load-details');
app.use('/loaddetails',getUserLoadDetails);

//getting particular user profile details for load
const getUserProfileData = require('./app/routes/load/get-user-profile-data');
app.use('/loadprofile',getUserProfileData)


app.listen(4000,()=>{console.log("i am working")})