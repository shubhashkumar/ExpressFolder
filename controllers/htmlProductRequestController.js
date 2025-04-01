const path= require("path");

const getApiProducts=(req,res)=>
{
  res.sendFile(path.join(__dirname,"..","view","product.html"));
}

module.exports={getApiProducts};