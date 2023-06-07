const authController = require("../controllers/authController");
const middlewareController = require("../controllers/middlewareController");

const router= require("express").Router();
//Register
router.post("/register" , authController.registerUser);

//Login
router.post("/login", authController.loginUser)
//refresh
router.post("/refresh", authController.requestRefreshtoken);
//Logout
router.post("/logout",middlewareController.verifyToken, authController.userLogout)

module.exports= router;