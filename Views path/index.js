const express =require("express");
const app = express();
const path =require("path")


app.set("view engine","ejs");
app.set("views".path.join(_dirname,"/views"))

app.get("/",(req,res)=>{
    res.render("index.ejs")
})



app.listen(8002,()=>{
    console.log("server is running")
})