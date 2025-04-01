const express = require("express");
const Ecart= express.Router();
//1.user routes
Ecart.get("/cart/:id",(req,res,next)=>
{
  let userId = parseInt(req.params.id);
  res.send(`fetching cart for user with ID: ${userId}`);
})
Ecart.post("/cart/:id",(req,res,next)=>
  {
    let userId = parseInt(req.params.id);
    res.send(`Adding product to cart for user with ID: ${userId}`);
  })
module.exports=Ecart;