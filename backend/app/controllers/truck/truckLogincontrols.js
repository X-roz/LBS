const TruckLogin=require('../../models/truck/truckLogin')
const TruckDetails = require('../../models/truck/truckDetails')
const TruckSignup=require('../../models/truck/truckSignup')
const TruckLoad=require('../../models/truck/truckLoad')
const LoadDetails = require('../../models/load/loadDetails')
const nodemailer = require('nodemailer');

class main
{

    static async fetchDetails(req,res)
    {
        const checking = {
            "email":req.body.email,
            "password":req.body.password
        }
        
        const email = req.body.email;
       
            let trucklogin = await TruckLogin.find(checking);

            if(!trucklogin.length)
            {
                res.send({status:"NO",message:"email id or passwrd is worng"});
            }
            else
            {
                    
                res.send({status:"OK",message:"Valid email and password",key:email});
                    
            }
    }


    static async addTruck(req,res)
    {
        const check = {email:req.query.email};

        const details = await TruckSignup.find(check);
        if(details.length <= 0)
        {
            res.status(406).send({message:"token is wrong"});
        }
        else{
           try{

                const number = req.body.truck_no;

                await TruckDetails.updateOne(check,
                    { $push: { truck_details: number } }
                 )

                
                res.status(200).send({status:"true",message:"update successful"})
              
           }
           catch(err){
            res.send({status:"false",message:"not update successful",error:err})
           }
        }
    }

    static async truckDetails(req,res)
    {
        const check ={
            email:req.query.email
        }

        const truck_details = await TruckDetails.find(check)

        if(truck_details.length <=0)
        {
            res.send({status:"false",message:"no details regarding you"});
        }
        else
        {
            res.send({status:"true",message:"success",truck:truck_details});
        }
    }

    static async truckload(req,res)
    {
        const truck_number = {
            truck_no:req.body.truck_no
        }

        const yt = await TruckLoad.find(truck_number)

        if(yt.length > 0)
        {
            if(yt[0].status == "booked")
            {
            res.status(200).send({status:"false",message:"your truck is already in progress"})
            }
            else{
                try{
                    const check ={
                        load_id:req.body.load_id
                    }
            
                    const trucklo = await LoadDetails.updateOne(check,
                        { $set: { status: "booked" } }
                    )
            
                    const truckloadDetails = new TruckLoad({
                        "truckprovider_name":req.body.truckprovider_name,
                        "loadprovider_name":req.body.loadprovider_name,
            
                        "truck_email":req.body.truck_email,
                        "load_email":req.body.load_email,
                        
                        "company_name":req.body.company_name,
                        "load_id":req.body.load_id,
                        "from" : req.body.from,
                        "to" : req.body.to,
                        "goods_name" : req.body.goods_name,
                        "pick_address" : req.body.pick_address,
                        "drop_address" : req.body.drop_address,
                        "tons":req.body.tons,
                        "amount" : req.body.amount,
                        "from_phone_number":req.body.from_phone_number,
                        "to_phone_number":req.body.to_phone_number,
                        "from_state":req.body.from_state,
                        "to_state":req.body.to_state,
                        "due_date":req.body.due_date,
                        "status" :"booked",
                        "driver1_name":req.body.driver1_name,
                        "driver1_number":req.body.driver1_number,
                        "truck_no":req.body.truck_no,
                        "driver2_name":req.body.driver2_name,
                        "driver2_number":req.body.driver2_number,  
                    })
                    const email = req.body.load_email
                    const subject = "your load has been booked by " + req.body.truckprovider_name + ":"
                    const body = "load Id : " + req.body.load_id + "<br />" + "Goods : " + req.body.goods_name + " <br/> "+ "truck No : "+req.body.truck_no +" <br /> "+ "driver's name : "+req.body.driver1_name+"<br />"+"drivers's Number : "+req.body.driver1_number + "<br />" + "<br />" + "Anytime your load can be delivered !! if any queries contact the driver's number and clarify it"
                        
                    truckloadDetails.save().then(
                       //main.MailToUsers(email,subject,body)
                    )
                    
                    res.status(200).send({status:"true",message:"successful"})
                }
                catch(err){
                    res.status(406).send({status:"false",message:"something went wrong"})
            }
            }
        }
        else{
            try{
                const check ={
                    load_id:req.body.load_id
                }
        
                const trucklo = await LoadDetails.updateOne(check,
                    { $set: { status: "booked" } }
                )
        
                const truckloadDetails = new TruckLoad({
                    "truckprovider_name":req.body.truckprovider_name,
                    "loadprovider_name":req.body.loadprovider_name,
        
                    "truck_email":req.body.truck_email,
                    "load_email":req.body.load_email,
                    
                    "company_name":req.body.company_name,
                    "load_id":req.body.load_id,
                    "from" : req.body.from,
                    "to" : req.body.to,
                    "goods_name" : req.body.goods_name,
                    "pick_address" : req.body.pick_address,
                    "drop_address" : req.body.drop_address,
                    "tons":req.body.tons,
                    "amount" : req.body.amount,
                    "from_phone_number":req.body.from_phone_number,
                    "to_phone_number":req.body.to_phone_number,
                    "from_state":req.body.from_state,
                    "to_state":req.body.to_state,
                    "due_date":req.body.due_date,
                    "status" :"booked",
                    "driver1_name":req.body.driver1_name,
                    "driver1_number":req.body.driver1_number,
                    "truck_no":req.body.truck_no,
                    "driver2_name":req.body.driver2_name,
                    "driver2_number":req.body.driver2_number,  
                })
                const email = req.body.load_email
                const subject = "your load has been booked by " + req.body.truckprovider_name + ":"
                const body = "load Id : " + req.body.load_id + "<br />" + "Goods : " + req.body.goods_name + " <br/> "+ "truck No : "+req.body.truck_no +" <br /> "+ "driver's name : "+req.body.driver1_name+"<br />"+"drivers's Number : "+req.body.driver1_number + "<br />" + "<br />" + "Anytime your load can be delivered !! if any queries contact the driver's number and clarify it" 
                    
                truckloadDetails.save().then(
                   //main.MailToUsers(email,subject,body)
                )
                
                res.status(200).send({status:"true",message:"successful"})
            }
            catch(err){
                res.status(406).send({status:"false",message:"something went wrong"})
        }
        }

    
    }


    static async truckStatus(req,res){

        const check ={
            email:req.query.email
        }
        console.log(check)
        const truck_status=[]

        const truckDetails = await TruckDetails.find(check)

        const name = truckDetails[0].name

        const trucknos=truckDetails[0].truck_details

        if(trucknos.length <=0)
        {
            res.send({status:"false",name:name})
        }
        
        trucknos.forEach(async(element) => {
            
            const check_truck ={
                truck_no:element
            }
           
            const data = await main.assignStatusToTruck(element,check_truck)
            //console.log(data)
            truck_status.push(data)
            
        })
        
        setTimeout(()=>{
            if(truck_status.length > 0){
                main.response(name,truck_status,res)
            }
        },3000)

        
        
    }

    static assignStatusToTruck(element,check_truck)
    {
    
      return TruckLoad.find(check_truck).then(tl=>{
        
        if(tl.length<=0)
        {
            return {truck_no:element,truck_status:"Idle"}
        }
        else
        {
            let flag = 0;
            try
            {
                tl.forEach(t => {
                    if(t.status == "booked")
                    {
                       flag = 1; 
                    }
                });
                if(flag == 1)
                {
                    return {truck_no:element,truck_status:"in progress"}
                }
                if(flag == 0)
                {
                    return {truck_no:element,truck_status:"Idle"}
                }
            }
            catch{
                console.log("error");
            }
        }
      }) 
    
    }

    static response(name,truck_status,res)
    {
        res.send({status:"true",name:name,trucks:truck_status})
    }

    static async getTruckLoad(req,res)
    {
        const check = {
            truck_no:req.query.truck_no,
            email:req.query.email
        }

        const truckLoadDetails = await TruckLoad.find(check)

        if(truckLoadDetails.length <= 0)
        {
            res.status(200).send({status:"false",message:"book the loads for the truck"})
        }
        else
        {
            try{

                truckLoadDetails.forEach(tk => {
                    if(tk.status == "booked")
                    {
                        res.status(200).send({status:"true",message:"success",details : tk})
                    }
                });

            }catch{
                res.status(200).send({status:"false",message:"book the loads for the truck"})
            }
            
        }
    }

    static async deliverStatus(req,res)
    {
        const check = {
            load_id:req.query.load_id
        }

        const email =req.query.email
        const subject = "Hurry !! your load have been delivered by " + req.query.name + ":"
        const body = "Load Id : " + req.query.load_id + "<br />" + "Goods Name : " + req.query.goods_name + "<br />" + "Truck No : " + req.query.truck_no + "<br />" + "Thank you for using our platform for transporting your goods."

       try{
        const ld = await LoadDetails.updateOne(check,{$set:{ status: "delivered" }})

        TruckLoad.updateOne(check,{$set:{ status: "delivered" }}).then(
           // main.MailToUsers(email,subject,body)
        )

        res.status(200).send({status:"true",message:"update successful"})
       }
       catch(er){
           res.status(200).send({status:"false",message:"update not successful"})
       }

    }

    static async deleteTruck(req,res)
    {
        try
        {
            const check = {
                email:req.query.email
            }
            const truck_no =req.query.truck_no
    
            const del = await TruckDetails.updateMany(check,
                { $pull: { truck_details :{ $in: [ truck_no ] }  } } 
            )
            
            res.status(200).send({status:"true",message:"deleted successfully"})
                           
        }

        catch(err)
        {
            res.status(200).send({status:"false",message:"deleted not successful"})
        }

    }

    static async truckloadbyid(req,res)
    {
        const check = {
            load_id:req.query.load_id
        }

        const tl_by_id = await TruckLoad.find(check)
        
        if(tl_by_id.length <=0)
        {
            res.status(200).send({status:"false",message:"load id not found"})
        }
        else
        {
            res.status(200).send({status:"true",message:"success",loadbyId:tl_by_id})
        }        
    }


    static async MailToUsers(email,subject,body)
    {
        const transport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: '',
                pass: '',
            },
        });
        const mailOptions = {
            from: '',
            to: email,
            subject: subject,
            html: body,
        };

        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            }
            console.log(`Message sent: ${info.response}`);
        })

    }
}

module.exports=main