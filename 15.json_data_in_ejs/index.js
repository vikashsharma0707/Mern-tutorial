const express =require("express");
const app = express();

app.set("view engine","ejs");

app.get("/id/:username",(req,res)=>{
    let {username}=req.params
    const jsondata = require("./data.json")
    const data = jsondata[username]
    
    if(data){
        res.render("index.ejs",{data})
    }

    else{
        res.render("error.ejs")
    }
 
  
})

app.listen(8000,()=>{
    console.log("server is running ")
})