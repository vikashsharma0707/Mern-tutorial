const express = require("express");
const app = express();

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    //res.render("home.ejs")
    res.render("home")
})


app.listen(8000,()=>{
    console.log("server is running")
})