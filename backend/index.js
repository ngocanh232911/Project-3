const express= require('express');
const cors= require('cors');
const app=express();
const mongoose=require("mongoose");
const bodyParser= require("body-parser");
const morgan =require("morgan");
const dotenv= require("dotenv")
const foodRoute= require("./routes/food");
const cookieParser = require('cookie-parser');
mongoose.connect("mongodb+srv://ngocanhle:ngocanhle@cluster0.ijnukwf.mongodb.net/Dataproject");
const authRoute = require("./routes/auth");
const userRoute= require("./routes/user")
    console.log("connectj");

app.use(cookieParser())
app.use(express.json())
app.use(cors());

app.use(morgan("common"));
// Routes

app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute)


app.use("/food", foodRoute );


app.listen(8000)
console.log('Server is running')

// Json web token