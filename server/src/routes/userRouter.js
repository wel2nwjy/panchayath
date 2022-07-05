const express = require('express'); 
const userRouter = express.Router();
const bcrypt = require('bcrypt'); 
const Users = require("../models/user");


//REGISTRATION
userRouter.post("/register", async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if(user) return res.status(200).json("Email Id Already Exist!");
  
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt); 
    const dataRecievecd= req.body

    try {   
      const newUser = new Users(dataRecievecd); 
      const adduser = await newUser.save();
      res.status(200).json(adduser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //Update User Password
  userRouter.post("/changepassword", async (req, res) => {
    let currentPassword=req.body.currentPwd;
    let newPassword=req.body.newPwd;
    const salt = await bcrypt.genSalt(10);
    newPassword = await bcrypt.hash(newPassword, salt); 

    try {
      const user = await Users.findOne({ email: req.body.email });

      const validated = await bcrypt.compare(currentPassword, user.password);
      if(!validated) return res.status(200).json("Wrong Password!");

      //db.student.updateOne({name: "Annu"}, {$set:{age:25}})

      const updatedUserPwd=await Users.updateOne({ email: req.body.email }, {$set:{password:newPassword}});

      res.status(200).json({updatedUserPwd});
    }catch (err) {
      res.status(500).json(err);
    }

    })


module.exports = userRouter;