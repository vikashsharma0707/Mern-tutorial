

// basic request handling
const express = require("express");
const app = express();

let port = 8001;

app.use((req, res) => {
    console.log("request is coming")
})

app.listen(port, () => {
    console.log(`server is running ${port}`)
})


