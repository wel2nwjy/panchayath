import React,{useState,useEffect} from 'react';
import { Box,TextField,Grid,Select,InputLabel,MenuItem,FormControl,FormHelperText,FormLabel,FormControlLabel,
    Radio,RadioGroup,  Divider, Typography} from "@mui/material";

    import dataModel from '../DataObj';
    import sendDataSection2 from "./Section2Data";
  
  
    let dataObjectDB2=dataModel();

const Section2 = (props) => {

  dataObjectDB2=props.newEntryValues;

//================================Input Variables=====================================

  //=====================Text Inputs====================
  const [formTxtValues, setformTxtValuess] = useState({ 
    "ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ_അല്ലെ":dataObjectDB2.ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ_അല്ലെ,
    "പുരയിടം_സർവ്വേ_നമ്പർ":dataObjectDB2.പുരയിടം_സർവ്വേ_നമ്പർ,
    "പുരയിടം_വിസ്തീർണം":dataObjectDB2.പുരയിടം_വിസ്തീർണം,
    "പുരയിട_കൃഷി":dataObjectDB2.പുരയിട_കൃഷി,
    "നില_സർവ്വേ_നമ്പർ":dataObjectDB2.നില_സർവ്വേ_നമ്പർ,
    "നില_സെൻറ്":dataObjectDB2.നില_സെൻറ്
    });
    //=====================Select Inputs==================
    const [formStValues, setformStValues] = useState({ 
      "ഏത്_മാരക_രോഗങ്ങൾ":dataObjectDB2.ഏത്_മാരക_രോഗങ്ങൾ,
      "ഏത്_ജീവിത_ശൈലീ_രോഗങ്ങൾ":dataObjectDB2.ഏത്_ജീവിത_ശൈലീ_രോഗങ്ങൾ,
    "ഏത്_ചികിത്":dataObjectDB2.ഏത്_ചികിത്,
    "നൂതന_കൃഷി_രീതികൾ":dataObjectDB2.നൂതന_കൃഷി_രീതികൾ });  
    //=====================Radio Inputs===================
    const [formRdValues, setformRdValues] = useState({ 
      "കിടപ്പു_രോഗികൾ_ഉണ്ടോ":dataObjectDB2.കിടപ്പു_രോഗികൾ_ഉണ്ടോ,
      "വൈകല്യം_ഉണ്ടോ":dataObjectDB2.വൈകല്യം_ഉണ്ടോ,
      "മാരക_രോഗങ്ങൾ_ഉണ്ടോ":dataObjectDB2.മാരക_രോഗങ്ങൾ_ഉണ്ടോ,
      "ജീവിത_ശൈലീ_രോഗങ്ങൾ":dataObjectDB2.ജീവിത_ശൈലീ_രോഗങ്ങൾ,
      "രോഗത്തിന്_ചികിത്സ_എവിടെ":dataObjectDB2.രോഗത്തിന്_ചികിത്സ_എവിടെ,
      "ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ":dataObjectDB2.ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ,
      "സ്വന്തമായി_ഭൂമി_ഉണ്ടോ":dataObjectDB2.സ്വന്തമായി_ഭൂമി_ഉണ്ടോ,
      "പട്ടയം":dataObjectDB2.പട്ടയം,
      "പുരയിട_കൃഷി_ഉണ്ടോ":dataObjectDB2.പുരയിട_കൃഷി_ഉണ്ടോ,
      "പുരയിടം_തരിശ്ശ്":dataObjectDB2.പുരയിടം_തരിശ്ശ്,
    "നില_തരിശ്ശ്":dataObjectDB2.നില_തരിശ്ശ്,
      "നില_കൃഷി_ഉണ്ടോ":dataObjectDB2.നില_കൃഷി_ഉണ്ടോ });

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
    
    dataObjectDB2=sendDataSection2(dataObjectDB2,formTxtValues,formStValues,formRdValues);
   
    return dataObjectDB2
    
  }

  useEffect(() => {

    let captureData2= storeValues()
     props.getValues2(captureData2)
   },[formTxtValues,formStValues,formRdValues]);


  return (
    <Box sx={{m:"20px"}} component={'form'}>
        <Divider sx={{color:"black"}}>SECTION 6</Divider><br/>
            {/* Section 6 Starts */}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <Typography>ആരോഗ്യം</Typography>
                </Grid>
                {/* Space Start */}
                <Grid item xs={12} my="5px"></Grid>
                {/*Space End*/} 

                <Grid item xs={12} sm={6} md={5} lg={4}>
                    <FormControl sx={{ml:"3px"}}>
                    <FormLabel id="demo-row-radio-buttons-group-label">Bedridden family member</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="കിടപ്പു_രോഗികൾ_ഉണ്ടോ"
                    sx={{
                        '& .MuiSvgIcon-root': {
                        fontSize: 10,
                        },
                    }}
                    value={formRdValues.കിടപ്പു_രോഗികൾ_ഉണ്ടോ}
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
                    <FormHelperText>കിടപ്പു രോഗികൾ വീട്ടിൽ ഉണ്ടോ?</FormHelperText>
                    </FormControl>
                </Grid> 
                <Grid item xs={12} sm={6} md={5} lg={4}>
                    <FormControl sx={{ml:"3px"}}>
                    <FormLabel id="demo-row-radio-buttons-group-label">Physically-challenged family member</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="വൈകല്യം_ഉണ്ടോ"
                    sx={{
                        '& .MuiSvgIcon-root': {
                        fontSize: 10,
                        },
                    }}
                    value={formRdValues.വൈകല്യം_ഉണ്ടോ}
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
                    <FormHelperText>വൈകല്യം ബാധിച്ചവർ വീട്ടിൽ ഉണ്ടോ?</FormHelperText>
                    </FormControl>
                </Grid>

                {/* Space Start */}
                <Grid item xs={4} my="5px"></Grid>
                {/*Space End*/} 


               
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl sx={{ml:"3px"}}>
                    <FormLabel id="demo-row-radio-buttons-group-label">Fatal illness</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="മാരക_രോഗങ്ങൾ_ഉണ്ടോ"
                    sx={{
                        '& .MuiSvgIcon-root': {
                        fontSize: 10,
                        },
                    }}
                    value={formRdValues.മാരക_രോഗങ്ങൾ_ഉണ്ടോ}
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
                    <FormHelperText>മാരക രോഗങ്ങൾ ബാധിച്ചവർ വീട്ടിൽ ഉണ്ടോ?</FormHelperText>
                    </FormControl>
                </Grid>            
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl sx={{width:"76%"}}>
                    <InputLabel id="select-helper-label1">Fatal illness(Type)</InputLabel>
                    <Select
                        labelId="select-helper-label1"                 
                        name="ഏത്_മാരക_രോഗങ്ങൾ"
                        size='small'
                        sx={{p:.5}} 
                        value={formStValues.ഏത്_മാരക_രോഗങ്ങൾ}
                        onChange={stValueEntered}
                    >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="ക്യാൻസർ">ക്യാൻസർ</MenuItem>
                            <MenuItem value="വൃക്ക രോഗം">വൃക്ക രോഗം </MenuItem>
                            <MenuItem value="കരൾ രോഗം">കരൾ രോഗം </MenuItem>
                            <MenuItem value="ഹൃദയ സംബന്ധമായ രോഗങ്ങൾ">ഹൃദയ സംബന്ധമായ രോഗങ്ങൾ</MenuItem>
                            <MenuItem value="മന്ത്">മന്ത്</MenuItem>
                            <MenuItem value="ലിഫ്റ്റ്">ലിഫ്റ്റ്</MenuItem>
                            <MenuItem value="ക്ഷയം">ക്ഷയം</MenuItem>
                    </Select>                  
                    <FormHelperText>ഉണ്ടെങ്കിൽ ഏത്</FormHelperText>
                </FormControl>
                </Grid>

                {/* Space Start */}
                <Grid item xs={4} my="5px"></Grid>
                {/*Space End*/} 

                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Lifestyle Disease</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="ജീവിത_ശൈലീ_രോഗങ്ങൾ"
                    sx={{
                        '& .MuiSvgIcon-root': {
                        fontSize: 10,
                        },
                    }}
                    value={formRdValues.ജീവിത_ശൈലീ_രോഗങ്ങൾ}
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
                <FormHelperText>ജീവിത ശൈലീ രോഗങ്ങൾ ബാധിച്ചവർ വീട്ടിൽ ഉണ്ടോ?</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl sx={{width:"76%"}}>
                    <InputLabel id="select-helper-label1">Lifestyle Disease(Type)</InputLabel>
                    <Select
                        labelId="select-helper-label1"                 
                        name="ഏത്_ജീവിത_ശൈലീ_രോഗങ്ങൾ"
                        size='small'
                        sx={{p:.5}} 
                        value={formStValues.ഏത്_ജീവിത_ശൈലീ_രോഗങ്ങൾ}
                        onChange={stValueEntered}
                    >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="പ്രമേഹം">പ്രമേഹം</MenuItem>
                            <MenuItem value="രക്ത സമ്മർദ്ദം">രക്ത സമ്മർദ്ദം </MenuItem>
                            <MenuItem value="കൊളസ്‌ട്രോൾ">കൊളസ്‌ട്രോൾ </MenuItem>
                            <MenuItem value="അമിത ഭാരം">അമിത ഭാരം</MenuItem>
                            <MenuItem value="മറ്റുള്ളവ">മറ്റുള്ളവ</MenuItem>
                            </Select>                  
                    <FormHelperText>ഉണ്ടെങ്കിൽ ഏത്</FormHelperText>
                </FormControl>
                </Grid>

                {/* Space Start */}
                <Grid item xs={4} my="5px"></Grid>
                {/*Space End*/} 

                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Hospital</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="രോഗത്തിന്_ചികിത്സ_എവിടെ"
                    sx={{
                        '& .MuiSvgIcon-root': {
                        fontSize: 10,
                        },
                    }}
                    value={formRdValues.രോഗത്തിന്_ചികിത്സ_എവിടെ}
                    onChange={rdValueEntered}
                    >                    
                    <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                        fontSize: 13,
                        },
                    }} value="സ്വകാര്യ ആശുപത്രി" control={<Radio />} label="സ്വകാര്യ ആശുപത്രി" />
                    <FormControlLabel sx={{
                        '& .css-ahj2mt-MuiTypography-root': {
                        fontSize: 13,
                        },
                    }} value="സർക്കാർ ആശുപത്രി" control={<Radio />} label="സർക്കാർ ആശുപത്രി" />
                    </RadioGroup>
                <FormHelperText>രോഗത്തിന് ചികിത്സ തേടുന്നെങ്കിൽ എവിടെ നിന്ന്?</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl sx={{width:"76%"}}>
                    <InputLabel id="select-helper-label1">Treatment(Type)</InputLabel>
                    <Select
                        labelId="select-helper-label1"                 
                        name="ഏത്_ചികിത്"
                        size='small'
                        sx={{p:.5}}
                        value={formStValues.ഏത്_ചികിത്}
                        onChange={stValueEntered}
                    >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="അലോപ്പതി (ഇംഗ്ലീഷ്)">അലോപ്പതി (ഇംഗ്ലീഷ്)</MenuItem>
                            <MenuItem value="ആയുർവ്വേദം">ആയുർവ്വേദം </MenuItem>
                            <MenuItem value="ഹോമിയോപ്പതി">ഹോമിയോപ്പതി </MenuItem>
                            <MenuItem value="യുനാനി">യുനാനി</MenuItem>
                            <MenuItem value="സിദ്ധവൈദ്യം">സിദ്ധവൈദ്യം</MenuItem>
                            <MenuItem value="നാട്ടു ചികിത്സ">നാട്ടു ചികിത്സ</MenuItem>
                            <MenuItem value="അക്ക്യുപംക്ചർ">അക്ക്യുപംക്ചർ</MenuItem>
                            <MenuItem value="മറ്റുള്ളവ">മറ്റുള്ളവ</MenuItem>

                    </Select>                  
                    <FormHelperText>ഏത് ചികിത്സ ആണ് സ്വീകരിക്കുന്നത് </FormHelperText>
                </FormControl>
                </Grid>

                {/* Space Start */}
                <Grid item xs={4} my="5px"></Grid>
                {/*Space End*/} 

                <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Government Health Services</FormLabel>
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ"
                    sx={{
                        '& .MuiSvgIcon-root': {
                        fontSize: 10,
                        },
                    }}
                    value={formRdValues.ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ}
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
                <FormHelperText>നിലവിലുള്ള സർക്കാർ ആരോഗ്യ സേവനങ്ങളിൽ നിങ്ങൾ തൃപ്തൻ ആണോ?</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>            
                  <TextField
                  label="If Not, Why.."
                  name="ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ_അല്ലെ"
                  helperText="നിലവിലുള്ള സർക്കാർ ആരോഗ്യ സേവനങ്ങളിൽ നിങ്ങൾ തൃപ്തൻ അല്ലെങ്കിൽ എന്ത് കൊണ്ട്? " 
                  size='small'
                  value={formTxtValues.ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ_അല്ലെ} 
                onChange={txtValueEntered}/>
                  </Grid>
            </Grid><br/>
            {/* Section 6 Ends */}

            <Divider sx={{color:"black",m:2}}>SECTION 7</Divider>

            {/* Section 7 Starts */}
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>ഭൂമിയുടെ വിവരങ്ങൾ</Typography>
            </Grid>

            {/* Space Start */}
            <Grid item xs={12}></Grid>
            {/*Space End*/}

            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Land(Own)</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="സ്വന്തമായി_ഭൂമി_ഉണ്ടോ"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.സ്വന്തമായി_ഭൂമി_ഉണ്ടോ}
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
            <FormHelperText>സ്വന്തമായി ഭൂമി ഉണ്ടോ? </FormHelperText>
            </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gocernment owned land</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="പട്ടയം"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.പട്ടയം}
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
            <FormHelperText>പട്ടയം</FormHelperText>
            </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Survey Number(govt. land)"
            name="പുരയിടം_സർവ്വേ_നമ്പർ"
            helperText="പുരയിടം-സർവ്വേ നമ്പർ " 
            size='small'
            value={formTxtValues.പുരയിടം_സർവ്വേ_നമ്പർ} 
            onChange={txtValueEntered}/>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Govt Owned Land in Cent"
            name="പുരയിടം_വിസ്തീർണം"
            helperText="പുരയിടം-വിസ്തീർണം (സെൻറ്)" 
            size='small'
            value={formTxtValues.പുരയിടം_വിസ്തീർണം} 
            onChange={txtValueEntered}/>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Farming(govt. owned land)</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="പുരയിട_കൃഷി_ഉണ്ടോ"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.പുരയിട_കൃഷി_ഉണ്ടോ}
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
            <FormHelperText>പുരയിട കൃഷി ചെയ്യുന്നുണ്ടോ?</FormHelperText>
            </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Farming(Type)"
            name="പുരയിട_കൃഷി"
            helperText="പുരയിട കൃഷി ചെയ്യുന്നുണ്ടെങ്കിൽ ഏത്? " 
            size='small'
            value={formTxtValues.പുരയിട_കൃഷി} 
            onChange={txtValueEntered}/>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Barren(govt.Owned land)</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="പുരയിടം_തരിശ്ശ്"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.പുരയിടം_തരിശ്ശ്}
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
            <FormHelperText>പുരയിടം - തരിശ്ശ് ഭൂമി </FormHelperText>
            </FormControl>
            </Grid>

            {/* Space Start */}
            <Grid item xs={8}></Grid>
            {/*Space End*/}

            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Survey Number"
            name="നില_സർവ്വേ_നമ്പർ"
            helperText="നിലം-സർവ്വേ നമ്പർ " 
            size='small'
            value={formTxtValues.നില_സർവ്വേ_നമ്പർ} 
            onChange={txtValueEntered}/>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Land in Cent"
            name="നില_സെൻറ്"
            helperText="നിലം-വിസ്തീർണം (സെൻറ്) " 
            size='small'
            value={formTxtValues.നില_സെൻറ്} 
            onChange={txtValueEntered}/>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4}>
            <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Farming</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="നില_കൃഷി_ഉണ്ടോ"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 10,
                    },
                  }}
                  value={formRdValues.നില_കൃഷി_ഉണ്ടോ}
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
            <FormHelperText>നിലം- കൃഷി ചെയ്യുന്നുണ്ടോ?</FormHelperText>
            </FormControl>
            </Grid>
            

            <Grid item xs={12} sm={6} md={5} lg={4}>            
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Barren Land</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="നില_തരിശ്ശ്"
                      sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: 10,
                        },
                      }}
                      value={formRdValues.നില_തരിശ്ശ്}
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
                <FormHelperText>നിലം - തരിശ്ശ് ഭൂമി </FormHelperText>
                </FormControl>
                </Grid>
       
            </Grid><br/><br/>
            {/* Section 7 Ends */}
            
    </Box>
  )
}

export default Section2







 /* <Grid item xs={12} sm={6} md={5} lg={4}>
                <FormControl sx={{width:"76%",pt:1}}>
                    <InputLabel id="select-helper-label">Types of physical disability</InputLabel>
                    <Select
                        labelId="select-helper-label1"                 
                        name="നൂതന_കൃഷി_രീതികൾ"
                        size='small'
                        sx={{p:.5}} 
                        defaultValue=""
                    >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="">മാനസീക വൈകല്യങ്ങൾ</MenuItem>
                        <MenuItem value="">ശാരീരിക വൈകല്യങ്ങൾ</MenuItem>
                        <MenuItem value="">ബുദ്ധിപരമായ വൈകല്യങ്ങൾ</MenuItem>
                        <MenuItem value="">ഇന്ദ്രിയപരമായ വൈകല്യങ്ങൾ </MenuItem>
                        <MenuItem value="">മറ്റുള്ളവ</MenuItem>
                    </Select>
                    <FormHelperText>ഉണ്ടെങ്കിൽ ഏത്?</FormHelperText>
                </FormControl>           
                </Grid> */  

                /* <Grid item xs={12} sm={6} md={5} lg={4}>
            <TextField
            label="Farming(Type)"
            name="നില_തരിശ്ശ്"
            helperText="നിലം - കൃഷി ചെയ്യുന്നുണ്ടെങ്കിൽ ഏത്? " 
            size='small'/>
            </Grid>  in the google form it is present and not in the new data sheet*/
