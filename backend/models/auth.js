const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    minlength: 6,
    maxlength: 14,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    minlength: 6,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
  admin:{
    type:Boolean,
    default:false,
  }
});

let User = mongoose.model("users", userSchema);
module.exports = { User };
