const express =require("express");
const app= express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.listen(8005,()=>{
    console.log("server is running")
})
