const getCartForUser=(req,res,next)=>
  {
    let userId = parseInt(req.params.id);
    res.send(`fetching cart for user with ID: ${userId}`);
  };

  const addProductToCart=(req,res,next)=>
    {
      let userId = parseInt(req.params.id);
      res.send(`Adding product to cart for user with ID: ${userId}`);
    };

    module.exports={getCartForUser,addProductToCart}