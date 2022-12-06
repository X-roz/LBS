const LoadSignup = require("../../models/load/loadSignup");
const LoadLogin =require('../../models/load/loadLogin');


class main{

    static async fetchDetails(req,res)
    {
        const l=await LoadSignup.find()
        res.send(l);
    }

    static async addDetails(req,res)
    {

        const checking = await LoadSignup.find({"email":req.body.email})
   
        //console.log(checking);

        if(!checking.length)
        {
            let loadsignup = new LoadSignup({
                "first_name":req.body.first_name,
                "last_name":req.body.last_name,
                "company_name":req.body.company_name,
                "gender":req.body.gender,
                "email":req.body.email,
                "password":req.body.password,
                "company_phone_number":req.body.company_phone_number,
                "company_address":req.body.company_address
            })
    
            const l1=await loadsignup.save(); 

            let loadlogin = new LoadLogin({
                email:req.body.email,
                password:req.body.password
            })
    
            let l=await loadlogin.save()
            res.status(200).send({status:"OK",message:"successfully added"})
        }
        else
        {
            res.send({status:"NO",message:"email id is already exists"});
        }

        

    }
}

module.exports=main;


 