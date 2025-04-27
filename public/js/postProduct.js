const getProductHandler= (e)=>
{
  e.preventDefault();
  console.log("form submitted successfully");
  const product=e.target.productName.value;
  const obj=
  {
    "productName":product
  }
  axios.post('http://localhost:4000'+"/postReq",obj).then((result)=>
{
console.log(result.data);
})
}