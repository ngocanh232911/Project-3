const {Food}= require("../models/Food");
const foodController={
    addFood:async (req,res)=>{
        try{
            const newFood=new Food(req.body);
    const saveFood= await newFood.save()
    res.status(200).json(saveFood);
          } catch(err){
            res.status(500).json(err)
          }
    
    },

};
module.exports={foodController}