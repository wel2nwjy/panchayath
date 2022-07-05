import React from 'react';
import { Paper} from "@mui/material";
import AddPrevNext from "../../components/addprevnext/AddPrevNext";

//---------Customize Styling---------------
const paperStyle = {
    height: "auto",
    borderRadius: "15px",
  };

//-----------------------------------------

const AddNewData = () => {
  return (
    <>
    <Paper style={paperStyle}>
       <AddPrevNext/><br/>
    </Paper>  
    </>
  )
}

export default AddNewData