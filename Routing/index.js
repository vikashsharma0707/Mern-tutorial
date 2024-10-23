


const express =require("express");
const app= express();

app.get("/",(req,res)=>{
    res.send("<h1>This is index page")
})

app.get("/home",(req,res)=>{
    res.send("<h1>This is home page")
})

app.post("/about",(req,res)=>{
    res.send("<h1>This is post request")
})

app.post("/display",(req,res)=>{
    res.post("<h1>this is display page")
})

// custom response * which for if path not match then it will send response
app.get("*",(req,res)=>{
    res.send("this path does not exit")
})

app.listen(8005,()=>{
    console.log("server is running")
})