const express =require("express");
const app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get("/home",(req,res)=>{
    res.send("hello")
})

app.get("/rolldice",(req,res)=>{
    let numval = Math.floor(Math.random() *6)+1
    res.render("random.ejs",{num:numval})
})

app.listen(8000,()=>{
  console.log("server is running")
})