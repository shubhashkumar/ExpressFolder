const express = require("express");
const Eproduct= express.Router();
//1.user routes
Eproduct.get("/products",(req,res,next)=>
{
  res.send(`fetching all products`);
})
Eproduct.get("/products/:id",(req,res,next)=>
  {
    let PId = parseInt(req.params.id);
  res.send(`fetching cart for user with ID: ${PId}`);
  })
Eproduct.post("/products",(req,res,next)=>
  {
    res.send(`adding a new product`);
  })
module.exports=Eproduct;