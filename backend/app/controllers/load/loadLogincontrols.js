const LoadLogin = require('../../models/load/loadLogin');

class  main{

    static async fetchDetails(req,res)
    {
        const checking = {
            "email":req.body.email,
            "password":req.body.password
        }
        const email = req.body.email;
       
        let loadlogin = await LoadLogin.find(checking);
        if(!loadlogin.length)
        {
            res.send({status:"NO",message:"email id or password is worng"});
        }
        else
        {
            res.send({status:"OK",message:"vaild email id and password",key:email})                
        }
    }

  
}

module.exports=main;