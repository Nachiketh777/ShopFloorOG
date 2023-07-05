const loginLogic = require("../Logic/loginLogic");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.route("/login").post((req,res)=>{
    const parameter = req.body;
    loginLogic(parameter);
    console.log("Hi")
})
module.exports = router;