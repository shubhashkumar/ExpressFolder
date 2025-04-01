const path= require("path");

const getProduct2=(req,res)=>
{
 res.sendFile(path.join(__dirname,"..","view","getHtml2.html"));
}

module.exports={getProduct2};
