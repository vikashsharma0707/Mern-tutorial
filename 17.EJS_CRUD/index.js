const express = require("express");
const app = express();
const path = require("path")
const {v4:uuidv4}  = require("uuid")

app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))




let posts = [
    {
        id: uuidv4(),
        username: "java",
        content: "this is good language"
    },

    {
        id: uuidv4(),
        username: "react",
        content: "this is good language"
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts })
})

app.get("/posts/new", (req, res) => {
    res.render("input.ejs")
})

app.post("/posts", (req, res) => {
    //console.log(req.body);
    // insert id
    // let {id,username,content} =req.body;
    // posts.push({id,username,content})

    // automatic genterated id
    let {  username, content } = req.body;
    let id = uuidv4();
    posts.push({  id,username, content })
    res.redirect("/posts")
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id == p.id)
    res.render("show.ejs", { post })
})

app.listen(8000, () => {
    console.log("server is ruuning")
})


