const express = require("express");
const app = express();
const ordersRouter= require("./routes/order");
app.use("/orders",ordersRouter);
//Create Your Own Middleware and Routing
/*
app.use("/welcome",(req,res,next)=>
{
   req.user="Guest";
   console.log(req.user);
   res.send(`
    <h1>Welcome,${req.user}</h1>`);
})
*/
//Question-Routes
/*
//1.get orders
app.get("/orders", (req, res, next) => {
  res.send(`
     Here is the list of all orders.`);
});
//2.post orders
//1.get orders
app.post("/orders", (req, res, next) => {
  res.send(`
     A new order has been created.`);
});
//1.get users
app.get("/users", (req, res, next) => {
  res.send(`
     Here is the list of all users.`);
});
//2.post users
//1.get users
app.post("/users", (req, res, next) => {
  res.send(`
     A new user has been created.`);
});
*/
/* Unknown route
//1.get products
app.get("/products", (req, res, next) => {
  res.send(`
     Here is the list of all products.`);
});
//2.post orders
//1.get orders
app.post("/products", (req, res, next) => {
  res.send(`
     A new products has been added.`);
});
//1.get users
app.get("/categories", (req, res, next) => {
  res.send(`
     Here is the list of all categories.`);
});
//2.post users
//1.get users
app.post("/categories", (req, res, next) => {
  res.send(`
     A new categories has been created.`);
});
app.get("*", (req, res, next) => {
 // res.status = 404;
  res.status(404).send(`<h1> 404 -Page Not Found</h1> `);
});
*/

/*Challenge- Create a Server with Middleware for Logging
//1.get products
app.get("/products", (req, res, next) => {
  console.log(req.method,req.url);
  res.send(`
     Here is the list of all products.`);
});
//2.post orders
//1.get orders
app.post("/products", (req, res, next) => {
  console.log(req.method,req.url);
  res.send(`
     A new products has been added.`);
});
//1.get users
app.get("/categories", (req, res, next) => {
  console.log(req.method,req.url);
  res.send(`
     Here is the list of all categories.`);
});
//2.post users
//1.get users
app.post("/categories", (req, res, next) => {
  console.log(req.method,req.url);
  res.send(`
     A new categories has been created.`);
});
app.get("*", (req, res, next) => {
 // res.status = 404;
 console.log(req.method,req.url);
  res.status(404).send(`<h1> 404 -Page Not Found</h1> `);
});
*/
const PORT = 4000;
app.listen(PORT, () => {
  console.log(
    "Server is up and running on port 4000! Ready to handle requests."
  );
});
