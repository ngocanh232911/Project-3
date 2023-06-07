const bcrypt= require("bcrypt")
const {User}= require("../models/auth")
const jwt = require ("jsonwebtoken");
let refreshTokens=[]
const authController= {
    registerUser: async(req,res)=>{
        try{
             const salt =await bcrypt.genSalt(10);
             const hashed=await bcrypt.hash(req.body.password, salt);
            //  Creat new user
            const newUser= await new User({
                username:req.body.username,
                email:req.body.email,
                password:hashed,
            });
            // Save to DB
             const user=await newUser.save();
             res.status(200).json(user);

        }catch(err){
            res.status(500).json(err)
        }

    },
    //Generate access token
    generateAccessToken:(user)=>{
      return jwt.sign({
        id:user.id, 
        admin:user.admin
      },
      "88888888",
      {expiresIn:"60s"}
      );
    },
    //generate fresh token
    generateRefreshToken:(user)=>{
      return jwt.sign({
        id:user.id, 
        admin:user.admin
      },
      "88888888",
      {expiresIn:"365d"}
      );
    },
   /// Login
   loginUser:async(req,res)=>{
    try{
          const user=await User.findOne({username:req.body.username});
          if(!user){
            res.status(404).json("Wrong username!");
          }
          const validPassword= await bcrypt.compare(
            req.body.password,
            user.password
          );
          if(!validPassword){
            res.status(404).json("Wrong password")
          };
          if(user && validPassword){
            const accessToken=authController.generateAccessToken(user);
            const refreshToken= authController.generateRefreshToken(user);
            refreshTokens.push(refreshToken)

            res.cookie("refreshtoken", refreshToken,
            {
              httpOnly:true,
              path:"/",
              secure:false,
              sameSite:"strict",
            });
            res.status(200).json({user,accessToken, refreshToken});
          }
    } catch(err){
        res.status(500).json(err)
    }
   },
   requestRefreshtoken: async(req, res)=>{
    //take refresh token from user
    const refreshToken=req.cookies.refreshToken;
    if(!refreshToken) return res.status(401).json("you're not authenticated");
    if(!refreshTokens.includes(refreshToken)){
      return res.status(403).json("Refresh token is not valid")
    }
    jwt.verify(refreshToken, "8888888", (err,user)=>{
      if(err){
        console.log(err)
      }
      refreshTokens=refreshTokens.filter((token)=> token!== refreshToken)
      // create new accesstoken, refreshtoken
      const newAccessToken=authController.generateAccessToken(user);
      const newRefreshToken= authController.generateRefreshToken(user);
      res.cookie("refreshtoken", refreshToken,
      {
        httpOnly:true,
        path:"/",
        secure:false,
        sameSite:"strict",
      });
      res.status(200).json({accessToken:newAccessToken});
    });
  
   },
   //logout
   userLogout: async(req,res)=>{
    res.clearCookie("refeshToken");
    refreshTokens= refreshTokens.filter(token=> token !== req.cookies.refreshToken);
    res.status(200).json("Logged out")
   }

}
module.exports =authController;
