const express=require("express");
const router= express.Router();
//1.get orders
router.get("/", (req, res, next) => {
  res.send(`
     Here is the list of all orders.`);
});
//2.post orders
//1.get orders
router.post("/", (req, res, next) => {
  res.send(`
     A new order has been created.`);
});

module.exports=router;
