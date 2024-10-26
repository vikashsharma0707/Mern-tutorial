const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("This is root page")
})

app.get("/:username",(req,res)=>{
   console.log(req.params);
   res.send("This is parameter page")
})

app.get("/home/:username/:id",(req,res)=>{
    console.log(req.params);
    res.send("<h1>This is home page parameter")
})

app.get("/about/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    console.log(`welcome to the page of @${username}`)
})

app.get("/display/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    let htmlstr = `<h1>welcome to the page of@ ${username} ${id}</h1>`
    res.send(htmlstr)
    
})

app.listen(8004,()=>{
    console.log("server is running")
})