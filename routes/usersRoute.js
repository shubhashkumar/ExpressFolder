const express = require("express");
const Euser= express.Router();
//1.user routes
Euser.get("/users",(req,res,next)=>
{
  res.send(`fetching all users`);
})
Euser.get("/users/:id",(req,res,next)=>
  {
    let userid = parseInt(req.params.id);
  res.send(`fetching user with ID: ${userid}`);
  })
Euser.post("/users",(req,res,next)=>
  {
    res.send(`adding a new user`);
  })
module.exports=Euser;