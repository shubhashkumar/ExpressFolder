const express= require('express');
const app=  express();
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
//1.get orders
app.get("/orders",(req,res,next)=>
  {
     res.send(`
     Here is the list of all orders.`);
  })
//2.post orders
//1.get orders
app.post("/orders",(req,res,next)=>
  {
     res.send(`
     A new order has been created.`);
  })
  //1.get users
app.get("/users",(req,res,next)=>
  {
     res.send(`
     Here is the list of all users.`);
  })
//2.post users
//1.get users
app.post("/users",(req,res,next)=>
  {
     res.send(`
     A new user has been created.`);
  })

const PORT=3000;
app.listen(PORT,()=>
{
  console.log( "Server is up and running on port 3000! Ready to handle requests." );
})