
// basic respone
const express = require("express");
const app = express();


// basic response
// app.use((req,res)=>{
//   res.send("server is running")
// })

// object send
// app.use((req,res)=>{
//   res.send({
//     "name":"jay",
//     "subject":"express"
//   })
// })



// html tags
// app.use((req,res)=>{
//   res.send("<h1>server is running")
// })


// html tags
app.use((req,res)=>{
    res.send("<h1>Fruits</h><ul><li>Banana</li><li>Apple</li>")
})

app.listen(2000,()=>{
    console.log("app is running")
})