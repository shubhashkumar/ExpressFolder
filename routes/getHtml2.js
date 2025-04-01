const express= require("express");
const getHtml2Router= express.Router();
const getHtml2Controller= require("../controllers/getHtml2Controller");
getHtml2Router.get("/api/products",getHtml2Controller.getProduct2);
module.exports=getHtml2Router;