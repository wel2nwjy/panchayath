

function sendDataSection1(assignValues,textData,selectData,radioData){     
   
    assignValues.കോഡ്= textData.കോഡ്;
    assignValues.വാർഡിൻ്റെ_പേര്= textData.വാർഡിൻ്റെ_പേര് ;
    assignValues.വാർഡ്_നമ്പർ = textData.വാർഡ്_നമ്പർ;
    assignValues.കുടുംബനാഥൻ്റെ_പേര്= textData.കുടുംബനാഥൻ്റെ_പേര്
    assignValues.വയസ്സ്_ജനന_തീയ്യതി= textData.വയസ്സ്_ജനന_തീയ്യതി;
    assignValues.വില്ലേജ്= textData.വില്ലേജ്
    assignValues.മേൽവിലാസം= textData.മേൽവിലാസം
    assignValues.പിൻ_കോഡ്= textData.പിൻ_കോഡ്
    assignValues.ഫോൺ_നമ്പർ= textData.ഫോൺ_നമ്പർ
    assignValues.ഇമെയിൽ_ഐ_ഡി= textData.ഇമെയിൽ_ഐ_ഡി
    assignValues.റേഷൻ_കാർഡ്_നമ്പർ= textData.റേഷൻ_കാർഡ്_നമ്പർ
    assignValues.കോളനിയുടെ_പേര്= textData.കോളനിയുടെ_പേര്    
    assignValues.വീടിൻ്റെ_കാലപ്പഴക്കം= textData.വീടിൻ്റെ_കാലപ്പഴക്കം
    assignValues.വിസ്തീർണ്ണം_ഒന്നാം= textData.വിസ്തീർണ്ണം_ഒന്നാം
    assignValues.വിസ്തീർണ്ണം_രണ്ടാം= textData.വിസ്തീർണ്ണം_രണ്ടാം
    assignValues.വിസ്തീർണ്ണം_മൂന്നാം= textData.വിസ്തീർണ്ണം_മൂന്നാം
    assignValues.വിസ്തീർണ്ണം_മൂന്നിനും_മുകളിൽ= textData.വിസ്തീർണ്ണം_മൂന്നിനും_മുകളിൽ
    assignValues.സൈക്കിൾ= textData.സൈക്കിൾ
    assignValues.മോട്ടോർ_സൈക്കിൾ= textData.മോട്ടോർ_സൈക്കിൾ
    assignValues.ഓട്ടോറിക്ഷ= textData.ഓട്ടോറിക്ഷ
    assignValues.കാർ= textData.കാർ
    assignValues.ഭാരവാഹനം= textData.ഭാരവാഹനം
    
    assignValues.റേഷൻ_കാർഡ്= selectData.റേഷൻ_കാർഡ്
    assignValues.റേഷൻ_കാർഡിൻ്റെ_തരം= selectData.റേഷൻ_കാർഡിൻ്റെ_തരം
    assignValues.മതം= selectData.മതം;
    assignValues.ജാതി= selectData.ജാതി;
    assignValues.താമസം = selectData.താമസം;    
    assignValues.കുടുംബാംഗങ്ങളുടെ_എണ്ണം= selectData.കുടുംബാംഗങ്ങളുടെ_എണ്ണം
    assignValues.പുരുഷന്മാർ= selectData.പുരുഷന്മാർ
    assignValues.സ്ത്രീകൾ= selectData.സ്ത്രീകൾ
    assignValues.കുട്ടികൾ= selectData.കുട്ടികൾ
    assignValues.തൊഴിൽ= selectData.തൊഴിൽ
    assignValues.വീടിൻ്റെ_അവസ്ഥ= selectData.വീടിൻ്റെ_അവസ്ഥ
    assignValues.വീടിൻ്റെ_തരം= selectData.വീടിൻ്റെ_തരം
    assignValues.നിലകളുടെ_എണ്ണം= selectData.നിലകളുടെ_എണ്ണം
    assignValues.തറ= selectData.തറ
    assignValues.ഭവന_നിർമ്മാണം= selectData.ഭവന_നിർമ്മാണം
    assignValues.പ്രധാന_അടുപ്പ്= selectData.പ്രധാന_അടുപ്പ്
    assignValues.കുടി_വെള്ളത്തിനുള്ള_സൗകര്യം= selectData.കുടി_വെള്ളത്തിനുള്ള_സൗകര്യം
    assignValues.വെള്ളത്തിൻ്റെ_ഗുണ= selectData.വെള്ളത്തിൻ്റെ_ഗുണ
    assignValues.ലാട്രിൻ= selectData.ലാട്രിൻ
    assignValues.മാലിന്_നിർമാർജ്ജനംയ= selectData.മാലിന്_നിർമാർജ്ജനംയ

    assignValues.ബാങ്ക്_അക്കൗണ്ട്= radioData.ബാങ്ക്_അക്കൗണ്ട്
    assignValues.സ്വന്തമായി_വീട്= radioData.സ്വന്തമായി_വീട്
    assignValues.വാസയോഗ്യമാക്കുന്നതിന്_താത്പര്യം= radioData.വാസയോഗ്യമാക്കുന്നതിന്_താത്പര്യം
    assignValues.വൈദ്യുതി= radioData.വൈദ്യുതി
    assignValues.ബയോ_ഗ്യാസ്_താത്പര്യം= radioData.ബയോ_ഗ്യാസ്_താത്പര്യം
    assignValues.സോളാർ_താത്പര്= radioData.സോളാർ_താത്പര്
    assignValues.കുടിവെള്ള_പ്രശ്നം_ഉണ്ടോ= radioData.കുടിവെള്ള_പ്രശ്നം_ഉണ്ടോ
    assignValues.കിണർ= radioData.കിണർ
    assignValues.വറ്റുന്നത്_മാസം= radioData.വറ്റുന്നത്_മാസം
    assignValues.കിണർ_റീചാർജിങ്= radioData.കിണർ_റീചാർജിങ്
    assignValues.കിണറിൻ്റെ_ഭിത്തി= radioData.കിണറിൻ്റെ_ഭിത്തി
    assignValues.മഴവെള്ള_താത്പര= radioData.മഴവെള്ള_താത്പര
    assignValues.മഴവെള്ള_താത്പര്യം= radioData.മഴവെള്ള_താത്പര്യം
    assignValues.വാഹനം= radioData.വാഹനം
    assignValues.മാലിന്യ_ആവശ്യം_ഉണ്ടോ= radioData.മാലിന്യ_ആവശ്യം_ഉണ്ടോ
    

    return assignValues;
}

export default sendDataSection1;