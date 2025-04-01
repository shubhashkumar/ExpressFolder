const express= require("express");
const apiProduct= express.Router();
const htmlProduct= require("../controllers/htmlProductRequestController");
apiProduct.get("/api/product",htmlProduct.getApiProducts);
module.exports=apiProduct;