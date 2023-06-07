// const User= require("../models/auth");
const {User}= require("../models/auth");

const userController={

    // get all users
    getAllUsers: async(req,res)=>{
        console.log(User, 'User')
      try{
        
         const user = await User.find();
         res.status(200).json(user);
      } catch(err){
        console.log(err,'oooooo')
        res.status(501).json(err)
      }
    },
    deleteUser: async(req,res)=>{
        try{
            const user=  User.findById(req.params.id);
            res.status(200).json("Delete successfully")
        }catch(err){
            res.status(500).json(err)
        }
    }
}
module.exports=userController