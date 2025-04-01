const getProducts=(req,res)=>
{
  res.send(`fetching all products`);
}
const getProductById=(req,res)=>
{
  let PId = parseInt(req.params.id);
  res.send(`fetching cart for user with ID: ${PId}`);
}
const postProduct=(req,res)=>
  {
    res.send(`adding a new product`);
  }

 module.exports={
  getProducts,getProductById,postProduct
 }