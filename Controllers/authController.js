const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const secretKey = process.env.SECRET
const User = require('../Models/Users')


async function authenticateUser(req, resp){
    const {email, passwd} = req.body
    console.log(email, passwd)
    if(!email && !passwd) {
        resp.status(400).json({
            message:'Invalid parameters'
        })
    }
    const userFind = await User.findOne({username:email}).exec()
    console.log(userFind)
    if(!userFind){
        resp.status(401).json({message:"user not found, please check and try again"})
    }
    const passwdCheck = await bcrypt.compare(passwd, userFind.password);
    console.log(passwdCheck)
    if(passwdCheck){
        users = {
          email: email,
        };
        jwt.sign({ users }, secretKey, (err, token) => {
          resp.json({
            user:userFind.username,
            message: "message",
            token: token,
          });
        });

    }else{
        resp.status(400).json({
            message:"invalid Password"
        })
    };

    
};

module.exports = {authenticateUser}