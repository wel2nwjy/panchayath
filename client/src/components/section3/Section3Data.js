

function sendDataSection3(assignValues,textData,selectData,radioData){
 
    assignValues.തെങ്ങ്= textData.തെങ്ങ് ;
    assignValues.കൗങ്ങ് = textData.കൗങ്ങ്;
    assignValues.വാഴ= textData.വാഴ
    assignValues.ജാതി_വിള= textData.ജാതി_വിള;
    assignValues.റബ്ബർ= textData.റബ്ബർ
    assignValues.പച്ചക്കറി_മറ്റുള്ളവ= textData.പച്ചക്കറി_മറ്റുള്ളവ
    assignValues.പച്ചക്കറി_തോട്ടം= textData.പച്ചക്കറി_തോട്ടം
    assignValues.പച്ചക്കറി_സെൻറ്= textData.പച്ചക്കറി_സെൻറ്
    assignValues.കിഴങ്ങ്= textData.കിഴങ്ങ്
    assignValues.പശു= textData.പശു
    assignValues.മറ്റുള്ളവ_മൃഗ= textData.മറ്റുള്ളവ_മൃഗ    
    assignValues.താറാവ്= textData.താറാവ്
    assignValues.കോഴി= textData.കോഴി
    assignValues.ആട്= textData.ആട്
    assignValues.എരുമ= textData.എരുമ
    assignValues.ഓമന_മൃഗ_ഏത്= textData.ഓമന_മൃഗ_ഏത്
    assignValues.സഭകളിൽ_പങ്കെടുക്കാറില്ലെങ്കിൽ= textData.സഭകളിൽ_പങ്കെടുക്കാറില്ലെങ്കിൽ
    assignValues.പമ്പ്_സെറ്റ്_hp= textData.പമ്പ്_സെറ്റ്_hp
    
    
    assignValues.കൃഷി_രീതികൾ= selectData.കൃഷി_രീതികൾ;
    assignValues.നൂതന_കൃഷി_രീതികൾ= selectData.നൂതന_കൃഷി_രീതികൾ
    assignValues.ജലസേചന_മാർഗം= selectData.ജലസേചന_മാർഗം
    assignValues.കൃഷി_സംഘമായി_താത്പര്യം= selectData.കൃഷി_സംഘമായി_താത്പര്യം
    assignValues.മത്സ്യ_കൃഷി= selectData.മത്സ്യ_കൃഷി
    assignValues.സാമൂഹിക_പങ്കാളിത്തം= selectData.സാമൂഹിക_പങ്കാളിത്തം
    assignValues.പെൻഷൻ= selectData.പെൻഷൻ
    assignValues.ഇൻഷുറൻസ്= selectData.ഇൻഷുറൻസ്
    assignValues.സഹായ_സംരംഭം= selectData.സഹായ_സംരംഭം

    assignValues.നൂതന_കൃഷി_താത്പര്യം= radioData.നൂതന_കൃഷി_താത്പര്യം
    assignValues.ജലസേചന_സൗകര്യം= radioData.ജലസേചന_സൗകര്യം
    assignValues.പമ്പ്_സെറ്റ്= radioData.പമ്പ്_സെറ്റ്
    assignValues.കൃഷി_സംഘമായി_താത്പര്യം= radioData.കൃഷി_സംഘമായി_താത്പര്യം
    assignValues.ഓമന_മൃഗ= radioData.ഓമന_മൃഗ
    assignValues.മത്സ്യ_കൃഷി_ഉണ്ടോ= radioData.മത്സ്യ_കൃഷി_ഉണ്ടോ
    assignValues.മൃഗ_പരിപാല_താത്പര്യമ= radioData.മൃഗ_പരിപാല_താത്പര്യമ
    assignValues.സ്വയം_സാമൂഹിക_പങ്കാളിത്_താത്പര്യമ= radioData.സ്വയം_സാമൂഹിക_പങ്കാളിത്_താത്പര്യമ
    assignValues.ടൂറിസം_ഹോംസ്റ്റേ_താത്പര്യം= radioData.ടൂറിസം_ഹോംസ്റ്റേ_താത്പര്യം
    assignValues.സഭകളിൽ_പങ്കെടുക്കാറുണ്ടോ= radioData.സഭകളിൽ_പങ്കെടുക്കാറുണ്ടോ
   
    return assignValues;
}

export default sendDataSection3;