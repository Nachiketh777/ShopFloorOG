const db = require("./controller(db)/connection");
const express = require("express");
const login = require("./routes/loginRoute");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());


app.use("/api/auth", login)

app.listen(5000, (req,res)=>{
    console.log("server is up and running")
})