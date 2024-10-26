const express =require("express");
const app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    let numval = Math.floor(Math.random() *6)+1
    res.render("index.ejs",{num:numval})
})

app.listen(8005,(req,res)=>{
    console.log("server is running")
})