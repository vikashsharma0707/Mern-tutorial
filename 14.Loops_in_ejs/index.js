const express = require("express");
const app = express();

app.set("view engine","ejs");

app.get("/ig/:username",(req,res)=>{
    let {username} =req.params
    const followers =["banana","apple"]
    res.render("index.ejs",{username,followers})
})

app.listen(8000,()=>{
   console.log("server is running")
})