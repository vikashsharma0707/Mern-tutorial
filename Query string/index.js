const express = require("express");
const app=express();

app.get("/search",(req,res)=>{
    console.log(req,express.query)
    res.send("seacrh is running")
})

app.get("/home",(req,res)=>{
    let {q} = req.query;
   if(!q){
    res.send("<h1>data is not found")
   }

   else{
    res.send(`these are the search result ${q}`)
   }
})

app.listen(8000,()=>{
    console.log("server is running")
})