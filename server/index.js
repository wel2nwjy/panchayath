const express=require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const personRouter = require("./src/routes/peopleRouter");
const downloadRouter = require("./src/routes/downloadRouter")
const loginRouter = require("./src/routes/loginRouter")
const userRouter = require("./src/routes/userRouter")
const userRoleRouter = require("./src/routes/userRoleRouter")


const app=express();
//moment().format('MMMM Do YYYY, h:mm:ss a') 


const MONGO_URL =
  "mongodb+srv://shemy123:ofAkE5fEi2kqwELQ@cluster0.zqkff.mongodb.net/TrialData?retryWrites=true&w=majority";
  const PORT = process.env.PORT || 5000;
  
   app.use(cors());
  // parse requests of content-type - application/json
  app.use(express.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
//===========================//

  mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log(`successful connection to BBDD`);
    //console.log(res);
  })
  .catch((error) => {
    console.log("error" + error.message);
  });
  
//Routes used for Panchayath
   app.use("/api/people", personRouter);
   app.use("/api/download",downloadRouter)
   app.use("/api/login",loginRouter)
   app.use("/api/user",userRouter)
   app.use("/api/userRole",userRoleRouter)

 // set port, listen for requests userRoleRouter

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});