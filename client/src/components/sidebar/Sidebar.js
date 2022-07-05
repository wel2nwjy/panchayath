import React,{useState} from 'react';
import { ListItemButton, ListItemIcon,ListItemText,Box} from "@mui/material";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddCardIcon from '@mui/icons-material/AddCard';
import ViewListIcon from '@mui/icons-material/ViewList';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import DialogPwd from '../changepwd/DialogPwd'

const Sidebar = (props) => {
 let currentUser=sessionStorage.getItem("Currentuser")

 currentUser=JSON.parse(currentUser)

 //===========Profile Setting Variables and Functions==================
 const [profileClicked, setprofileClicked] = useState(false);

 let profileBtnClicked=()=>{
  let changest=!profileClicked
  setprofileClicked(changest)
 }

 let close=()=>{
  setprofileClicked()
 }

return (
    <Box sx={{pl:"5px"}}>
       <ListItemText primary="DIGITAL SURVEY" sx={{fontSize:"13px",mx:"30px"}} />           
      
          <ListItemButton disabled={!currentUser.dataEntry} onClick={(e) => props.menuItem(1)}>
            <ListItemIcon>              
              <AddCardIcon/>
            </ListItemIcon>
            <ListItemText primary="New Entry" />
          </ListItemButton>

          <ListItemButton onClick={(e) => props.menuItem(2)}>
            <ListItemIcon>
              <ViewListIcon/>
            </ListItemIcon>
            <ListItemText primary="List" />
          </ListItemButton>
          
          <ListItemButton onClick={(e) => props.menuItem(3)}>
            <ListItemIcon>
              <PersonAddIcon/>
            </ListItemIcon>
            <ListItemText primary="New User" />
          </ListItemButton>

          <ListItemButton onClick={profileBtnClicked}>
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary="Change Password" />
          </ListItemButton>
          {profileClicked && <DialogPwd close={close}/>}
    </Box>
  )
}

export default Sidebar


