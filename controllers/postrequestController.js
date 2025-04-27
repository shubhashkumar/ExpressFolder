const path= require("path");

const getReq=(req,res)=>
{
  res.sendFile(path.join(__dirname,"..","view","postreq.html"));
}
const postReq=(req,res)=>
  {
    const data=req.body;
    console.log(data);
    res.send(data);
  }

module.exports={getReq,postReq};