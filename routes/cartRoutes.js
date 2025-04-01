const express = require("express");
const Ecart= express.Router();
const eProductController=require("../controllers/eCartController");

Ecart.get("/cart/:id",eProductController.getCartForUser);
Ecart.post("/cart/:id",eProductController.addProductToCart);
//1.user routes
// Ecart.get("/cart/:id",(req,res,next)=>
// {
//   let userId = parseInt(req.params.id);
//   res.send(`fetching cart for user with ID: ${userId}`);
// })
//2. Ecart.post("/cart/:id",(req,res,next)=>
//   {
//     let userId = parseInt(req.params.id);
//     res.send(`Adding product to cart for user with ID: ${userId}`);
//   })
module.exports=Ecart;