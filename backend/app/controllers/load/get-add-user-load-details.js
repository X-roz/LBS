const LoadDetails = require('../../models/load/loadDetails');
const LoadSignup = require('../../models/load/loadSignup')

class main
{

    static async getUserDeatils(req,res)
    {
        const check = { email:req.query.email};

        const userDetails = await LoadDetails.find(check);
        const details = await LoadSignup.find(check);
        const name = details[0].first_name +" "+ details[0].last_name;
        const company_name = details[0].company_name;
        if(!userDetails.length)
        {
            res.send({status:"false",message:"no data found regaring you",name:name,company_name:company_name})
        }
        else{
            res.status(200).send({message:"success",userLoadDetails:userDetails});
        }
    }

    static async addLoadDetails(req,res)
    {
        const check = {email:req.query.email};
        const id={load_id:req.body.load_id};
        const details = await LoadSignup.find(check);
        const idCheck = await LoadDetails.find(id);
        if(idCheck.length > 0)
        {
            res.status(200).send({status:"id",message:"load id alredy present"});
        }
        else{

           try{
            
           const name = details[0].first_name +" "+ details[0].last_name;
           const company_name = details[0].company_name;
           const email = req.query.email;

           const loadDetails = new LoadDetails({
               "load_id":req.body.load_id,
               "name" : name,
               "company_name" : company_name,
               "email" : email,
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
               "status" : "unbooked"
           })
           
           const l1=await loadDetails.save(); 

           res.status(200).send({status:"true",message:"added successful"})

           }
           catch(err){
              res.send({status:"false",message:"not addded successful",error:err})
           }

        }



    }

    static async getLoads(req,res){

        const check={
            status:"unbooked"
        }

        const loads = await LoadDetails.find(check)

        if(!loads.length)
        {
            res.send({status:"false",message:"something went wrong"})
        }
        else{
            res.status(200).send({message:"success",LoadDetails:loads});
        }
    }

    static async getLoadStatus(req,res){

        const check = {
            email : req.query.email,
            status : req.query.status
        }

        const load_details = await LoadDetails.find(check)

        if(!load_details.length)
        {
            res.send({status:"false",message:"nothing"})
        }
        else{
            res.status(200).send({status:"true",message:"success",LoadDetails:load_details});
        }

    }

    static async getLoadbyid(req,res){

        const check = { load_id : req.query.load_id}

        const loadByid_details = await LoadDetails.find(check)

        console.log(loadByid_details);

        if(loadByid_details.length <= 0)
        {
            res.status(200).send({status:"false",message:"there is no load details regarding the id"});
        }
        else
        {
            res.status(200).send({status:"true",message:"Success",loadbyId:loadByid_details});
        }


    }

}

module.exports=main;