
function sendDataSections(type,sendDatatoDb,dataToAssign){ 

    switch (type) {
        case 1:
            return assignSection1(sendDatatoDb,dataToAssign);
        case 2:
            return assignSection2(sendDatatoDb,dataToAssign);
        case 3:
            return assignSection3(sendDatatoDb,dataToAssign);      
        default:
            return sendDatatoDb;               
      }
}

export default sendDataSections;


function assignSection1(existingValues,newValues){
      //========================Text Values=========================================
   
      existingValues.കോഡ്= newValues.കോഡ്;
      existingValues.വാർഡിൻ്റെ_പേര്= newValues.വാർഡിൻ്റെ_പേര് ;
      existingValues.വാർഡ്_നമ്പർ = newValues.വാർഡ്_നമ്പർ;
      existingValues.കുടുംബനാഥൻ്റെ_പേര്= newValues.കുടുംബനാഥൻ്റെ_പേര്
      existingValues.വയസ്സ്_ജനന_തീയ്യതി= newValues.വയസ്സ്_ജനന_തീയ്യതി;
      existingValues.വില്ലേജ്= newValues.വില്ലേജ്
      existingValues.മേൽവിലാസം= newValues.മേൽവിലാസം
      existingValues.പിൻ_കോഡ്= newValues.പിൻ_കോഡ്
      existingValues.ഫോൺ_നമ്പർ= newValues.ഫോൺ_നമ്പർ
      existingValues.ഇമെയിൽ_ഐ_ഡി= newValues.ഇമെയിൽ_ഐ_ഡി
      existingValues.റേഷൻ_കാർഡ്_നമ്പർ= newValues.റേഷൻ_കാർഡ്_നമ്പർ
      existingValues.കോളനിയുടെ_പേര്= newValues.കോളനിയുടെ_പേര്    
      existingValues.വീടിൻ്റെ_കാലപ്പഴക്കം= newValues.വീടിൻ്റെ_കാലപ്പഴക്കം
      existingValues.വിസ്തീർണ്ണം_ഒന്നാം= newValues.വിസ്തീർണ്ണം_ഒന്നാം
      existingValues.വിസ്തീർണ്ണം_രണ്ടാം= newValues.വിസ്തീർണ്ണം_രണ്ടാം
      existingValues.വിസ്തീർണ്ണം_മൂന്നാം= newValues.വിസ്തീർണ്ണം_മൂന്നാം
      existingValues.വിസ്തീർണ്ണം_മൂന്നിനും_മുകളിൽ= newValues.വിസ്തീർണ്ണം_മൂന്നിനും_മുകളിൽ
      existingValues.സൈക്കിൾ= newValues.സൈക്കിൾ
      existingValues.മോട്ടോർ_സൈക്കിൾ= newValues.മോട്ടോർ_സൈക്കിൾ
      existingValues.ഓട്ടോറിക്ഷ= newValues.ഓട്ടോറിക്ഷ
      existingValues.കാർ= newValues.കാർ
      existingValues.ഭാരവാഹനം= newValues.ഭാരവാഹനം
  
      //====================Select Values=================================================================
      
      existingValues.റേഷൻ_കാർഡ്= newValues.റേഷൻ_കാർഡ്
      existingValues.റേഷൻ_കാർഡിൻ്റെ_തരം= newValues.റേഷൻ_കാർഡിൻ്റെ_തരം
      existingValues.മതം= newValues.മതം;
      existingValues.ജാതി= newValues.ജാതി;
      existingValues.താമസം = newValues.താമസം;    
      existingValues.കുടുംബാംഗങ്ങളുടെ_എണ്ണം= newValues.കുടുംബാംഗങ്ങളുടെ_എണ്ണം
      existingValues.പുരുഷന്മാർ= newValues.പുരുഷന്മാർ
      existingValues.സ്ത്രീകൾ= newValues.സ്ത്രീകൾ
      existingValues.കുട്ടികൾ= newValues.കുട്ടികൾ
      existingValues.തൊഴിൽ= newValues.തൊഴിൽ
      existingValues.വീടിൻ്റെ_അവസ്ഥ= newValues.വീടിൻ്റെ_അവസ്ഥ
      existingValues.വീടിൻ്റെ_തരം= newValues.വീടിൻ്റെ_തരം
      existingValues.നിലകളുടെ_എണ്ണം= newValues.നിലകളുടെ_എണ്ണം
      existingValues.തറ= newValues.തറ
      existingValues.ഭവന_നിർമ്മാണം= newValues.ഭവന_നിർമ്മാണം
      existingValues.പ്രധാന_അടുപ്പ്= newValues.പ്രധാന_അടുപ്പ്
      existingValues.കുടി_വെള്ളത്തിനുള്ള_സൗകര്യം= newValues.കുടി_വെള്ളത്തിനുള്ള_സൗകര്യം
      existingValues.വെള്ളത്തിൻ്റെ_ഗുണ= newValues.വെള്ളത്തിൻ്റെ_ഗുണ
      existingValues.ലാട്രിൻ= newValues.ലാട്രിൻ
      existingValues.മാലിന്_നിർമാർജ്ജനംയ= newValues.മാലിന്_നിർമാർജ്ജനംയ
  
      //========================Radio Values================================================
  
      existingValues.ബാങ്ക്_അക്കൗണ്ട്= newValues.ബാങ്ക്_അക്കൗണ്ട്
      existingValues.സ്വന്തമായി_വീട്= newValues.സ്വന്തമായി_വീട്
      existingValues.വാസയോഗ്യമാക്കുന്നതിന്_താത്പര്യം= newValues.വാസയോഗ്യമാക്കുന്നതിന്_താത്പര്യം
      existingValues.വൈദ്യുതി= newValues.വൈദ്യുതി
      existingValues.ബയോ_ഗ്യാസ്_താത്പര്യം= newValues.ബയോ_ഗ്യാസ്_താത്പര്യം
      existingValues.സോളാർ_താത്പര്= newValues.സോളാർ_താത്പര്
      existingValues.കുടിവെള്ള_പ്രശ്നം_ഉണ്ടോ= newValues.കുടിവെള്ള_പ്രശ്നം_ഉണ്ടോ
      existingValues.കിണർ= newValues.കിണർ
      existingValues.വറ്റുന്നത്_മാസം= newValues.വറ്റുന്നത്_മാസം
      existingValues.കിണർ_റീചാർജിങ്= newValues.കിണർ_റീചാർജിങ്
      existingValues.കിണറിൻ്റെ_ഭിത്തി= newValues.കിണറിൻ്റെ_ഭിത്തി
      existingValues.മഴവെള്ള_താത്പര= newValues.മഴവെള്ള_താത്പര
      existingValues.മഴവെള്ള_താത്പര്യം= newValues.മഴവെള്ള_താത്പര്യം
      existingValues.വാഹനം= newValues.വാഹനം
      existingValues.മാലിന്യ_ആവശ്യം_ഉണ്ടോ= newValues.മാലിന്യ_ആവശ്യം_ഉണ്ടോ
  
      return existingValues;
}


function assignSection2(existingValues,newValues){
    existingValues.ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ_അല്ലെ= newValues.ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ_അല്ലെ;
    existingValues.പുരയിടം_സർവ്വേ_നമ്പർ= newValues.പുരയിടം_സർവ്വേ_നമ്പർ ;
    existingValues.പുരയിടം_വിസ്തീർണം = newValues.പുരയിടം_വിസ്തീർണം;
    existingValues.പുരയിട_കൃഷി= newValues.പുരയിട_കൃഷി
    existingValues.നില_സർവ്വേ_നമ്പർ= newValues.നില_സർവ്വേ_നമ്പർ;
    existingValues.നില_സെൻറ്= newValues.നില_സെൻറ്
   
    existingValues.ഏത്_മാരക_രോഗങ്ങൾ= newValues.ഏത്_മാരക_രോഗങ്ങൾ;
    existingValues.ഏത്_ജീവിത_ശൈലീ_രോഗങ്ങൾ= newValues.ഏത്_ജീവിത_ശൈലീ_രോഗങ്ങൾ
    existingValues.ഏത്_ചികിത്= newValues.ഏത്_ചികിത്
    existingValues.നൂതന_കൃഷി_രീതികൾ= newValues.നൂതന_കൃഷി_രീതികൾ

    existingValues.കിടപ്പു_രോഗികൾ_ഉണ്ടോ=newValues.കിടപ്പു_രോഗികൾ_ഉണ്ടോ
    existingValues.വൈകല്യം_ഉണ്ടോ= newValues.വൈകല്യം_ഉണ്ടോ
    existingValues.മാരക_രോഗങ്ങൾ_ഉണ്ടോ= newValues.മാരക_രോഗങ്ങൾ_ഉണ്ടോ
    existingValues.ജീവിത_ശൈലീ_രോഗങ്ങൾ= newValues.ജീവിത_ശൈലീ_രോഗങ്ങൾ
    existingValues.രോഗത്തിന്_ചികിത്സ_എവിടെ= newValues.രോഗത്തിന്_ചികിത്സ_എവിടെ
    existingValues.ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ= newValues.ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ
    existingValues.സ്വന്തമായി_ഭൂമി_ഉണ്ടോ= newValues.സ്വന്തമായി_ഭൂമി_ഉണ്ടോ
    existingValues.പട്ടയം= newValues.പട്ടയം
    existingValues.പുരയിട_കൃഷി_ഉണ്ടോ= newValues.പുരയിട_കൃഷി_ഉണ്ടോ
    existingValues.പുരയിടം_തരിശ്ശ്= newValues.പുരയിടം_തരിശ്ശ്
    existingValues.നില_കൃഷി_ഉണ്ടോ= newValues.നില_കൃഷി_ഉണ്ടോ
    existingValues.നില_തരിശ്ശ്= newValues.നില_തരിശ്ശ്

    return existingValues
}

function assignSection3(existingValues,newValues){
    
    existingValues.തെങ്ങ്= newValues.തെങ്ങ് ;
    existingValues.കൗങ്ങ് = newValues.കൗങ്ങ്;
    existingValues.വാഴ= newValues.വാഴ
    existingValues.ജാതി_വിള= newValues.ജാതി_വിള;
    existingValues.റബ്ബർ= newValues.റബ്ബർ
    existingValues.പച്ചക്കറി_മറ്റുള്ളവ= newValues.പച്ചക്കറി_മറ്റുള്ളവ
    existingValues.പച്ചക്കറി_തോട്ടം= newValues.പച്ചക്കറി_തോട്ടം
    existingValues.പച്ചക്കറി_സെൻറ്= newValues.പച്ചക്കറി_സെൻറ്
    existingValues.കിഴങ്ങ്= newValues.കിഴങ്ങ്
    existingValues.പശു= newValues.പശു
    existingValues.മറ്റുള്ളവ_മൃഗ= newValues.മറ്റുള്ളവ_മൃഗ    
    existingValues.താറാവ്= newValues.താറാവ്
    existingValues.കോഴി= newValues.കോഴി
    existingValues.ആട്= newValues.ആട്
    existingValues.എരുമ= newValues.എരുമ
    existingValues.ഓമന_മൃഗ_ഏത്= newValues.ഓമന_മൃഗ_ഏത്
    existingValues.സഭകളിൽ_പങ്കെടുക്കാറില്ലെങ്കിൽ= newValues.സഭകളിൽ_പങ്കെടുക്കാറില്ലെങ്കിൽ
    existingValues.പമ്പ്_സെറ്റ്_hp= newValues.പമ്പ്_സെറ്റ്_hp
    
    
    existingValues.കൃഷി_രീതികൾ= newValues.കൃഷി_രീതികൾ;
    existingValues.നൂതന_കൃഷി_രീതികൾ= newValues.നൂതന_കൃഷി_രീതികൾ
    existingValues.ജലസേചന_മാർഗം= newValues.ജലസേചന_മാർഗം
    existingValues.കൃഷി_സംഘമായി_താത്പര്യം= newValues.കൃഷി_സംഘമായി_താത്പര്യം
    existingValues.മത്സ്യ_കൃഷി= newValues.മത്സ്യ_കൃഷി
    existingValues.സാമൂഹിക_പങ്കാളിത്തം= newValues.സാമൂഹിക_പങ്കാളിത്തം
    existingValues.പെൻഷൻ= newValues.പെൻഷൻ
    existingValues.ഇൻഷുറൻസ്= newValues.ഇൻഷുറൻസ്
    existingValues.സഹായ_സംരംഭം= newValues.സഹായ_സംരംഭം

    existingValues.നൂതന_കൃഷി_താത്പര്യം= newValues.നൂതന_കൃഷി_താത്പര്യം
    existingValues.ജലസേചന_സൗകര്യം= newValues.ജലസേചന_സൗകര്യം
    existingValues.പമ്പ്_സെറ്റ്= newValues.പമ്പ്_സെറ്റ്
    existingValues.കൃഷി_സംഘമായി_താത്പര്യം= newValues.കൃഷി_സംഘമായി_താത്പര്യം
    existingValues.ഓമന_മൃഗ= newValues.ഓമന_മൃഗ
    existingValues.മത്സ്യ_കൃഷി_ഉണ്ടോ= newValues.മത്സ്യ_കൃഷി_ഉണ്ടോ
    existingValues.മൃഗ_പരിപാല_താത്പര്യമ= newValues.മൃഗ_പരിപാല_താത്പര്യമ
    existingValues.സ്വയം_സാമൂഹിക_പങ്കാളിത്_താത്പര്യമ= newValues.സ്വയം_സാമൂഹിക_പങ്കാളിത്_താത്പര്യമ
    existingValues.ടൂറിസം_ഹോംസ്റ്റേ_താത്പര്യം= newValues.ടൂറിസം_ഹോംസ്റ്റേ_താത്പര്യം
    existingValues.സഭകളിൽ_പങ്കെടുക്കാറുണ്ടോ= newValues.സഭകളിൽ_പങ്കെടുക്കാറുണ
    
    return existingValues
}