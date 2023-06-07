const userController = require("../controllers/userController");
const middlewareController= require("../controllers/middlewareController")
const router = require("express").Router();

// get all user
router.get("/get-user",middlewareController.verifyToken, userController.getAllUsers)

// Delete user
router.delete("/:id",middlewareController.verifyTokenAndAdminAuth, userController.deleteUser)

module.exports=router