import React, { useState } from 'react';
import {  Box,Dialog,DialogActions,DialogContent,Typography,Divider,IconButton  } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import ChangePwd from './ChangePwd'

const DialogPwd = (props) => {

    let currentUser=sessionStorage.getItem("Currentuser")
    currentUser=JSON.parse(currentUser)
    let UserName=currentUser.name
    // props.profileClose(true)

const [open, setOpen] = useState(true);

    const handleClose = () => {
      let tempBol=false
        setOpen(tempBol);
        props.close("")
    }; 
  return (
    <Box>
        <Dialog
            open={open}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogActions>
            <IconButton sx={{textAlign:"end"}}  onClick={handleClose}><CloseIcon fontSize="small"/></IconButton>
            </DialogActions>
            <DialogContent>
            
                 <Typography component={'h2'} mx={1} mt={-1} textAlign='center'
                            sx={{letterSpacing: "2px",fontWeight:"600"}}>
                {UserName}</Typography>
                <Divider sx={{fontSize:'10px'}}>Would You Like to Change your password</Divider>
                    <ChangePwd close={handleClose}/>
            </DialogContent>            
     </Dialog>
    </Box>
  )
}

export default DialogPwd