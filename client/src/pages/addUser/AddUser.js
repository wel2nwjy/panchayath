import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Paper,Box,Typography,Grid,TextField,MenuItem,Select,FormControl,Switch,
  FormControlLabel,Button} from "@mui/material";
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

import userValidation from './UserValidation'
import SuccessfulAlert from "../../components/alert/SuccessfulAlert"
// const formtheme=createTheme()

let assignUserValues={ 
  "name":"",
  "email":"",
  "mobileNo":"",
  "password":"",
  "role" :"",
  "status": true
}

// let errorMsg={
//   "name":"NameerrorShowMsg",
//   "email":"EmailerrorShowMsg",
//   "mobileNo":"MoberrorShowMsg",
//   "password":"PwderrorShowMsg"
// }

const AddUser = () => {

  //Alert variables and function
  const [nameText,setnameText]=useState("")
  const [alertSuccess,setalertSuccess]=useState(false)

  let alertFn=(changeVal)=>{
   setalertSuccess(changeVal)
   setnameText("")
  }

  //===================Select Element=====================

  const [roleValues, setroleValues] = useState([])

  useEffect(() => {
    const getUserRoles=async()=>{
      try {
        const response = await axios.get('/userRole/allroles'); 
        
        if(response.status===200){
          setroleValues(response.data)
        }                               
     } catch (err) {
       console.log("Error : "+err)
     }
    }
    getUserRoles();
  }, []);

//   const MenuRoleItems = roleValues.map((eachValue) =>
//   <MenuItem value={eachValue.role} key={eachValue._id}>{eachValue}</MenuItem>
// );

  //================================Input Variables=================================

  //=====================Text Inputs====================

  const [userInputValues, setuserInputValues] = useState(assignUserValues)
  const [confirmPassword,setconfirmPassword]=useState("")
  const [active,setactive]=useState(true)
  
 
   //State to verify success on submit
   const [isSubmit,setisSubmit]=useState(false);

   //State declaration for all the error messages
  var [errorMessages,seterrorMessages]= useState({});

  //================================Capture Data=====================================

  //=====================Text Inputs====================


  const userInputValueEntered=(event)=>{
    let { name, value } = event.target; //destructuring
    setuserInputValues({ ...userInputValues, [name]: value });   
   
    // if(errorMessages.status && errorMessages[name]){
    //   let tempMsgname=errorMsg[name] 
    //     seterrorMessages({ ...errorMessages, [tempMsgname] : ""}); 
    //     seterrorMessages({...errorMessages, [name] : false})  
    // }
  };

// console.log(errorMessages)

  const confirmpwdEntered=(event)=>{
    setconfirmPassword(event.target.value);
    // let temp="ConfirmPwderrorShowMsg"
    // let temp1="Confirmpassword"
    // seterrorMessages({ ...errorMessages, [temp] : "" , [temp1] : false});
  };

  const handleStatusChange = (event) => {
    setactive(event.target.checked);
    let temp="status"
    setuserInputValues({ ...userInputValues, [temp]: event.target.checked });
    
  };
    //Manage from getting refreshed
    const handleSubmit=(event)=>{
      event.preventDefault();   
      setisSubmit(true);
      let ChkValidation=userValidation(userInputValues,confirmPassword)
      seterrorMessages(ChkValidation)
      if(ChkValidation.status){
        setisSubmit(false);
      }else{
        setnameText("User "+userInputValues.name.charAt(0).toUpperCase())
      }
    };

  //=================Insert new User==================
  useEffect(() => {
    if(isSubmit){
      const newUser=async()=>{
        try {
          const response = await axios.post('/user/register',userInputValues); 
          
          if(response.status===200){

            let checkUserExist=typeof(response.data);
                   if(checkUserExist==="string"){
                      alert(response.data)
                      setisSubmit(false);
                   }else{
                    clear()
                    setalertSuccess(true)
                    setisSubmit(false);
                   }            
          }                               
       } catch (err) {
         console.log("Error : "+err)
       }
      }
      newUser();
    }    
  }, [isSubmit,userInputValues]);

  //============Clear All============
const clear=()=>{
  setuserInputValues(assignUserValues)
  setconfirmPassword("")
}
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      {alertSuccess && (
        <SuccessfulAlert text={nameText} clicked={alertFn} type={1}/>
      )}
      <Box sx={{mx:"10px"}}>
        <Box sx={{height: "15%",
                p:"15px",alignItems:"center"}}>
                  <Typography component={"h3"} variant="p">New User</Typography>
                  <Box sx={{m:"50px"}} component={'form'} onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                         <Grid item xs={12} lg={8}>
                         <TextField
                          autoFocus
                          label="Name"
                          name='name'
                          variant="outlined"
                          size='small' 
                          fullWidth 
                          autoComplete='off'
                          value={userInputValues.name}
                          onChange={userInputValueEntered}
                          error={errorMessages.name}
                          helperText={errorMessages.NameerrorShowMsg}
                          />
                         </Grid>
                         {/* Space Start */}
                          <Grid item xs={4}></Grid>
                          {/*Space End*/}
                         <Grid item xs={12} lg={4}>
                         <TextField
                          label="Email"
                          name='email'
                          size='small' 
                          autoComplete='off'
                          fullWidth
                          value={userInputValues.email}
                          onChange={userInputValueEntered}
                          error={errorMessages.email}
                          helperText={errorMessages.EmailerrorShowMsg}
                          />
                         </Grid>
                         <Grid item xs={12} lg={4}>
                         <TextField
                          label="Mobile"
                          name="mobileNo"
                          size='small' 
                          type="tel"
                          fullWidth  
                          autoComplete='off'
                          value={userInputValues.mobileNo}  
                          onChange={userInputValueEntered}
                          error={errorMessages.mobileNo}
                          helperText={errorMessages.MoberrorShowMsg}
                          />
                         </Grid>
                         {/* Space Start */}
                         <Grid item xs={4}></Grid>
                          {/*Space End*/}
                          <Grid item xs={12} lg={4}>
                         <TextField
                          label="Password"
                          name="password"
                          size='small' 
                          type="password"
                          fullWidth 
                          autoComplete='off'
                          value={userInputValues.password}
                          onChange={userInputValueEntered}
                          error={errorMessages.password}
                          helperText={errorMessages.PwderrorShowMsg}
                          />
                         </Grid>
                         <Grid item xs={12} lg={4}>
                         <TextField
                          label="Confirm Password"
                          size='small'
                          type="password"
                          fullWidth 
                          autoComplete='off'
                          value={confirmPassword}
                          onChange={confirmpwdEntered}
                          error={errorMessages.Confirmpassword}
                          helperText={errorMessages.ConfirmPwderrorShowMsg}
                          />
                         </Grid>
                         {/* Space Start */}
                         <Grid item xs={4}></Grid>
                          {/*Space End*/}
                         <Grid item xs={12} lg={4}>
                            <FormControl sx={{width:"76%"}}>Roles
                                <Select 
                                    name="role"
                                    size='small'
                                    sx={{p:1.5}}
                                    defaultValue="" 
                                    value={userInputValues.role}
                                    onChange={userInputValueEntered}
                                >
                                      {
                                        roleValues.map(eachValue =>
                                           <MenuItem value={eachValue.role} key={eachValue._id}>{eachValue.role}</MenuItem>)
                                      }
                                </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} lg={4} my={4}>
                          <FormControlLabel 
                                control={<Switch checked={active} 
                                                onChange={handleStatusChange}
                                                inputProps={{ 'aria-label': 'controlled' }}/>} 
                                label="Status" />
                          </Grid>
                          {/* Space Start */}
                         <Grid item xs={4}></Grid>
                          {/*Space End*/}
                          {/* Space Start */}
                         <Grid item xs={12}></Grid>
                          {/*Space End*/}
                          <Grid item xs={12} lg={2}>
                          <Button type='submit' color='primary' variant="contained"  fullWidth
                            m='12px'>Add</Button>
                          </Grid>
                          <Grid item xs={12} lg={2}>
                              <Button color='primary' variant="contained" fullWidth onClick={clear}
                                m='12px'>Cancel</Button>
                          </Grid>
                      </Grid>
                      
                  
                  </Box>
        </Box>
     
      </Box>
      
    </Paper>
    
  )
}

export default AddUser