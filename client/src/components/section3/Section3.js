import React,{useState,useEffect} from 'react';
import { Box,TextField,Grid,Select,InputLabel,MenuItem,FormControl,FormHelperText,FormLabel,FormControlLabel,
    Radio,RadioGroup,  Divider,Button, Typography} from "@mui/material";

    import dataModel from '../DataObj';
    import sendDataSection3 from "./Section3Data";

    import auth from "../../auth/auth"
  
    let sendData={}
  
    let dataObjectDB3=dataModel();

const Section3 = (props) => {

  dataObjectDB3=props.newEntryValues;

   //================================Input Variables=====================================

  //=====================Text Inputs====================
  const [formTxtValues, setformTxtValuess] = useState({ 
  "തെങ്ങ്":dataObjectDB3.തെങ്ങ്,
  "കൗങ്ങ്":dataObjectDB3.കൗങ്ങ്,
  "വാഴ":dataObjectDB3.വാഴ,
  "ജാതി_വിള":dataObjectDB3.ജാതി_വിള,
  "റബ്ബർ":dataObjectDB3.റബ്ബർ,
  "പച്ചക്കറി_മറ്റുള്ളവ":dataObjectDB3.പച്ചക്കറി_മറ്റുള്ളവ,
  "പച്ചക്കറി_തോട്ടം":dataObjectDB3.പച്ചക്കറി_തോട്ടം,
  "പച്ചക്കറി_സെൻറ്":dataObjectDB3.പച്ചക്കറി_സെൻറ്,
  "കിഴങ്ങ്":dataObjectDB3.കിഴങ്ങ്,
  "പമ്പ്_സെറ്റ്_hp":dataObjectDB3.പമ്പ്_സെറ്റ്_hp,
  "പശു":dataObjectDB3.പശു,
  "മറ്റുള്ളവ_മൃഗ":dataObjectDB3.മറ്റുള്ളവ_മൃഗ,
  "താറാവ്":dataObjectDB3.താറാവ്,
  "കോഴി":dataObjectDB3.കോഴി,
  "ആട്":dataObjectDB3.ആട്,
  "എരുമ":dataObjectDB3.എരുമ,  
  "ഓമന_മൃഗ_ഏത്":dataObjectDB3.ഓമന_മൃഗ_ഏത്,
  "സഭകളിൽ_പങ്കെടുക്കാറില്ലെങ്കിൽ":dataObjectDB3.സഭകളിൽ_പങ്കെടുക്കാറില്ലെങ്കിൽ
  });
  //=====================Select Inputs==================
  const [formStValues, setformStValues] = useState({ 
    "കൃഷി_രീതികൾ":dataObjectDB3.കൃഷി_രീതികൾ,
    "നൂതന_കൃഷി_രീതികൾ":dataObjectDB3.നൂതന_കൃഷി_രീതികൾ,
  "ജലസേചന_മാർഗം":dataObjectDB3.ജലസേചന_മാർഗം,
  "കൃഷി_സംഘമായി_താത്പര്യം":dataObjectDB3.കൃഷി_സംഘമായി_താത്പര്യം,
  "മത്സ്യ_കൃഷി":dataObjectDB3.മത്സ്യ_കൃഷി,
  "സാമൂഹിക_പങ്കാളിത്തം":dataObjectDB3.സാമൂഹിക_പങ്കാളിത്തം,
  "സഹായ_സംരംഭം":dataObjectDB3.സഹായ_സംരംഭം,
  "പെൻഷൻ":dataObjectDB3.പെൻഷൻ, 
  "ഇൻഷുറൻസ്":dataObjectDB3.ഇൻഷുറൻസ് });  
  //=====================Radio Inputs===================
  const [formRdValues, setformRdValues] = useState({ 
    "നൂതന_കൃഷി_താത്പര്യം":dataObjectDB3.നൂതന_കൃഷി_താത്പര്യം,
    "ജലസേചന_സൗകര്യം":dataObjectDB3.ജലസേചന_സൗകര്യം,
    "പമ്പ്_സെറ്റ്":dataObjectDB3.പമ്പ്_സെറ്റ്,
    "കൃഷി_സംഘമായി_താത്പര്യം":dataObjectDB3.കൃഷി_സംഘമായി_താത്പര്യം,
    "ഓമന_മൃഗ":dataObjectDB3.ഓമന_മൃഗ,
    "മത്സ്യ_കൃഷി_ഉണ്ടോ":dataObjectDB3.മത്സ്യ_കൃഷി_ഉണ്ടോ,
    "മൃഗ_പരിപാല_താത്പര്യമ":dataObjectDB3.മൃഗ_പരിപാല_താത്പര്യമ,
    "സ്വയം_സാമൂഹിക_പങ്കാളിത്_താത്പര്യമ":dataObjectDB3.സ്വയം_സാമൂഹിക_പങ്കാളിത്_താത്പര്യമ,
    "ടൂറിസം_ഹോംസ്റ്റേ_താത്പര്യം":dataObjectDB3.ടൂറിസം_ഹോംസ്റ്റേ_താത്പര്യം,
    "സഭകളിൽ_പങ്കെടുക്കാറുണ്ടോ":dataObjectDB3.സഭകളിൽ_പങ്കെടുക്കാറുണ്ടോ });

  //====================================================================================


    //================================Capture Data=====================================

  //=====================Text Inputs====================
  const txtValueEntered=(event)=>{
    let { name, value } = event.target; //destructuring
    setformTxtValuess({ ...formTxtValues, [name]: value });
  };

  //=====================Select Inputs==================
  const stValueEntered=(event)=>{
    let { name, value } = event.target; //destructuring
    setformStValues({ ...formStValues, [name]: value });
  };
  
  //=====================Radio Inputs===================
  const rdValueEntered=(event)=>{
    let { name, value } = event.target; //destructuring
    setformRdValues({ ...formRdValues, [name]: value });
    storeValues();
  };

  //====================================================================================

  //State to verify success on submit
  const [isSubmit,setisSubmit]=useState(false);

   //====================================================================================

   const storeValues=()=>{
    
    dataObjectDB3=sendDataSection3(dataObjectDB3,formTxtValues,formStValues,formRdValues);
   
    return dataObjectDB3 
    
  }

  useEffect(() => {

    let captureData3= storeValues()
     props.getValues3(captureData3)
   },[formTxtValues,formStValues,formRdValues]);

  //Manage from getting refreshed
  const handleSubmit=(event)=>{
    event.preventDefault();   
    setisSubmit(true);
   sendData=storeValues();
  };

  //Insert Data
  //Submit
useEffect(()=>{
  if(isSubmit){
    const AddNewEntry = async()=>{

      try {
        console.log(sendData)
        const response=await auth.post("/people", sendData);
           
        if(response.data){           
          console.log("success");
        }

          }catch (err) {              
            console.log(err);
          }        
     };
     AddNewEntry();
  }
  setisSubmit(false);
},[isSubmit]);

  return (
    <Box sx={{m:"20px"}} component={'form'} onSubmit={handleSubmit}>
        <Divider sx={{color:"black"}}>SECTION 8</Divider><br/>
            {/* Section 8 Starts */}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <Typography>വിളകൾ</Typography>
                </Grid>
                {/* Space Start */}
                <Grid item xs={12} my="5px"></Grid>
                {/*Space End*/}
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl sx={{width:"76%"}}>
                      <InputLabel id="select-helper-label10">Farming Methods</InputLabel>
                      <Select
                        labelId="select-helper-label10"                 
                        name="കൃഷി_രീതികൾ"
                        size='small'
                        sx={{p:.5}} 
                        value={formStValues.കൃഷി_രീതികൾ}
                        onChange={stValueEntered}
                        autoFocus
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="ടെറസ്സ്">ടെറസ്സ് </MenuItem>
                        <MenuItem value="പറമ്പ്">പറമ്പ് </MenuItem>
                        <MenuItem value="ഗ്രോ ബാഗ്">ഗ്രോ ബാഗ്</MenuItem>
                        <MenuItem value="മറ്റുള്ളവ">മറ്റുള്ളവ</MenuItem>
                    </Select>
                      <FormHelperText>കൃഷി രീതികൾ</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <TextField
                label="Coconut trees"
                name="തെങ്ങ്"
                helperText="തെങ്ങ് (എണ്ണം)" 
                size='small'
                value={formTxtValues.തെങ്ങ്} 
                onChange={txtValueEntered} />
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <TextField
                label="Palm trees"
                name="കൗങ്ങ്"
                helperText="കൗങ്ങ് (എണ്ണം)" 
                size='small'
                value={formTxtValues.കൗങ്ങ്} 
                onChange={txtValueEntered} />
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <TextField
                label="Banana tree"
                name="വാഴ"
                helperText="വാഴ (എണ്ണം)" 
                size='small'
                value={formTxtValues.വാഴ} 
                onChange={txtValueEntered}/>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <TextField
                label="Nutmeg"
                name="ജാതി_വിള"
                helperText="ജാതി (എണ്ണം)" 
                size='small'
                value={formTxtValues.ജാതി_വിള} 
                onChange={txtValueEntered}/>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <TextField
                label="Rubber"
                name="റബ്ബർ"
                helperText="റബ്ബർ (എണ്ണം)" 
                size='small'
                value={formTxtValues.റബ്ബർ} 
                onChange={txtValueEntered}/>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <TextField
                label="Others"
                name="പച്ചക്കറി_മറ്റുള്ളവ"
                helperText="പച്ചക്കറി മറ്റുള്ളവ (എണ്ണം)" 
                size='small'
                value={formTxtValues.പച്ചക്കറി_മറ്റുള്ളവ} 
                onChange={txtValueEntered}/>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <TextField
                label="Vegetable Garden"
                name="പച്ചക്കറി_തോട്ടം"
                helperText="പച്ചക്കറി തോട്ടം" 
                size='small'
                value={formTxtValues.പച്ചക്കറി_തോട്ടം} 
                onChange={txtValueEntered}/>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <TextField
                label="Farmland in cent"
                name="പച്ചക്കറി_സെൻറ്"
                helperText="പച്ചക്കറി (സെൻറ്)" 
                size='small'
                value={formTxtValues.പച്ചക്കറി_സെൻറ്} 
                onChange={txtValueEntered}/>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <TextField
                label="Root Vegtables in cent"
                name="കിഴങ്ങ്"
                helperText="കിഴങ്ങ് വർഗ്ഗങ്ങൾ (സെൻറ്)" 
                size='small'
                value={formTxtValues.കിഴങ്ങ്} 
                onChange={txtValueEntered}/>
                </Grid>

                {/* Space Start */}
                <Grid item xs={12} sm={6} md={5} lg={4}></Grid>
                {/*Space End*/}

                <Grid item xs={12} sm={6} md={5} lg={4}>
                    <FormControl sx={{ml:"3px"}}>
                    <FormLabel id="demo-row-radio-buttons-group-label">Advanced Farming Method(Interested)</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="നൂതന_കൃഷി_താത്പര്യം"
                    sx={{
                        '& .MuiSvgIcon-root': {
                        fontSize: 10,
                        },
                    }}
                    value={formRdValues.നൂതന_കൃഷി_താത്പര്യം}
                     onChange={rdValueEntered}
                    >                  
                    <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                        fontSize: 13,
                        },
                    }} value="ഉണ്ട്" control={<Radio />} label="ഉണ്ട്" />
                    <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                        fontSize: 13,
                        },
                    }} value="ഇല്ല" control={<Radio />} label="ഇല്ല" />
                    </RadioGroup>
                    <FormHelperText>നൂതന കൃഷി രീതികൾ ചെയ്യാൻ താത്പര്യം ഉണ്ടോ?</FormHelperText>
                    </FormControl>
                </Grid> 
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl sx={{width:"76%",pt:1}}>
                    <InputLabel id="select-helper-label">Advanced Farming Methods</InputLabel>
                    <Select
                        labelId="select-helper-label1"                 
                        name="നൂതന_കൃഷി_രീതികൾ"
                        size='small'
                        sx={{p:.5}}
                        value={formStValues.നൂതന_കൃഷി_രീതികൾ}
                        onChange={stValueEntered}
                    >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="കൃത്യതാ കൃഷി">കൃത്യതാ കൃഷി </MenuItem>
                        <MenuItem value="തിരി നന">തിരി നന </MenuItem>
                        <MenuItem value="പോളിഹൗസ്">പോളിഹൗസ് </MenuItem>
                        <MenuItem value="ഹൈഡ്രോ പോണിക്സ്">ഹൈഡ്രോ പോണിക്സ് </MenuItem>
                        <MenuItem value="അക്വാപോണിക്സ്">അക്വാപോണിക്സ്</MenuItem>
                        <MenuItem value="ഇല്ല">ഇല്ല</MenuItem>
                    </Select>
                    <FormHelperText>നൂതന കൃഷി രീതികൾ</FormHelperText>
                </FormControl>           
                </Grid>                       
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl sx={{ml:"3px"}}>
                    <FormLabel id="demo-row-radio-buttons-group-label">Irrigation Facility</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="ജലസേചന_സൗകര്യം"
                    sx={{
                        '& .MuiSvgIcon-root': {
                        fontSize: 10,
                        },
                    }}
                    value={formRdValues.ജലസേചന_സൗകര്യം}
                  onChange={rdValueEntered}
                    >                  
                    <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                        fontSize: 13,
                        },
                    }} value="ഉണ്ട്" control={<Radio />} label="ഉണ്ട്" />
                    <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                        fontSize: 13,
                        },
                    }} value="ഇല്ല" control={<Radio />} label="ഇല്ല" />
                    </RadioGroup>
                    <FormHelperText>ജലസേചന സൗകര്യം</FormHelperText>
                    </FormControl>
                </Grid>            
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl sx={{width:"76%"}}>
                    <InputLabel id="select-helper-label1">Irrigation(Source)</InputLabel>
                    <Select
                        labelId="select-helper-label1"                 
                        name="ജലസേചന_മാർഗം"
                        size='small'
                        sx={{p:.5}}
                        value={formStValues.ജലസേചന_മാർഗം}
                        onChange={stValueEntered}
                    >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="കിണർ">കിണർ</MenuItem>
                            <MenuItem value="കുളം">കുളം </MenuItem>
                            <MenuItem value="തോട്">തോട് </MenuItem>
                            <MenuItem value="കനാൽ">കനാൽ</MenuItem>
                            <MenuItem value="പുഴ">പുഴ</MenuItem>
                            <MenuItem value="ലിഫ്റ്റ്">ലിഫ്റ്റ്</MenuItem>
                            <MenuItem value="ഇറിഗേഷൻ">ഇറിഗേഷൻ</MenuItem>
                    </Select>                  
                    <FormHelperText>ജലസേചന മാർഗം</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Pump Set</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="പമ്പ്_സെറ്റ്"
                    sx={{
                        '& .MuiSvgIcon-root': {
                        fontSize: 10,
                        },
                    }}
                    value={formRdValues.പമ്പ്_സെറ്റ്}
                  onChange={rdValueEntered}
                    >                    
                    <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                        fontSize: 13,
                        },
                    }} value="ഉണ്ട്" control={<Radio />} label="ഉണ്ട്" />
                    <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                        fontSize: 13,
                        },
                    }} value="ഇല്ല" control={<Radio />} label="ഇല്ല" />
                    </RadioGroup>
                <FormHelperText>പമ്പ് സെറ്റ്</FormHelperText>
                </FormControl>
                </Grid>

                <TextField
                label="Pump Set HP Type"
                name="പമ്പ്_സെറ്റ്_hp"
                helperText="Pump Set HP" 
                size='small'
                value={formTxtValues.പമ്പ്_സെറ്റ്_hp} 
                onChange={txtValueEntered} />

                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Volunteering for Vegetable Farming(interested)</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="കൃഷി_സംഘമായി_താത്പര്യം"
                    sx={{
                        '& .MuiSvgIcon-root': {
                        fontSize: 10,
                        },
                    }}
                    value={formRdValues.കൃഷി_സംഘമായി_താത്പര്യം}
                  onChange={rdValueEntered}
                    >                  
                    <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                        fontSize: 13,
                        },
                    }} value="ഉണ്ട്" control={<Radio />} label="ഉണ്ട്" />
                    <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                        fontSize: 13,
                        },
                    }} value="ഇല്ല" control={<Radio />} label="ഇല്ല" />
                    </RadioGroup>
                <FormHelperText>പച്ചക്കറി കൃഷി സംഘമായി ചെയ്യാൻ താത്പര്യം ഉണ്ടോ ?</FormHelperText>
                </FormControl>
                </Grid>
            </Grid><br/>
            {/* Section 8 Ends */}

            <Divider sx={{color:"black",m:2}}>SECTION 9</Divider>

            {/* Section 9 Starts */}
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>വളർത്തു മൃഗങ്ങൾ</Typography>
            </Grid>

            {/* Space Start */}
            <Grid item xs={12}></Grid>
            {/*Space End*/}

            <Grid item xs={12} sm={6} md={5} lg={4}>            
            <TextField
            label="Cows"
            name="പശു"
            helperText="പശു" 
            size='small'
            value={formTxtValues.പശു} 
                onChange={txtValueEntered}/>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Buffaloes"
            name="എരുമ"
            helperText="എരുമ" 
            size='small'
            value={formTxtValues.എരുമ} 
            onChange={txtValueEntered}/>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Goats"
            name="ആട്"
            helperText="ആട്" 
            size='small'
            value={formTxtValues.ആട്} 
            onChange={txtValueEntered}/>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Hens"
            name="കോഴി"
            helperText="കോഴി" 
            size='small'
            value={formTxtValues.കോഴി} 
            onChange={txtValueEntered}/>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Ducks"
            name="താറാവ്"
            helperText="താറാവ്" 
            size='small'
            value={formTxtValues.താറാവ്} 
            onChange={txtValueEntered}/>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Others"
            name="മറ്റുള്ളവ_മൃഗ"
            helperText="മറ്റുള്ളവ മൃഗ" 
            size='small'
            value={formTxtValues.മറ്റുള്ളവ_മൃഗ} 
            onChange={txtValueEntered}/>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Pets</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="ഓമന_മൃഗ"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.ഓമന_മൃഗ}
                  onChange={rdValueEntered}
                >                  
                  <FormControlLabel sx={{
                    '& .css-ahj2mt-MuiTypography-root': {
                      fontSize: 13,
                    },
                  }} value="ഉണ്ട്" control={<Radio />} label="ഉണ്ട്" />
                  <FormControlLabel sx={{
                    '& .css-ahj2mt-MuiTypography-root': {
                      fontSize: 13,
                    },
                  }} value="ഇല്ല" control={<Radio />} label="ഇല്ല" />
                </RadioGroup>
            <FormHelperText>ഓമന മൃഗങ്ങൾ</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Pets(Owned)"
            name="ഓമന_മൃഗ_ഏത്"
            helperText="ഓമന മൃഗങ്ങൾ ഏത്" 
            size='small'
            value={formTxtValues.ഓമന_മൃഗ_ഏത്} 
            onChange={txtValueEntered}/>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>         
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Fisheries</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="മത്സ്യ_കൃഷി_ഉണ്ടോ"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.മത്സ്യ_കൃഷി_ഉണ്ടോ}
                  onChange={rdValueEntered}
                >                  
                  <FormControlLabel sx={{
                    '& .css-ahj2mt-MuiTypography-root': {
                      fontSize: 13,
                    },
                  }} value="ഉണ്ട്" control={<Radio />} label="ഉണ്ട്" />
                  <FormControlLabel sx={{
                    '& .css-ahj2mt-MuiTypography-root': {
                      fontSize: 13,
                    },
                  }} value="ഇല്ല" control={<Radio />} label="ഇല്ല" />
                </RadioGroup>
            <FormHelperText>മത്സ്യ കൃഷി ചെയ്യുന്നുണ്ടോ ?</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label1">Pisciculture</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="മത്സ്യ_കൃഷി"
                    size='small'
                    sx={{p:.5}} 
                    value={formStValues.മത്സ്യ_കൃഷി}
                    onChange={stValueEntered}
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value="കുളം">കുളം </MenuItem>
                    <MenuItem value="ടാങ്ക്">ടാങ്ക് </MenuItem>
                    <MenuItem value="കൂട്">കൂട് </MenuItem>
                    <MenuItem value="മറ്റുള്ളവ">മറ്റുള്ളവ</MenuItem>
                </Select>
                  <FormHelperText>മത്സ്യ കൃഷി ചെയ്യുന്ന രീതി</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>            
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Animal Grooming</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="മൃഗ_പരിപാല_താത്പര്യമ"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.മൃഗ_പരിപാല_താത്പര്യമ}
                  onChange={rdValueEntered}
                >                  
                  <FormControlLabel sx={{
                    '& .css-ahj2mt-MuiTypography-root': {
                      fontSize: 13,
                    },
                  }} value="ഉണ്ട്" control={<Radio />} label="ഉണ്ട്" />
                  <FormControlLabel sx={{
                    '& .css-ahj2mt-MuiTypography-root': {
                      fontSize: 13,
                    },
                  }} value="ഇല്ല" control={<Radio />} label="ഇല്ല" />
                </RadioGroup>
            <FormHelperText>മൃഗ പരിപാലനത്തിന് താത്പര്യമുണ്ടോ ?</FormHelperText>
            </FormControl>
            </Grid>
       
            </Grid><br/><br/>
            {/* Section 9 Ends */}

            <Divider sx={{color:"black"}}>SECTION 10</Divider><br/>

            {/* Section 10 Starts */}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>സാമൂഹിക പങ്കാളിത്തം</Typography>
                </Grid>

                {/* Space Start */}
                <Grid item xs={12}></Grid>
                {/*Space End*/}          

                <Grid item xs={12} sm={6} md={5} lg={4}>            
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Social Services(Interested)</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="സ്വയം_സാമൂഹിക_പങ്കാളിത്_താത്പര്യമ"
                      sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: 10,
                        },
                      }}
                      value={formRdValues.സ്വയം_സാമൂഹിക_പങ്കാളിത്_താത്പര്യമ}
                  onChange={rdValueEntered}
                    >                  
                      <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                          fontSize: 13,
                        },
                      }} value="ഉണ്ട്" control={<Radio />} label="ഉണ്ട്" />
                      <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                          fontSize: 13,
                        },
                      }} value="ഇല്ല" control={<Radio />} label="ഇല്ല" />
                    </RadioGroup>
                <FormHelperText>സ്വയം സഹായ സംഘങ്ങൾ ആരംഭിക്കുന്നതിന് താത്പര്യമുണ്ടോ ?</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl sx={{width:"76%"}}>
                      <InputLabel id="select-helper-label1">Social Services</InputLabel>
                      <Select
                        labelId="select-helper-label1"                 
                        name="സാമൂഹിക_പങ്കാളിത്തം"
                        size='small'
                        sx={{p:.5}}
                        value={formStValues.സാമൂഹിക_പങ്കാളിത്തം}
                        onChange={stValueEntered}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="കുടുംബശ്രീ അയൽക്കൂട്ടം">കുടുംബശ്രീ അയൽക്കൂട്ടം </MenuItem>
                        <MenuItem value="തൊഴിലുറപ്പ്">തൊഴിലുറപ്പ് </MenuItem>
                        <MenuItem value="സ്വാശ്രയ സംഘം">സ്വാശ്രയ സംഘം</MenuItem>
                        <MenuItem value="പാട ശേഖര സമിതി">പാട ശേഖര സമിതി</MenuItem>
                        <MenuItem value="കർഷക ക്ലബ്ബ്കൾ">കർഷക ക്ലബ്ബ്കൾ</MenuItem>
                        <MenuItem value="പാൽ സൊസൈറ്റി">പാൽ സൊസൈറ്റി</MenuItem>
                        <MenuItem value="വനിതാ സമാജം">വനിതാ സമാജം</MenuItem>
                        <MenuItem value="സാംസ്ക്കാരിക ക്ലബ്ബ്കൾ">സാംസ്ക്കാരിക ക്ലബ്ബ്കൾ</MenuItem>
                        <MenuItem value="കുട്ടികളുടെ സംഘടനകൾ">കുട്ടികളുടെ സംഘടനകൾ</MenuItem>
                        <MenuItem value="യുവജന സംഘടനകൾ">യുവജന സംഘടനകൾ</MenuItem>
                        <MenuItem value="ആരാധനാലയങ്ങളിലെ കമ്മിറ്റികൾ">ആരാധനാലയങ്ങളിലെ കമ്മിറ്റികൾ</MenuItem>
                        <MenuItem value="മറ്റുള്ളവ">മറ്റുള്ളവ</MenuItem>
                        <MenuItem value="ഇല്ല">ഇല്ല</MenuItem>
                    </Select>
                      <FormHelperText>സാമൂഹിക പങ്കാളിത്തം</FormHelperText>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl sx={{width:"76%"}}>
                      <InputLabel id="select-helper-label1">Social Service Name</InputLabel>
                      <Select
                        labelId="select-helper-label1"                 
                        name="സഹായ_സംരംഭം"
                        size='small'
                        sx={{p:.5}} 
                        value={formStValues.സഹായ_സംരംഭം}
                        onChange={stValueEntered}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="ഒറ്റക്ക്">ഒറ്റക്ക് </MenuItem>
                        <MenuItem value="ഗ്രൂപ്പ്">ഗ്രൂപ്പ് </MenuItem>
                        <MenuItem value="ജെ എൽ ജി">ജെ എൽ ജി</MenuItem>
                        <MenuItem value="കുടുംബശ്രീ">കുടുംബശ്രീ</MenuItem>
                    </Select>
                      <FormHelperText>ഏത് സംരംഭം</FormHelperText>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl sx={{width:"76%"}}>
                      <InputLabel id="select-helper-label1">Pension</InputLabel>
                      <Select
                        labelId="select-helper-label1"                 
                        name="പെൻഷൻ"
                        size='small'
                        sx={{p:.5}}
                        value={formStValues.പെൻഷൻ}
                        onChange={stValueEntered}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="ക്ഷേമ പെൻഷൻ">ക്ഷേമ പെൻഷൻ </MenuItem>
                        <MenuItem value="വാർദ്ധക്യ പെൻഷൻ">വാർദ്ധക്യ പെൻഷൻ </MenuItem>
                        <MenuItem value="ഡിസെബിലിറ്റി പെൻഷൻ">ഡിസെബിലിറ്റി പെൻഷൻ</MenuItem>
                        <MenuItem value="വിധവ പെൻഷൻ">വിധവ പെൻഷൻ</MenuItem>
                        <MenuItem value="കാർഷിക പെൻഷൻ">കാർഷിക പെൻഷൻ</MenuItem>
                        <MenuItem value="സർവീസ് പെൻഷൻ">സർവീസ് പെൻഷൻ</MenuItem>
                        <MenuItem value="മറ്റുള്ളവ">മറ്റുള്ളവ</MenuItem>
                        <MenuItem value="ഇല്ല">ഇല്ല</MenuItem>
                    </Select>
                      <FormHelperText>പെൻഷൻ</FormHelperText>
                  </FormControl>
                </Grid>

                
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl sx={{width:"76%"}}>
                      <InputLabel id="select-helper-label1">Insurance</InputLabel>
                      <Select
                        labelId="select-helper-label1"                 
                        name="ഇൻഷുറൻസ്"
                        size='small'
                        sx={{p:.5}}
                        value={formStValues.ഇൻഷുറൻസ്}
                        onChange={stValueEntered}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="ആരോഗ്യ ഇൻഷുറൻസ്">ആരോഗ്യ ഇൻഷുറൻസ് </MenuItem>
                        <MenuItem value="ലൈഫ് ഇൻഷുറൻസ്">ലൈഫ് ഇൻഷുറൻസ്</MenuItem>
                        <MenuItem value="മറ്റുള്ളവ">മറ്റുള്ളവ</MenuItem>
                        <MenuItem value="ഇല്ല">ഇല്ല</MenuItem>
                    </Select>
                      <FormHelperText>ഇൻഷുറൻസ്</FormHelperText>
                  </FormControl>
                </Grid>

                
                <Grid item xs={12} sm={6} md={5} lg={4}>            
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Tourism (Home Stay)</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="ടൂറിസം_ഹോംസ്റ്റേ_താത്പര്യം"
                      sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: 10,
                        },
                      }}
                      value={formRdValues.ടൂറിസം_ഹോംസ്റ്റേ_താത്പര്യം}
                      onChange={rdValueEntered}
                    >                  
                      <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                          fontSize: 13,
                        },
                      }} value="ഉണ്ട്" control={<Radio />} label="ഉണ്ട്" />
                      <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                          fontSize: 13,
                        },
                      }} value="ഇല്ല" control={<Radio />} label="ഇല്ല" />
                    </RadioGroup>
                <FormHelperText>ടൂറിസം (ഹോംസ്റ്റേ) ചെയ്യാൻ താത്പര്യം ഉണ്ടോ?</FormHelperText>
                </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6} md={5} lg={4}>            
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Grama sabha(Attends)</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="സഭകളിൽ_പങ്കെടുക്കാറുണ്ടോ"
                      sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: 10,
                        },
                      }}
                      value={formRdValues.സഭകളിൽ_പങ്കെടുക്കാറുണ്ടോ}
                      onChange={rdValueEntered}
                    >                  
                      <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                          fontSize: 13,
                        },
                      }} value="ഉണ്ട്" control={<Radio />} label="ഉണ്ട്" />
                      <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                          fontSize: 13,
                        },
                      }} value="ഇല്ല" control={<Radio />} label="ഇല്ല" />
                    </RadioGroup>
                <FormHelperText>ഗ്രാമ സഭകളിൽ പങ്കെടുക്കാറുണ്ടോ ?</FormHelperText>
                </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={12} md={8} lg={8} container direction="column">
                <TextField
                label="Hasn't Atteneded, Why?"
                name="സഭകളിൽ_പങ്കെടുക്കാറില്ലെങ്കിൽ"
                multiline
                fullWidth
                rows="2"
                helperText="ഗ്രാമ സഭകളിൽ പങ്കെടുക്കാറില്ലെങ്കിൽ എന്തുകൊണ്ട് ?" 
                size='small' 
                value={formTxtValues.സഭകളിൽ_പങ്കെടുക്കാറില്ലെങ്കിൽ} 
                onChange={txtValueEntered}         
                />
                </Grid>
                <br/><br/><br/>

            </Grid>
            {/* Section 10 Ends */}
        <Button type='submit' color='primary' variant="contained" 
                            m='12px'>Submit</Button><br/><br/>
            
    </Box>
  )
}

export default Section3