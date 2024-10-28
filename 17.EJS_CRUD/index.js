// const express = require("express");
// const app = express();
// const path = require("path")
// const {v4:uuidv4}  = require("uuid")

// app.use(express.urlencoded({ extended: true }))
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"))

// app.use(express.static(path.join(__dirname, "public")))




// let posts = [
//     {
//         id: uuidv4(),
//         username: "java",
//         content: "this is good language"
//     },

//     {
//         id: uuidv4(),
//         username: "react",
//         content: "this is good language"
//     }
// ]

// app.get("/posts", (req, res) => {
//     res.render("index.ejs", { posts })
// })

// app.get("/posts/new", (req, res) => {
//     res.render("input.ejs")
// })

// app.post("/posts", (req, res) => {
//     //console.log(req.body);
//     // insert id
//     // let {id,username,content} =req.body;
//     // posts.push({id,username,content})

//     // automatic genterated id
//     let {  username, content } = req.body;
//     let id = uuidv4();
//     posts.push({  id,username, content })
//     res.redirect("/posts")
// })

// app.get("/posts/:id", (req, res) => {
//     let { id } = req.params;
//     let post = posts.find((p) => id == p.id)
//     res.render("show.ejs", { post })
// })

// app.delete("/posts/:id",(req,res)=>{
//     let {id}  = req.params;
//      posts = posts.filter((p)=>id !== p.id);
//     res.send("data delete sucessfulyy")
// })

// app.listen(8000, () => {
//     console.log("server is ruuning")
// })


const express = require("express");
const methodOverride = require("method-override");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); // Enables DELETE and PUT requests from forms

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

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
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("input.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id == p.id);
    res.render("show.ejs", { post });
});

app.patch("/posts/:id",(req,res)=>{
  let {id} = req.params;
  let newcontent = req.body.content
  console.log(newcontent);
  let post = posts.find((p)=> id == p.id)
  post.content = newcontent;
  console.log(post)
  res.redirect("/posts")
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id == p.id)
    res.render("edit.ejs",{post})
})

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts"); // Redirect after deleting
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});


