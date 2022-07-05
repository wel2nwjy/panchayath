import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios"

import {  Box,Button,TextField,Stack  } from '@mui/material';

import pwdvalidation from './PasswordValidation'

const ChangePwd = (props) => {

  let navigate  = useNavigate();

    let currentUser=sessionStorage.getItem("Currentuser")
    currentUser=JSON.parse(currentUser)
    let UserEmail=currentUser.email

  //=====================Text Inputs and Functions====================

  const [userInputValues, setuserInputValues] = useState({email:UserEmail ,currentPwd:"" ,newPwd:"",repeatPwd:"" })

  const userInputValueEntered=(event)=>{
    let { name, value } = event.target; //destructuring
    setuserInputValues({ ...userInputValues, [name]: value }); 
  };

     //State to verify success on submit
     const [isSubmit,setisSubmit]=useState(false);

     //State declaration for all the error messages
    var [errorMessages,seterrorMessages]= useState({});

     //Manage from getting refreshed
    const handleSubmit=(event)=>{
      event.preventDefault();
      setisSubmit(true);
      let ChkValidation=pwdvalidation(userInputValues)
      seterrorMessages(ChkValidation)
      if(ChkValidation.status){
        setisSubmit(false);
      }
    };

    //successfully updated

      //Check the user credentials with the db
  useEffect(()=>{
    if(isSubmit){
        const UserUpdatePwd=async()=>{
          const newUser=async()=>{
            try {
              const response = await axios.post('/user/changepassword',userInputValues); 
              
              if(response.status===200){
    
                let checkUserExist=typeof(response.data);
                       if(checkUserExist==="string"){
                          alert(response.data)
                          setisSubmit(false);
                       }else{
                        setisSubmit(false);
                        navigate("/")
                       }            
              }                               
           } catch (err) {
             console.log("Error : "+err)
           }
          }
          newUser();  
      }; 
      UserUpdatePwd(); 
    }    
  },[isSubmit,userInputValues]);

     

  return (
    <Box>
      
    <Box component="form" sx={{ mt: 1,mb: 2 }} onSubmit={handleSubmit}>
      <br/>
      <Stack spacing={2}>
      <TextField
            label="Current Password"
            name="currentPwd"
            size='small' 
            type="password"
            autoFocus
            autoComplete='off'
            value={userInputValues.currentPwd}
            onChange={userInputValueEntered}
            error={errorMessages.currentPwd}
            helperText={errorMessages.currentPwderrorShowMsg}
            />
            <TextField
            label="New Password"
            name="newPwd"
            size='small' 
            type="password"
            autoComplete='off'
            value={userInputValues.newPwd}
            onChange={userInputValueEntered}
            error={errorMessages.newPwd}
            helperText={errorMessages.newPwderrorShowMsg}
            />
            <TextField
            label="Confirm Password"
            name="repeatPwd"
            size='small' 
            type="password"
            autoComplete='off'
            value={userInputValues.repeatPwd}
            onChange={userInputValueEntered}
            error={errorMessages.repeatPwd}
            helperText={errorMessages.repeatPwderrorShowMsg}
            />
      </Stack><br/>
       <Stack direction="row" alignItems="center" justifyContent="center">
       <Button type='submit' color='primary' variant="contained">Update</Button>
       </Stack>
        
    </Box>
    </Box>
    
  )
}

export default ChangePwd