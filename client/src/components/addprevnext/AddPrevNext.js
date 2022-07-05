import React,{useState} from 'react';
import { Box,Typography,Grid,IconButton} from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Section1 from "../section1/Section1";
import Section2 from "../section2/Section2";
import Section3 from "../section3/Section3";

import dataModel from '../DataObj';
import sendDataSections from "./AssignCompleteValues"

import "./style.css"

//-----------------------------------------./AssignCompleteValues
let totalClick=2
let handleClick=0

let allData=dataModel()

const AddPrevNext = () => {

    let [newEntryValues,setnewEntryValues]= useState(allData)
    let [sectionNumber , setsectionNumber]=useState(1)
    let [disablePrevBtn,setdisablePrevBtn]=useState(true);
    let [disableNextBtn,setdisableNextBtn]=useState(false);
    

    //Previous and Next Button related functions
  const handlePrevious = (event) =>{
    handleClick=handleClick - 1;
    if(handleClick===0){
        setdisablePrevBtn(true)
    }else{
        setdisableNextBtn(false)
    } 
    sectionPageShow()
  }

  const handleNext = (event) =>{ 
    handleClick=handleClick + 1;
    if(handleClick===totalClick){
        setdisableNextBtn(true)
    }else{
        setdisablePrevBtn(false)
    }   
    sectionPageShow()
  }

  const assignValuesfromsection=(dataRecieved)=>{
    if(sectionNumber===1){
        let temp=sendDataSections(1,newEntryValues,dataRecieved)
        setnewEntryValues(temp)  
    }else if(sectionNumber===2){
        setnewEntryValues(sendDataSections(2,newEntryValues,dataRecieved))
    }else{
        setnewEntryValues(sendDataSections(3,newEntryValues,dataRecieved))
    }
    
  }


  let [renderSection,setrenderSection]=useState(<Section1 newEntryValues={newEntryValues} getValues1={assignValuesfromsection}/>)

  const sectionPageShow=()=>{
    if (handleClick===0){
        setsectionNumber(1)
        setrenderSection(<Section1 newEntryValues={newEntryValues} getValues1={assignValuesfromsection}/>)
        
    }else if(handleClick===1){
        setsectionNumber(2)
        setrenderSection(<Section2 newEntryValues={newEntryValues} getValues2={assignValuesfromsection}/>)
        
    }else{
        setsectionNumber(3)
        setrenderSection(<Section3 newEntryValues={newEntryValues} getValues3={assignValuesfromsection}/>)
        
    }
  }

  return (
    <Box sx={{mx:"10px"}}>
        <Box className='chk' sx={{height: "15%",
                p:"15px",alignItems:"center"}}>
            <Grid container>
                {/* Title */}
                <Grid item xs={12} sm={7} md={8} lg={10}>
                    <Typography component={"h3"} variant="p">Fill The Form</Typography>
                </Grid>
                {/* Buttons */}
                <Grid item xs={12} sm={4} md={3} lg={2} >
                    <Box sx={{display:"flex",justifyContent:"flex-end"}}>
                        <IconButton aria-label="previous" disabled={disablePrevBtn} onClick={handlePrevious}>
                            <ArrowLeftIcon />
                        </IconButton>
                        <IconButton aria-label="next" disabled={disableNextBtn} onClick={handleNext}>
                            <ArrowRightIcon />
                        </IconButton> 
                    </Box>                
                </Grid> 
            </Grid>        
        </Box>
        {renderSection}
                    <Box sx={{display:"flex",justifyContent:"flex-end"}}>
                        <IconButton aria-label="previous" disabled={disablePrevBtn} onClick={handlePrevious}>
                            <ArrowLeftIcon />
                        </IconButton>
                        <IconButton aria-label="next" disabled={disableNextBtn} onClick={handleNext}>
                            <ArrowRightIcon />
                        </IconButton> 
                    </Box> 
        {/* <Section2/>  */}
        {/* <Section3/> */}
    </Box>    
  )
}

export default AddPrevNext;