const User = require('../Models/Users')
const bcrypt = require('bcrypt')



async function registerUsers (req, resp) {
//   console.log(req.body);
// Validate req.body before adding to db
  const {username, password } = req.body
  const userExist = await User.findOne({username:username}).exec()
  if(userExist) return resp.status(409).json({"message":`${username} already exist`});
  try{
    const hashPd = await bcrypt.hash(password, 10)
    const results = await User.create({
      username: username,
      password: hashPd,
    });
    console.log(results)
    resp.status(200).send(results);
  } catch (err){
    console.log(err)
  }
 
};

async function getAllUsers(req, resp){
  const allUsers = await User.find()
  resp.status(200).send(allUsers)

};




module.exports = { registerUsers, getAllUsers }