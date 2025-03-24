const express= require("express");
const bookLib= express.Router();
bookLib.get("/",(req,res,next)=>
{
  res.send("Here is the list of books!");
})
bookLib.post("/",(req,res,next)=>
{
  res.send("Book has been added!");
})
module.exports=bookLib;