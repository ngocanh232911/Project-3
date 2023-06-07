const mongoose= require("mongoose")
const foodSchema=new mongoose.Schema({
    name:{
        type:String, 
        require:true
    }
,
address :{
    type: String,

},
tagName: {
    type:String
},
 id: {
    type:mongoose.Schema.Types.ObjectId, 
    ref:"food"
 },
linkImg:
{
    type: String,
    require:true
},
type:{
    type: String,
    require:true
}})
 let Food= mongoose.model("Food", foodSchema);
 module.exports={Food};
