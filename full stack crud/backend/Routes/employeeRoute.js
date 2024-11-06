const express =require("express");
const route =express.Router();

const stuController = require("../Controller/employeeController");

route.post("/studentsave",stuController.stuDataSave)
route.get("/studentDisplay",stuController.stuDataDisplay)
route.post("/studentSearch",stuController.stuDataSearch)
route.get("/studentUpdate",stuController.stuDataDisplay)
route.post("/studentDelete",stuController.stuDataDelete)
route.post("/studentEdit",stuController.stuEdit)
route.post("/studentEditSave",stuController.stuEditSave)
route.get("/studentSearchname",stuController.stuSearchname)

module.exports=route;