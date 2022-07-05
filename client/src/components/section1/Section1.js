import React,{useState,useEffect} from 'react';
import { Box,TextField,Grid,Select,InputLabel,MenuItem,FormControl,FormHelperText,FormLabel,FormControlLabel,
  Radio,RadioGroup,  Divider, Typography} from "@mui/material";
  import dataModel from '../DataObj';
  import sendDataSection1 from "./Section1Data";

  let dataObjectDB1=dataModel();

const Section1 = (props) => {

  dataObjectDB1=props.newEntryValues;

  //================================Input Variables=====================================

  //=====================Text Inputs====================
  const [formTxtValues, setformTxtValuess] = useState({ "കോഡ്":dataObjectDB1.കോഡ്,
  "വാർഡിൻ്റെ_പേര്":dataObjectDB1.വാർഡിൻ്റെ_പേര്,
  "വാർഡ്_നമ്പർ":dataObjectDB1.വാർഡ്_നമ്പർ,
  "കുടുംബനാഥൻ്റെ_പേര്":dataObjectDB1.കുടുംബനാഥൻ്റെ_പേര്,
  "വയസ്സ്_ജനന_തീയ്യതി":dataObjectDB1.വയസ്സ്_ജനന_തീയ്യതി,
  "വില്ലേജ്":dataObjectDB1.വില്ലേജ്,
  "മേൽവിലാസം":dataObjectDB1.മേൽവിലാസം,
  "പിൻ_കോഡ്":dataObjectDB1.പിൻ_കോഡ്,
  "ഫോൺ_നമ്പർ":dataObjectDB1.ഫോൺ_നമ്പർ,
  "ഇമെയിൽ_ഐ_ഡി":dataObjectDB1.ഇമെയിൽ_ഐ_ഡി,
  "റേഷൻ_കാർഡ്_നമ്പർ":dataObjectDB1.റേഷൻ_കാർഡ്_നമ്പർ,
  "കോളനിയുടെ_പേര്":dataObjectDB1.കോളനിയുടെ_പേര്,
  "വീടിൻ്റെ_കാലപ്പഴക്കം":dataObjectDB1.വീടിൻ്റെ_കാലപ്പഴക്കം,
   "വിസ്തീർണ്ണം_ഒന്നാം":dataObjectDB1.വിസ്തീർണ്ണം_ഒന്നാം,
    "വിസ്തീർണ്ണം_രണ്ടാം":dataObjectDB1.വിസ്തീർണ്ണം_രണ്ടാം,
 "വിസ്തീർണ്ണം_മൂന്നാം":dataObjectDB1.വിസ്തീർണ്ണം_മൂന്നാം,
 "വിസ്തീർണ്ണം_മൂന്നിനും_മുകളിൽ":dataObjectDB1.വിസ്തീർണ്ണം_മൂന്നിനും_മുകളിൽ,
 "സൈക്കിൾ":dataObjectDB1.സൈക്കിൾ,
 "മോട്ടോർ_സൈക്കിൾ":dataObjectDB1.മോട്ടോർ_സൈക്കിൾ,
 "ഓട്ടോറിക്ഷ":dataObjectDB1.ഓട്ടോറിക്ഷ,
 "കാർ":dataObjectDB1.കാർ,
 "ഭാരവാഹനം":dataObjectDB1.ഭാരവാഹനം });
  //=====================Select Inputs==================
  const [formStValues, setformStValues] = useState({ 
    "റേഷൻ_കാർഡ്":dataObjectDB1.റേഷൻ_കാർഡ്,
    "റേഷൻ_കാർഡിൻ്റെ_തരം":dataObjectDB1.റേഷൻ_കാർഡിൻ്റെ_തരം,
     "മതം":dataObjectDB1.മതം,
     "ജാതി":dataObjectDB1.ജാതി,
      "താമസം":dataObjectDB1.താമസം,
      "കുടുംബാംഗങ്ങളുടെ_എണ്ണം":dataObjectDB1.കുടുംബാംഗങ്ങളുടെ_എണ്ണം,
      "പുരുഷന്മാർ":dataObjectDB1.പുരുഷന്മാർ,
  "സ്ത്രീകൾ":dataObjectDB1.സ്ത്രീകൾ,
  "കുട്ടികൾ":dataObjectDB1.കുട്ടികൾ,
  "തൊഴിൽ":dataObjectDB1.തൊഴിൽ,
  "വീടിൻ്റെ_അവസ്ഥ":dataObjectDB1.വീടിൻ്റെ_അവസ്ഥ,
  "വീടിൻ്റെ_തരം":dataObjectDB1.വീടിൻ്റെ_തരം,
  "നിലകളുടെ_എണ്ണം":dataObjectDB1.നിലകളുടെ_എണ്ണം,
  "തറ":dataObjectDB1.തറ,
  "ഭവന_നിർമ്മാണം":dataObjectDB1.ഭവന_നിർമ്മാണം,
  "പ്രധാന_അടുപ്പ്":dataObjectDB1.പ്രധാന_അടുപ്പ്,
 "കുടി_വെള്ളത്തിനുള്ള_സൗകര്യം":dataObjectDB1.കുടി_വെള്ളത്തിനുള്ള_സൗകര്യം,
 "വെള്ളത്തിൻ്റെ_ഗുണ":dataObjectDB1.വെള്ളത്തിൻ്റെ_ഗുണ,
 "ലാട്രിൻ":dataObjectDB1.ലാട്രിൻ,
 "മാലിന്_നിർമാർജ്ജനംയ":dataObjectDB1.മാലിന്_നിർമാർജ്ജനംയ });  
  //=====================Radio Inputs===================
  const [formRdValues, setformRdValues] = useState({ 
    "ബാങ്ക്_അക്കൗണ്ട്":dataObjectDB1.ബാങ്ക്_അക്കൗണ്ട്,
    "സ്വന്തമായി_വീട്":dataObjectDB1.സ്വന്തമായി_വീട്,
    "വാസയോഗ്യമാക്കുന്നതിന്_താത്പര്യം":dataObjectDB1.വാസയോഗ്യമാക്കുന്നതിന്_താത്പര്യം,
    "വൈദ്യുതി":dataObjectDB1.വൈദ്യുതി,
    "ബയോ_ഗ്യാസ്_താത്പര്യം":dataObjectDB1.ബയോ_ഗ്യാസ്_താത്പര്യം,
    "സോളാർ_താത്പര്":dataObjectDB1.സോളാർ_താത്പര്,
  "കുടിവെള്ള_പ്രശ്നം_ഉണ്ടോ":dataObjectDB1.കുടിവെള്ള_പ്രശ്നം_ഉണ്ടോ,
  "കിണർ":dataObjectDB1.കിണർ,
  "വറ്റുന്നത്_മാസം":dataObjectDB1.വറ്റുന്നത്_മാസം,
  "കിണർ_റീചാർജിങ്":dataObjectDB1.വറ്റുന്നത്_മാസം,
  "കിണറിൻ്റെ_ഭിത്തി":dataObjectDB1.കിണറിൻ്റെ_ഭിത്തി,
  "മഴവെള്ള_താത്പര്യം":dataObjectDB1.മഴവെള്ള_താത്പര്യം,
  "മാലിന്യ_ആവശ്യം_ഉണ്ടോ":dataObjectDB1.മാലിന്യ_ആവശ്യം_ഉണ്ടോ,
  "വാഹനം":dataObjectDB1.വാഹനം });

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
    

  };

  //====================================================================================

  const storeValues=()=>{
    
    dataObjectDB1=sendDataSection1(dataObjectDB1,formTxtValues,formStValues,formRdValues);
   
    return dataObjectDB1 
    
  }
  
  useEffect(() => {

   let captureData= storeValues()
    props.getValues1(captureData)
  },[formTxtValues,formStValues,formRdValues]);

  return (
    <Box sx={{m:"20px"}} component={'form'}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={5} lg={4}>
           <TextField
            autoFocus
            label="Code"
            name="കോഡ്"
            helperText="കോഡ്" 
            size='small'   
            value={formTxtValues.കോഡ്}   
            onChange={txtValueEntered}     
            />
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Ward Name"
            name="വാർഡിൻ്റെ_പേര്"
            helperText="വാർഡിൻ്റെ പേര്" 
            size='small' 
            value={formTxtValues.വാർഡിൻ്റെ_പേര്} 
            onChange={txtValueEntered}          
            />
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Ward Number"
            name="വാർഡ്_നമ്പർ"
            helperText="വാർഡ് നമ്പർ" 
            size='small' 
            value={formTxtValues.വാർഡ്_നമ്പർ}  
            onChange={txtValueEntered}          
            />
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
           <TextField
            label="Name of the head of the family"
            name="കുടുംബനാഥൻ്റെ_പേര്"
            helperText="കുടുംബനാഥൻ്റെ പേര്" 
            size='small'  
            value={formTxtValues.കുടുംബനാഥൻ്റെ_പേര്}  
            onChange={txtValueEntered}        
            />
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Date Of Birth"
            name="വയസ്സ്_ജനന_തീയ്യതി"
            helperText="വയസ്സ് / ജനന തീയ്യതി" 
            size='small' 
            value={formTxtValues.വയസ്സ്_ജനന_തീയ്യതി}   
            onChange={txtValueEntered}          
            />
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Village Name"
            name="വില്ലേജ്"
            helperText="വില്ലേജ്" 
            size='small'  
            value={formTxtValues.വില്ലേജ്}   
            onChange={txtValueEntered}          
            />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} container direction="column">
            <TextField
            label="Address"
            name="മേൽവിലാസം"
            multiline
            fullWidth
            rows="2"
            helperText="മേൽവിലാസം" 
            size='small'  
            value={formTxtValues.മേൽവിലാസം}   
            onChange={txtValueEntered}        
            />
            <TextField
                    label="Pincode"
                    name="പിൻ_കോഡ്"
                    helperText="പിൻ കോഡ്" 
                    size='small'  
                    sx={{width:"37%"}}    
                    value={formTxtValues.പിൻ_കോഡ്}   
                    onChange={txtValueEntered}      
                 />
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={3} container direction="column" >
            <TextField
                    label="Phone No"
                    name="ഫോൺ_നമ്പർ"
                    helperText="ഫോൺ നമ്പർ" 
                    size='small'   
                    value={formTxtValues.ഫോൺ_നമ്പർ}   
                    onChange={txtValueEntered}        
                 />
                 <TextField
                    label="Email"
                    name="ഇമെയിൽ_ഐ_ഡി"
                    helperText="ഇമെയിൽ ഐ.ഡി" 
                    size='small' 
                    value={formTxtValues.ഇമെയിൽ_ഐ_ഡി}   
                    onChange={txtValueEntered}           
                 />
            
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
              <FormControl sx={{width:"76%",pt:1}}>
                <InputLabel id="select-helper-label">Ration Card</InputLabel>
                <Select
                  labelId="select-helper-label"                 
                  name="റേഷൻ_കാർഡ്"
                  size='small'
                  sx={{p:.5}} 
                  value={formStValues.റേഷൻ_കാർഡ്}
                  onChange={stValueEntered}
                >
                  <MenuItem value={"എ.പി.എൽ"}>എ.പി.എൽ</MenuItem>
                  <MenuItem value={"ബി.പി.എൽ"}>ബി.പി.എൽ</MenuItem>
                  <MenuItem value="ഇല്ല">ഇല്ല</MenuItem>
                </Select>
                <FormHelperText>റേഷൻ കാർഡ്</FormHelperText>
              </FormControl>           
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
              <FormControl sx={{width:"76%",pt:1}}>
                  <InputLabel id="select-helper-label1">Ration Card Color</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="റേഷൻ_കാർഡിൻ്റെ_തരം"
                    size='small'
                    sx={{p:.5}} 
                    value={formStValues.റേഷൻ_കാർഡിൻ്റെ_തരം}
                    onChange={stValueEntered}
                  >
                     
                    <MenuItem value="മഞ്ഞ">മഞ്ഞ</MenuItem>
                    <MenuItem value="പിങ്ക്">പിങ്ക്</MenuItem>
                    <MenuItem value="നീല">നീല</MenuItem>
                    <MenuItem value="വെള്ള">വെള്ള</MenuItem>
                    <MenuItem value="ഇല്ല">ഇല്ല</MenuItem>
                  </Select>
                  <FormHelperText>റേഷൻ കാർഡിൻ്റെ തരം</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4} sx={{mt:1}}>
            <TextField
            label="Ration Card Number"
            name="റേഷൻ_കാർഡ്_നമ്പർ"
            helperText="റേഷൻ കാർഡ് നമ്പർ"
            size='small'  
            value={formTxtValues.റേഷൻ_കാർഡ്_നമ്പർ}   
            onChange={txtValueEntered}      
            />
            </Grid><br/>       
            <Grid item xs={12} sm={6} md={5} lg={4}>
              <FormControl sx={{width:"76%",pt:1}}>
                <InputLabel id="select-helper-label">Religion</InputLabel>
                <Select
                  labelId="select-helper-label"                 
                  name="മതം"
                  size='small'
                  sx={{p:.5}} 
                  value={formStValues.മതം}
                  onChange={stValueEntered}
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="ഹിന്ദു">ഹിന്ദു</MenuItem>
                  <MenuItem value="മുസ്ലിം">മുസ്ലിം</MenuItem>
                  <MenuItem value="ക്രിസ്ത്യൻ">ക്രിസ്ത്യൻ</MenuItem>
                  <MenuItem value="മറ്റുള്ളവ">മറ്റുള്ളവ</MenuItem>
                </Select>
                <FormHelperText>മതം</FormHelperText>
              </FormControl>           
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
              <FormControl sx={{width:"76%",pt:1}}>
                  <InputLabel id="select-helper-label1">Caste</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="ജാതി"
                    size='small'
                    sx={{p:.5}} 
                    value={formStValues.ജാതി}
                    onChange={stValueEntered}
                  >
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem value={"ജനറൽ"}>ജനറൽ</MenuItem>
                      <MenuItem value={"പിന്നോക്കം"}>പിന്നോക്കം</MenuItem>
                      <MenuItem value={"പട്ടിക ജാതി"}>പട്ടിക ജാതി</MenuItem>
                      <MenuItem value={"പട്ടിക വർഗം"}>പട്ടിക വർഗം</MenuItem>
                  </Select>
                  <FormHelperText>ജാതി</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4} sx={{mt:1}}>
              <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label2">if,Schedule Caste </InputLabel>
                  <Select
                    labelId="select-helper-label2"                 
                    name="താമസം"
                    size='small'
                    sx={{m:.5}} 
                    value={formStValues.താമസം}
                    onChange={stValueEntered}
                  >
                      <MenuItem value = "">Select</MenuItem>
                      <MenuItem value = "കോളനിക്ക് പുറത്ത്">കോളനിക്ക് പുറത്ത്</MenuItem>
                      <MenuItem value = "കോളനിക്ക് അകത്ത്">കോളനിക്ക് അകത്ത്</MenuItem>
                  </Select>
                  <FormHelperText>പട്ടിക വിഭാഗം ആണെങ്കിൽ (താമസം)</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
              <TextField
                  label="Colony Name"
                  name="കോളനിയുടെ_പേര്"
                  helperText="കോളനിയുടെ പേര്" 
                  size='small'
                  value={formTxtValues.കോളനിയുടെ_പേര്}   
                  onChange={txtValueEntered} 
                  />
            </Grid>
      </Grid>
{/* Section1  Ends */}

      <Divider sx={{color:"black",m:2}}>SECTION 2</Divider>

       {/* Section 2 Starts */}
      <Grid container spacing={2}>

            <Grid item xs={12}>
              <Typography>മറ്റു വിവരങ്ങൾ</Typography>
            </Grid>
            
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label1">No: of Persons</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="കുടുംബാംഗങ്ങളുടെ_എണ്ണം"
                    size='small'
                    sx={{p:.5}} 
                    value={formStValues.കുടുംബാംഗങ്ങളുടെ_എണ്ണം}
                    onChange={stValueEntered}
                  >
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="5">5</MenuItem>
                      <MenuItem value="6">6</MenuItem>
                      <MenuItem value="7">7</MenuItem>
                      <MenuItem value="8">8</MenuItem>
                      <MenuItem value="9">9</MenuItem>
                      <MenuItem value="10">10</MenuItem>
                  </Select>
                  
                  <FormHelperText>കുടുംബാംഗങ്ങളുടെ എണ്ണം</FormHelperText>
              </FormControl>
            </Grid>

            {/* Space Start */}
            <Grid item xs={8}></Grid>
            {/*Space End*/}

            <Grid item xs={12} sm={6} md={5} lg={4}>
             <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label1">Males</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="പുരുഷന്മാർ"
                    size='small'
                    sx={{p:.5}}
                    value={formStValues.പുരുഷന്മാർ}
                    onChange={stValueEntered}
                  >
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem  value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="5">5</MenuItem>
                      <MenuItem value="6">6</MenuItem>
                      <MenuItem value="7">7</MenuItem>
                      <MenuItem value="8">8</MenuItem>
                      <MenuItem value="9">9</MenuItem>
                      <MenuItem value="10">10</MenuItem>
                  </Select>
                  <FormHelperText>പുരുഷന്മാർ</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
              <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label1">Females</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="സ്ത്രീകൾ"
                    size='small'
                    sx={{p:.5}} 
                    value={formStValues.സ്ത്രീകൾ}
                    onChange={stValueEntered}
                  >
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem  value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="5">5</MenuItem>
                      <MenuItem value="6">6</MenuItem>
                      <MenuItem value="7">7</MenuItem>
                      <MenuItem value="8">8</MenuItem>
                      <MenuItem value="9">9</MenuItem>
                      <MenuItem value="10">10</MenuItem>
                  </Select>
                  <FormHelperText>സ്ത്രീകൾ</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
              <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label1">Children</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="കുട്ടികൾ"
                    size='small'
                    sx={{p:.5}}
                    value={formStValues.കുട്ടികൾ}
                    onChange={stValueEntered}
                  >
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem  value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="5">5</MenuItem>
                      <MenuItem value="6">6</MenuItem>
                      <MenuItem value="7">7</MenuItem>
                      <MenuItem value="8">8</MenuItem>
                      <MenuItem value="9">9</MenuItem>
                      <MenuItem value="10">10</MenuItem>
                  </Select>
                  <FormHelperText>കുട്ടികൾ</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl sx={{ml:"3px"}}>
                <FormLabel id="demo-row-radio-buttons-group-label">Bank Account</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="ബാങ്ക്_അക്കൗണ്ട്"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.ബാങ്ക്_അക്കൗണ്ട്}
                  onChange={rdValueEntered}
                >                  
                  <FormControlLabel sx={{
                    '& .css-ahj2mt-MuiTypography-root': {
                      fontSize: 13,
                    },
                  }} value= "ഉണ്ട്" control={<Radio/>} label="ഉണ്ട്" />
                  <FormControlLabel sx={{
                    '& .css-ahj2mt-MuiTypography-root': {
                      fontSize: 13,
                    },
                  }} value= "ഇല്ല" control={<Radio/>} label="ഇല്ല" />
                </RadioGroup>
                <FormHelperText>ബാങ്ക് അക്കൗണ്ട്</FormHelperText>
              </FormControl>
            </Grid>            
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label1">Career</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="തൊഴിൽ"
                    size='small'
                    sx={{p:.5}}
                    value={formStValues.തൊഴിൽ}
                    onChange={stValueEntered}
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value="കൃഷി">കൃഷി</MenuItem>
                    <MenuItem value="കർഷക തൊഴിലാളികൾ">കർഷക തൊഴിലാളികൾ</MenuItem>
                    <MenuItem value="പരമ്പരാകത തൊഴിലാളികൾ">പരമ്പരാകത തൊഴിലാളികൾ</MenuItem>
                    <MenuItem value="നിർമ്മാണ തൊഴിലാളികൾ">നിർമ്മാണ തൊഴിലാളികൾ</MenuItem>
                    <MenuItem  value="സർക്കാർ ജീവനക്കാർ">സർക്കാർ ജീവനക്കാർ</MenuItem>
                    <MenuItem  value="സ്വകാര്യ മേഖലാ ജീവനക്കാർ">സ്വകാര്യ മേഖലാ ജീവനക്കാർ</MenuItem>
                    <MenuItem  value="പ്രവാസികൾ">പ്രവാസികൾ</MenuItem>
                    <MenuItem  value="ചെറുകിട കച്ചവടക്കാർ">ചെറുകിട കച്ചവടക്കാർ</MenuItem>
                    <MenuItem  value="വൻകിട വ്യവസായികൾ">വൻകിട വ്യവസായികൾ</MenuItem>
                    <MenuItem  value="ഡ്രൈവർ">ഡ്രൈവർ</MenuItem>
                    <MenuItem  value="കൂലി">കൂലി</MenuItem>
                    <MenuItem  value="ആശാരി">ആശാരി</MenuItem>
                    <MenuItem  value="ബിസിനസ്സ്">ബിസിനസ്സ്</MenuItem>
                    <MenuItem  value="മറ്റു തൊഴിൽ">മറ്റു തൊഴിൽ</MenuItem>
                    <MenuItem  value="ഇല്ല"> ഇല്ല</MenuItem>
                </Select>
                  <FormHelperText>തൊഴിൽ</FormHelperText>
              </FormControl>
            </Grid>
      </Grid><br/>

            <Divider sx={{color:"black",m:2}}>SECTION 3</Divider>

            {/* Section 3 Starts */}
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>വീടിൻ്റെ വിവരങ്ങൾ</Typography>
            </Grid>

            {/* Space Start */}
            <Grid item xs={12}></Grid>
            {/*Space End*/}

            <Grid item xs={12} sm={6} md={5} lg={4}>            
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Own House</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="സ്വന്തമായി_വീട്"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.സ്വന്തമായി_വീട്}
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
            <FormHelperText>സ്വന്തമായി വീട്</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="House was built in :"
            name="വീടിൻ്റെ_കാലപ്പഴക്കം"
            helperText="വീട് പണിത വർഷം" 
            size='small'
            value={formTxtValues.വീടിൻ്റെ_കാലപ്പഴക്കം}   
            onChange={txtValueEntered} 
            />
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>
              <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label1">Condt. of the house</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="വീടിൻ്റെ_അവസ്ഥ"
                    size='small'
                    sx={{p:.5}} 
                    value={formStValues.വീടിൻ്റെ_അവസ്ഥ}
                    onChange={stValueEntered}
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value="മെച്ചപ്പെട്ടത്">മെച്ചപ്പെട്ടത്</MenuItem>
                    <MenuItem value="ഇടത്തരം">ഇടത്തരം</MenuItem>
                    <MenuItem value="മോശപ്പെട്ടത്">മോശപ്പെട്ടത്</MenuItem>
                </Select>
                <FormHelperText>വീടിൻ്റെ അവസ്ഥ</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>            
            <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label1">House Type</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="വീടിൻ്റെ_തരം"
                    size='small'
                    sx={{p:.5}} 
                    value={formStValues.വീടിൻ്റെ_തരം}
                    onChange={stValueEntered}
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value="കുടിൽ">കുടിൽ</MenuItem>
                    <MenuItem value="ഓട്">ഓട്</MenuItem>
                    <MenuItem value="ടെറസ്സ്">ടെറസ്സ്</MenuItem>
                    <MenuItem value="മറ്റുള്ളവ">മറ്റുള്ളവ</MenuItem>
                   </Select>
                  <FormHelperText>വീടിൻ്റെ തരം</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label1">Storey</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="നിലകളുടെ_എണ്ണം"
                    size='small'
                    sx={{p:.5}} 
                    value={formStValues.നിലകളുടെ_എണ്ണം}
                    onChange={stValueEntered}
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                </Select>
                  <FormHelperText></FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>            
            <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label1">Floor</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="തറ"
                    size='small'
                    sx={{p:.5}}
                    value={formStValues.തറ}
                    onChange={stValueEntered}
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value="ചാണകം">ചാണകം </MenuItem>
                    <MenuItem value="സിമെൻറ്‌">സിമെൻറ്‌</MenuItem>
                    <MenuItem value="മൊസൈക്ക്">മൊസൈക്ക്</MenuItem>
                    <MenuItem value="ടൈൽ">ടൈൽ</MenuItem>
                    <MenuItem value="മാർബിൾ">മാർബിൾ</MenuItem>
                    <MenuItem value="ഗ്രാനൈറ്റ്">ഗ്രാനൈറ്റ്</MenuItem>
                  </Select>
                  <FormHelperText>തറ</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="First Floor in sq.ft"
            name="വിസ്തീർണ്ണം_ഒന്നാം"
            helperText="ഒന്നാം നില( സ്‌കോയർ ഫീറ്റ് )" 
            size='small'
            value={formTxtValues.വിസ്തീർണ്ണം_ഒന്നാം}   
            onChange={txtValueEntered}
            />
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Second Floor in sq.ft"
            name="വിസ്തീർണ്ണം_രണ്ടാം"
            helperText="രണ്ടാം നില( സ്‌കോയർ ഫീറ്റ് )" 
            size='small'
            value={formTxtValues.വിസ്തീർണ്ണം_രണ്ടാം}   
            onChange={txtValueEntered}
            />
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Third Floor in sq.ft"
            name="വിസ്തീർണ്ണം_മൂന്നാം"
            helperText="മൂന്നാം നില( സ്‌കോയർ ഫീറ്റ് )" 
            size='small'
            value={formTxtValues.വിസ്തീർണ്ണം_മൂന്നാം}   
            onChange={txtValueEntered}/>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="More than 3 Floors in sq.ft"
            name="വിസ്തീർണ്ണം_മൂന്നിനും_മുകളിൽ"
            helperText=" മൂന്നിനും മുകളിൽ( സ്‌കോയർ ഫീറ്റ് )" 
            size='small'
            value={formTxtValues.വിസ്തീർണ്ണം_മൂന്നിനും_മുകളിൽ}   
            onChange={txtValueEntered}/>
            </Grid>
            
            {/* Space Start */}
            <Grid item xs={8}></Grid>
            {/*Space End*/}

            <Grid item xs={12} sm={6} md={5} lg={4}>            
            <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label1">Build</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="ഭവന_നിർമ്മാണം"
                    size='small'
                    sx={{p:.5}} 
                    value={formStValues.ഭവന_നിർമ്മാണം}
                    onChange={stValueEntered}
                  >
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem value="സർക്കാർ ധന സഹായം">സർക്കാർ ധന സഹായം</MenuItem>
                      <MenuItem value="സ്വകാര്യ ധന സഹായം">സ്വകാര്യ ധന സഹായം</MenuItem>
                      <MenuItem value="ബാങ്ക് വായ്പ">ബാങ്ക് വായ്പ</MenuItem>
                      <MenuItem value="ഒന്നുമില്ല">ഒന്നുമില്ല </MenuItem>
                  </Select>
                  <FormHelperText>ഭവന നിർമ്മാണം</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">House Renovation</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="വാസയോഗ്യമാക്കുന്നതിന്_താത്പര്യം"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.വാസയോഗ്യമാക്കുന്നതിന്_താത്പര്യം}
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
            <FormHelperText>ഭവനം വാസയോഗ്യമാക്കുന്നതിന് താത്‌പര്യം ഉണ്ടോ?</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Electricity</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="വൈദ്യുതി"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.വൈദ്യുതി}
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
            <FormHelperText>വൈദ്യുതി</FormHelperText>
            </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label1">Main Stove</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="പ്രധാന_അടുപ്പ്"
                    size='small'
                    sx={{p:.5}}
                    value={formStValues.പ്രധാന_അടുപ്പ്}
                    onChange={stValueEntered}
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value="വിറക്">വിറക് </MenuItem>
                    <MenuItem value="മണ്ണെണ്ണ">മണ്ണെണ്ണ</MenuItem>
                    <MenuItem value="ഗ്യാസ്">ഗ്യാസ്</MenuItem>
                    <MenuItem value="ബയോ ഗ്യാസ്">ബയോ ഗ്യാസ് </MenuItem>
                </Select>
                <FormHelperText>ഉപയോഗിക്കുന്ന പ്രധാന അടുപ്പ്</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>            
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Biogas</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="ബയോ_ഗ്യാസ്_താത്പര്യം"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.ബയോ_ഗ്യാസ്_താത്പര്യം}
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
            <FormHelperText>വീട്ടിൽ ബയോ ഗ്യാസ് ഉപയോഗിക്കുന്നതിന് താത്പര്യം ഉണ്ടോ?</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>            
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Solar</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="സോളാർ_താത്പര്"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.സോളാർ_താത്പര്}
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
            <FormHelperText>വീട്ടിൽ സോളാർ ഉപയോഗിക്കുന്നതിന് താത്പര്യം ഉണ്ടോ?</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Issue in Drinking Water</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="കുടിവെള്ള_പ്രശ്നം_ഉണ്ടോ"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.കുടിവെള്ള_പ്രശ്നം_ഉണ്ടോ}
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
            <FormHelperText>കുടിവെള്ള പ്രശ്നം ഉണ്ടോ?</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label1">Drinking Water Source</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="കുടി_വെള്ളത്തിനുള്ള_സൗകര്യം"
                    size='small'
                    sx={{p:.5}}
                    value={formStValues.കുടി_വെള്ളത്തിനുള്ള_സൗകര്യം}
                    onChange={stValueEntered}
                  >
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem value="സ്വന്തം കിണർ">സ്വന്തം കിണർ</MenuItem>
                      <MenuItem value="പൊതു കിണർ">പൊതു കിണർ</MenuItem>
                      <MenuItem value="കുഴൽ കിണർ">കുഴൽ കിണർ</MenuItem>
                      <MenuItem value="കുളം">കുളം </MenuItem>
                      <MenuItem value="ഉറവ">ഉറവ</MenuItem>
                      <MenuItem value="പൊതു ടാപ്പ്">പൊതു ടാപ്പ്</MenuItem>
                      <MenuItem value="വാട്ടർ കണക്ഷൻ">വാട്ടർ കണക്ഷൻ </MenuItem>
                  </Select>
                  <FormHelperText>കുടി വെള്ളത്തിനുള്ള സൗകര്യം</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>            
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Well</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="കിണർ"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.കിണർ}
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
            <FormHelperText>സ്വന്തമായി കിണർ</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Well Dries</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="വറ്റുന്നത്_മാസം"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.വറ്റുന്നത്_മാസം}
                  onChange={rdValueEntered}
                >                  
                  <FormControlLabel sx={{
                    '& .css-ahj2mt-MuiTypography-root': {
                      fontSize: 13,
                    },
                  }} value="വറ്റുന്നത്" control={<Radio />} label="വറ്റുന്നത്" />
                  <FormControlLabel sx={{
                    '& .css-ahj2mt-MuiTypography-root': {
                      fontSize: 13,
                    },
                  }} value="വറ്റാത്തത്" control={<Radio />} label="വറ്റാത്തത്" />
                </RadioGroup>
            <FormHelperText>കിണർ ആണെങ്കിൽ</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Well Recharging</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="കിണർ_റീചാർജിങ്"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.കിണർ_റീചാർജിങ്}
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
            <FormHelperText>കിണർ റീചാർജിങ് ചെയ്തിട്ടുണ്ടോ ?</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Well(Wall)</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="കിണറിൻ്റെ_ഭിത്തി"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.കിണറിൻ്റെ_ഭിത്തി}
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
            <FormHelperText>കിണറിൻ്റെ സംരക്ഷണ ഭിത്തി</FormHelperText>
            </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl sx={{width:"76%"}}>
                  <InputLabel id="select-helper-label1">Water Quality</InputLabel>
                  <Select
                    labelId="select-helper-label1"                 
                    name="വെള്ളത്തിൻ്റെ_ഗുണ"
                    size='small'
                    sx={{p:.5}}
                    value={formStValues.വെള്ളത്തിൻ്റെ_ഗുണ}
                    onChange={stValueEntered}
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value="കാഠിന്യം ഉള്ളത്">കാഠിന്യം ഉള്ളത്</MenuItem>
                    <MenuItem value="ഉപ്പ് കലർന്നത്">ഉപ്പ് കലർന്നത് </MenuItem>
                    <MenuItem value="ശുദ്ധ ജലം">ശുദ്ധ ജലം</MenuItem>
                    <MenuItem value="കലക്കുവെള്ളം">കലക്കുവെള്ളം </MenuItem>
                </Select>
                  <FormHelperText>വെള്ളത്തിൻ്റെ ഗുണ നിലവാരം</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>            
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Interested in saving rain water</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="മഴവെള്ള_താത്പര്യം"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.മഴവെള്ള_താത്പര്യം}
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
            <FormHelperText>മഴവെള്ള സംഭരണി നിർമ്മിക്കുവാൻ താത്പര്യം ഉണ്ടോ?</FormHelperText>
            </FormControl>
            </Grid>
       
            </Grid><br/><br/>
           {/* Section 3 Ends */}

           <Divider sx={{color:"black",m:2}}>SECTION 4</Divider>

            {/* Section 4 Starts */}
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>മറ്റു വിവരങ്ങൾ</Typography>
            </Grid>

            {/* Space Start */}
            <Grid item xs={12}></Grid>
            {/*Space End*/}

            <Grid item xs={12} sm={6} md={5} lg={4}>
              <FormControl sx={{width:"76%",pt:1}}>
                <InputLabel id="select-helper-label">Latrine</InputLabel>
                <Select
                  labelId="select-helper-label"                 
                  name="ലാട്രിൻ"
                  size='small'
                  sx={{p:.5}}
                  value={formStValues.ലാട്രിൻ}
                    onChange={stValueEntered}
                >
                  <MenuItem value={"ഓപ്പൺ പിറ്റ്"}>ഓപ്പൺ പിറ്റ്</MenuItem>
                  <MenuItem value={"സിംഗിൾ പിറ്റ്"}>സിംഗിൾ പിറ്റ്</MenuItem>
                  <MenuItem value={"2-പിറ്റ്"}>2-പിറ്റ്</MenuItem>
                  <MenuItem value={"സെപ്റ്റിക് ടാങ്ക്"}>സെപ്റ്റിക് ടാങ്ക്</MenuItem>
                  <MenuItem value="ഇല്ല">ഇല്ല</MenuItem>
                </Select>
                <FormHelperText>ലാട്രിൻ</FormHelperText>
              </FormControl>           
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>            
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Recycle(Interested)</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="മാലിന്യ_ആവശ്യം_ഉണ്ടോ"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.മാലിന്യ_ആവശ്യം_ഉണ്ടോ}
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
            <FormHelperText>വീട്ടിൽ മാലിന്യ നിർമ്മാർജ്ജനത്തിനുള്ള ആവശ്യം ഉണ്ടോ?</FormHelperText>
            </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>
              <FormControl sx={{width:"76%",pt:1}}>
                <InputLabel id="select-helper-label">Recycle Methods</InputLabel>
                <Select
                  labelId="select-helper-label"                 
                  name="മാലിന്_നിർമാർജ്ജനംയ"
                  size='small'
                  sx={{p:.5}}
                  value={formStValues.മാലിന്_നിർമാർജ്ജനംയ}
                    onChange={stValueEntered}
                >
                  <MenuItem value={"സോക്ക് പിറ്റ്"}>സോക്ക് പിറ്റ്</MenuItem>
                  <MenuItem value={"കമ്പോസ്റ്റ് പിറ്റ്"}>കമ്പോസ്റ്റ് പിറ്റ്</MenuItem>
                  <MenuItem value="ബയോ ഗ്യാസ് പ്ലാൻറ്">ബയോ ഗ്യാസ് പ്ലാൻറ്</MenuItem>
                  <MenuItem value={"ബയോ ഡൈജസ്റ്റർ"}>ബയോ ഡൈജസ്റ്റർ</MenuItem>
                  <MenuItem value={"മറ്റുള്ളവ"}>മറ്റുള്ളവ</MenuItem>
                  <MenuItem value="ഇല്ല">ഇല്ല</MenuItem>
                </Select>
                <FormHelperText>മാലിന്യ നിർമാർജ്ജനം </FormHelperText>
              </FormControl>           
            </Grid>

            {/* Space Start */}
            <Grid item xs={12}></Grid>
            {/*Space End*/}
       
            </Grid><br/><br/>
           {/* Section 4 Ends */}

           <Divider sx={{color:"black",m:2}}>SECTION 5</Divider>

            {/* Section 5 Starts */}
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>വാഹനം</Typography>
            </Grid>

            {/* Space Start */}
            <Grid item xs={12}></Grid>
            {/*Space End*/}

            <Grid item xs={12} sm={6} md={5} lg={4}>            
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Own Vehicle</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="വാഹനം"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.വാഹനം}
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
            <FormHelperText>സ്വന്തമായി വാഹനം</FormHelperText>
            </FormControl>
            </Grid>

            {/* Space Start */}
            <Grid item xs={12}></Grid>
            {/*Space End*/}

            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Cycle"
            name="സൈക്കിൾ"
            helperText="സൈക്കിൾ" 
            size='small'
            value={formTxtValues.സൈക്കിൾ}   
            onChange={txtValueEntered}/>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Motor Cycle"
            name="മോട്ടോർ_സൈക്കിൾ"
            helperText="മോട്ടോർ സൈക്കിൾ" 
            size='small'
            value={formTxtValues.മോട്ടോർ_സൈക്കിൾ}   
            onChange={txtValueEntered}/>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Autorickshaw"
            name="ഓട്ടോറിക്ഷ"
            helperText="ഓട്ടോറിക്ഷ" 
            size='small'
            value={formTxtValues.ഓട്ടോറിക്ഷ}   
            onChange={txtValueEntered}/>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Car"
            name="കാർ"
            helperText="കാർ" 
            size='small'
            value={formTxtValues.കാർ}   
            onChange={txtValueEntered}/>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Heavy Vehicle"
            name="ഭാരവാഹനം"
            helperText="ഭാരവാഹനം" 
            size='small'
            value={formTxtValues.ഭാരവാഹനം}   
            onChange={txtValueEntered}/>
            </Grid>
            {/* Space Start */}
            <Grid item xs={3}></Grid>
            {/*Space End*/}
       
            </Grid><br/><br/>
           {/* Section 5 Ends */}


       
    </Box>
  )
}

export default Section1



