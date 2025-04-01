const getAllUsers=(req,res)=>
  {
    res.send(`fetching all users`);
  }
const addUser=(req,res)=>
  {
    res.send(`adding a new user`);
  }
const getUserById=(req,res)=>
  {
    let userid = parseInt(req.params.id);
  res.send(`fetching user with ID: ${userid}`);
  }

  module.exports={getAllUsers,addUser,getUserById};
