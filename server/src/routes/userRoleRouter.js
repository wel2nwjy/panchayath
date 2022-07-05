const express = require('express'); 
const userRoleRouter = express.Router();
const UserRoles = require("../models/userRole");


//Insert new roles

userRoleRouter.post("/new", async (req, res) => {
 
    const dataRecievecd= req.body

    try {   
      const newUserRole = new UserRoles(dataRecievecd); 
      const userRoleAdded = await newUserRole.save();
      res.status(200).json(userRoleAdded);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //get all roles inserted in the db

userRoleRouter.get("/allroles", async (req, res) => {

  try {
    const getAllUserRoles = await UserRoles.find({},{role:1});
    res.status(200).json(getAllUserRoles);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = userRoleRouter;