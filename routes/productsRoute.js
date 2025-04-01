const express = require("express");
const Eproduct= express.Router();
const eProductController=require("../controllers/eProductsController");
//1.user routes
// Eproduct.get("/products",(req,res,next)=>
// {
//   res.send(`fetching all products`);
// })
Eproduct.get("/products",eProductController.getProducts);


// Eproduct.get("/products/:id",(req,res,next)=>
//   {
//     let PId = parseInt(req.params.id);
//   res.send(`fetching cart for user with ID: ${PId}`);
//   })
Eproduct.get("/products/:id",eProductController.getProductById);
// Eproduct.post("/products",(req,res,next)=>
//   {
//     res.send(`adding a new product`);
//   })
Eproduct.post("/products",eProductController.postProduct);

module.exports=Eproduct;