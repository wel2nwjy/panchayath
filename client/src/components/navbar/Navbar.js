import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline,Box,Toolbar,List,Typography,Divider,IconButton,Container} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

  import PersonIcon from '@mui/icons-material/Person';
  import MenuIcon from '@mui/icons-material/Menu';
  import DownloadIcon from '@mui/icons-material/Download';
  import ExitToAppIcon from '@mui/icons-material/ExitToApp';

  import HomeSearch from "../homesearch/HomeSearch";
  import Sidebar from '../sidebar/Sidebar';
  import DisplayTable from '../../pages/displaytable/DisplayTable';
 import AddNewData from '../../pages/addnewdata/AddNewData';
 import AddUser from "../../pages/addUser/AddUser"

 import auth from "../../auth/auth"
  //========================================Styling==================================================
  const drawerWidth = 220;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(6),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

  const mdTheme = createTheme();
//==============================================================================================================
//===================================DASHBOARD CONTENT==========================================================

 //${limitValue}/${skipValue} dataView={dataView}  href="http://localhost:5000/api/download"

const Navbar = () => {

  // State of the search box
   let navigate  = useNavigate();

  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };  

  const [searchVl,setsearchVl] = useState("")
  const [dataView,setdataView] = useState([])
  //  const [limitValue,setlimitValue] =useState(100)
  //  const [skipValue,setskipValue] =useState(0)
   const [MenuSelected,setMenuSelected] = useState(2)
  //  const [downloadbtnStatus,setdownloadbtnStatus] = useState(true)


  let searchEntry=(enteredData)=> {
    if(enteredData){
      setsearchVl(enteredData)

    }else{
      setsearchVl("")
    }
  }

  let logoutApp=()=>{
    navigate("/")  
  }

  useEffect(()=>{
    const ReadData = async()=>{
      try {
             let response;
            if (searchVl){
               response=await auth.get(`/people/${searchVl}/0/100`);
            }else{
               response=await auth.get(`/people/0/100`);
            }  
            if(response.status===200)         
                setdataView(response.data);
            else{
                alert("Something Went Wrong")
            }

          }catch (err) {  
           // console.log(err);
            if([401, 403].includes(err.response.status)){
              navigate("/")
            }            
          }        
     };
     ReadData(); 
  },[searchVl]);

//=========================================
  let menuclicked=(selectedMenu)=>{
    setMenuSelected(selectedMenu)  
  }
//========================================
// let downloadbtnClick=()=>{
//   setdownloadbtnStatus(true)
// }

// useEffect(()=>{
//   if(downloadbtnStatus){
//     const downloadData = async()=>{
//       try {
//              let response =await auth.get(`/download`);;
//              console.log(response)
//             if(response.status===200){        
//             const blob = new Blob( [response.data],
//               { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
//             const url = window.URL.createObjectURL(blob);
//             window.open(url) ;
//             }else{
//                 alert("Something Went Wrong")
//             }
  
//           }catch (err) {  
//            // console.log(err);
//             if([401, 403].includes(err.response.status)){
//               navigate("/")
//             }            
//           }        
//      };
//      downloadData(); 
//     }
// },[downloadbtnStatus]);


  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex'}}>
      
        <CssBaseline />
        
            <AppBar position="absolute" open={open}>
              <Toolbar
                sx={{
                  pr: '24px', // keep right padding when drawer closed
                  mr: '2px'
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer}
                  sx={{
                    marginRight: '30px',
                    ...(open && { display: 'none' }),
                  }}
                >
                  
                  <MenuIcon />
                </IconButton>
                
                <Typography
                  component="h4"
                  variant="p"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow:  1}}
                >                  
                  മണലൂർ ഗ്രാമ പഞ്ചായത്ത്
                </Typography>
              
               <IconButton size="small" color="inherit" href="http://localhost:5000/api/download">
                  <DownloadIcon/>
                    <Typography sx={{fontSize:"12px",pl:"2px"}}>Download</Typography>                 
                </IconButton>
                <HomeSearch getSearchValue={searchEntry}/>
                {/* here */}
                <IconButton size="small" color="inherit">
                  <PersonIcon/>
                    <Typography sx={{fontSize:"12px",pl:"2px"}}>Admin</Typography>                 
                </IconButton>
                <IconButton size="small" color="inherit" onClick={logoutApp}>
                  <ExitToAppIcon/>                
                </IconButton>
              </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
              <Toolbar
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  px: [1],
                }}
              >
                <IconButton onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
              </Toolbar>
              <Divider />
              <List component="nav">
                <Sidebar tableData={dataView} menuItem={menuclicked}/>
                <Divider sx={{ my: 1 }} />
              </List>
            </Drawer>
                <Box
                  component="main"
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                  }}
                >
                  <Toolbar />
                    <Container maxWidth="lg" sx={{ my: 2,px:4}}>
                    {/* <DisplayTable dataView={dataView}/> */}
                        { MenuSelected===1 ? <AddNewData/> : (MenuSelected===2) ? <DisplayTable dataView={dataView}/> : <AddUser/> }
                    </Container>                  
                </Box>
      </Box>
    </ThemeProvider>

  )
}

export default Navbar