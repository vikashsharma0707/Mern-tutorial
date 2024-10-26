// const express =require("express");
// const app = express()


// app.set("view engine","ejs");

// app.get("/",(req,res)=>{
//    res.render("index")
// })

// app.listen(8001,()=>{
//    console.log("server is running")
// })

const express = require("express");
const app = express();

// Set view engine to ejs
app.set("view engine", "ejs");

// Define route for the homepage
app.get("/", (req, res) => {
   res.render("index");
});

// Start the server on port 8001
app.listen(8001, () => {
   console.log("Server is running on http://localhost:8001");
});
