const express = require("express");
const postRouter= express.Router();
const postReqControl=require("../controllers/postrequestController");
//1.user routes
postRouter.get("/postReq",postReqControl.getReq);
postRouter.post("/postReq",postReqControl.postReq);

module.exports=postRouter;