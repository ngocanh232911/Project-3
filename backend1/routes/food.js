const { foodController } = require("../controllers/foodController");

const router= require("express").Router();

router.post("/" , foodController.addFood);
module.exports= router;


