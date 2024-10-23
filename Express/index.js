
// basic program 
// const express = require("express");
// const app = express();

// let port=8000;

// app.listen(port,()=>{
//     console.log(`app is run on ${port}`)
// })


const express =require("express");
const app=express();

let port =8000;

app.listen(port,(error)=>{
   if(!error){
    console.log(`app is running in ${port}`)
   }

   else{
    console.log("server is not running")
   }
})