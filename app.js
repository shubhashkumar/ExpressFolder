const express= require('express');
const app=  express();
//Create Your Own Middleware and Routing
//const user="Guest";
app.use("/welcome",(req,res,next)=>
{
   req.user="Guest";
   console.log(req.user);
   res.send(`
    <h1>Welcome,${req.user}</h1>`);

})
const PORT=3000;
app.listen(PORT,()=>
{
  console.log( "Server is up and running on port 3000! Ready to handle requests." );
})