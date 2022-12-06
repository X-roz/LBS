const LoadSignup = require('../../models/load/loadSignup');

class main{

    static async getUserProfile(req,res){

        const check ={ email:req.query.email};

        const profileData = await LoadSignup.find(check)
        if(!profileData.length)
        {
            res.status(406).send({message:"no user found"})
        }
        else{
            res.status(200).send({message:"success",profileData:profileData});
        }
    }
}


module.exports=main;