const express = require('express');
const jwt = require("jsonwebtoken");
const Person = require("../models/panchayath");
const peopleRouter = express.Router();


//===============verify Token==================
function verifyToken(req,res,next){
  
  const bearerHeader = req.headers["authorization"]
  //console.log(bearerHeader)
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(" ")
    const bearerToken= bearer[1]
    req.token=bearerToken
    next()
  }else{
    res.sendStatus(403)
  }

}

//============================================

//Insert
peopleRouter.post("/",async (req, res) => {
    const personNew = new Person(req.body);    
    try {
      const savePerson = await personNew.save();
      res.status(200).json(savePerson);
       //verify token
    // jwt.verify(req.token,'panchayathManullor',(err)=>{  
    //   if(err){  
    //       res.sendStatus(403);  
    //   }else{
    //     console.log(savePerson)
        
    //   }  

    //  }); 
     
    } catch (err) {
        console.log("err");
      res.status(500).json(err);
    }
  });

//Get All
peopleRouter.get("/", async (req, res) => {    
  try {     
      const persons= await Person.find();
    res.status(200).json(persons);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//Get view of fields
peopleRouter.get("/:skipValue/:limitValue",verifyToken,async (req, res) => {
 
  const tempValueLmt=parseInt(req.params.limitValue);
  const tempValueSkp=parseInt(req.params.skipValue);
 
  try {
    const persons = await Person.find({},{കോഡ്: 1, കുടുംബനാഥൻ്റെ_പേര്: 1, വയസ്സ്_ജനന_തീയ്യതി: 1,
      വാർഡിൻ്റെ_പേര്:1,മേൽവിലാസം:1,ഫോൺ_നമ്പർ:1,റേഷൻ_കാർഡ്:1})
    .skip(tempValueSkp).limit(tempValueLmt);

    res.status(200).json(persons);
    
    //verify token
    // jwt.verify(req.token,'panchayathManullor',(err)=>{  
    //   if(err){  
    //       res.sendStatus(403);  
    //   }else{

    //     res.status(200).json(persons);
    //   }  
    //  }); 
  
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//Get search view of fields
peopleRouter.get("/:searchWith/:skipdata/:limitdata",verifyToken,async (req, res) => {
  const tempValLmt=parseInt(req.params.limitdata);
  const tempValSkp=parseInt(req.params.skipdata);
  const tempSearch=req.params.searchWith;
  
  try {
    const persons = await Person.find({$or : [{"കുടുംബനാഥൻ്റെ_പേര്" : { $regex :"^" + tempSearch ,$options:'i' }}
                , {"വാർഡിൻ്റെ_പേര്" : { $regex : "^" + tempSearch ,$options:'i' }}
                ,{"മേൽവിലാസം" : { $regex : "^" + tempSearch ,$options:'i' }}
                , {"ഫോൺ_നമ്പർ" : { $regex : "^" + tempSearch ,$options:'i' }}
              ]},{ കോഡ്: 1, കുടുംബനാഥൻ്റെ_പേര്: 1, വയസ്സ്_ജനന_തീയ്യതി: 1,
                വാർഡിൻ്റെ_പേര്:1,മേൽവിലാസം:1,ഫോൺ_നമ്പർ:1,റേഷൻ_കാർഡ്:1}
       )
       .skip(tempValSkp).limit(tempValLmt);
       
        //verify token
        jwt.verify(req.token,'panchayathManullor',(err)=>{  
          if(err){  
              res.sendStatus(403);  
          }else{
    
            res.status(200).json(persons);
          }  
         }); 
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});



  
module.exports = peopleRouter;