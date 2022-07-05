import React,{ useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import {Avatar,Button,CssBaseline,TextField,Grid,
    Box, Typography , Container ,Paper,Link} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import validation from './Validation'
import auth from "../../auth/auth"

const Login = (props) => { 

// State of the submit button
let navigate  = useNavigate();
//State declaration for all the input variables
  var [inputValues,setinputValues]=useState({email:'',password:''});

//State declaration for all the error messages
  var [errorMessages,seterrorMessages]= useState({});

//State to verify success on submit
  const [isSubmit,setisSubmit]=useState(false);

  //Message for Login Failed
  var [loginFailed,setloginFailed]=useState("");


  //For storing the values entered
  const valueEntered=(event)=>{
    const { name, value } = event.target; //destructuring
    setinputValues({ ...inputValues, [name]: value });
    setisSubmit(false);

    if(!loginFailed){setloginFailed("")}
  };

//Manage from getting refreshed
   const handleSubmit=(event)=>{
    setisSubmit(true);
    event.preventDefault();
    let tempValidation=validation(inputValues);
    seterrorMessages(tempValidation);  
    if(tempValidation.status===true){
      setisSubmit(false)
    }  
  };

  const sendValues=(dataAttained)=>{
    props.userFn(dataAttained)
  }
 
  //Check the user credentials with the db
  useEffect(()=>{
    if(isSubmit){
        const UserValidation=async()=>{
          try {
                 const response = await auth.post('/login', inputValues); 
                 localStorage.setItem('accessToken', response.data.token)
                 if(response.status===200){
                  let checkLogin=typeof(response.data);
                   if(checkLogin==="string"){
                      setloginFailed(response.data)
                      setisSubmit(false);
                   }else{
                    console.log(response.data.token)
                       auth.setToken(response.data.token)
                      sendValues(response.data.user)
                      navigate("/Home")
                   }
                 }                               
              } catch (err) {
                console.log("Error : "+err)
                setisSubmit(false);
                setloginFailed("Something went Wrong")
              }
      }; 
      UserValidation(); 
    }    
  },[isSubmit]);

// dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  return (
    <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Paper elevation={10} sx={{px:5,pb:1}}>
        <Box
          sx={{
            my: 4,
            mx:2,
            p:1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',  
          }}
        ><br/>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              fullWidth
              label="Email"
              name="email"
              autoComplete='username'
              value={inputValues.email}
              onChange={valueEntered}
              error={errorMessages.email}
              helperText={errorMessages.EmailerrorShowMsg}
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type='password'
              autoComplete='password'
              value={inputValues.password}
              onChange={valueEntered}
              error={errorMessages.password}
              helperText={errorMessages.PwderrorShowMsg}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>             
              {/* <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account.... Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
            <Typography sx={{color:"red",textAlign:"center",fontSize:"12px",mt:4}}>{loginFailed}</Typography>
          </Box>



        </Box>
        </Paper>
       
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
  )
}

export default Login



// function Copyright(props) {
//     return (
//       <Typography variant="body2" color="text.secondary" align="center" {...props}>
//         {'Copyright © '}
//         <Link color="inherit" href="https://mui.com/">
//           Your Website
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }