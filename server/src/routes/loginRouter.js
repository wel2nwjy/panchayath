const express = require('express'); 
const loginRouter = express.Router();
const bcrypt = require('bcrypt'); 
const Users = require("../models/user");
const jwt = require("jsonwebtoken");

const userRoleRouter = express.Router();
const UserRoles = require("../models/userRole");

//LOGIN
loginRouter.post("/", async (req, res) => {

  //console.log(req.body)
  
    try {
      const user = await Users.findOne({ email: req.body.email },{name:1, password: 1,email:1 ,role: 1,staus:1 });
      
      if(!user) return res.status(200).json("Wrong credentials!");
      
      const validated = await bcrypt.compare(req.body.password, user.password);
      if(!validated) return res.status(200).json("Wrong credentials!");
      
      const { password, ...others } = user._doc;

      const userRole = await UserRoles.findOne({ role: others.role },{dataEntry:1,masterEntryProject:1});


      if(!userRole) return res.status(200).json("Role not assigned..Please check with the admin!");

      const { _id, ...othersdtls } = userRole._doc;

      const userdetails={
        ...others,
        ...othersdtls
      }

       //token generation
       jwt.sign(
        { email: user.email, id: user._id },
        "panchayathManullor",
        { expiresIn: "1d" },
        (err, token) => {
          if (err) {
            res.json({ status: "error in token generation" });
          } else {
            
             res.status(200).json({ token, user: userdetails });

            
          }
        }
      );
  
   
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = loginRouter;