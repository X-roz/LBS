const TruckSignup = require('../../models/truck/truckSignup');
const TruckLogin  = require('../../models/truck/truckLogin');
const TruckDetails = require('../../models/truck/truckDetails');

class main
{
    static async fetchDetails(req,res)
    {
        const check = {email:req.query.email}
        const t1=await TruckSignup.find(check)
        console.log(t1);
        
        if(t1.length <=0)
        {
            res.send({status:"false",message:"no data fetched"});
        }
        else
        {
            res.send({status:"true",message:"data fetched",profileData:t1});
        }

    }

    static async addDetails(req,res)
    {
        const checking = await TruckSignup.find({"email":req.body.email})

        //console.log(checking);

        if(!checking.length)
        {
            const email=req.body.email;
            const password =req.body.password;
    
            let trucklogin=new TruckLogin({
                email: email,
                password: password
            })
    
            const t= await trucklogin.save()
    
            let trucksignup=new TruckSignup({
                "First_name":req.body.First_name,
                "Last_name":req.body.Last_name,
                "Gender":req.body.Gender,
                "email":req.body.email,
                "password":req.body.password,
                "owner_phone_number":req.body.owner_phone_number,
                "address":req.body.address
            });
    
            const t1 = await trucksignup.save()
            
    
            const name = req.body.First_name +" "+req.body.Last_name;
    
            let truckdetails=new TruckDetails({
                "name": name,
                "email":email
            })
    
            const t2 = await truckdetails.save();

            res.status(200).send({status:"OK",message:"successfully added"});
        }

        else
        {
            res.send({status:"NO",message:"email id already exists"})
        }
        
    }
}


module.exports=main;
