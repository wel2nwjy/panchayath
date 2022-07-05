
function sendDataSection2(assignValues,textData,selectData,radioData){
   
    assignValues.ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ_അല്ലെ= textData.ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ_അല്ലെ;
    assignValues.പുരയിടം_സർവ്വേ_നമ്പർ= textData.പുരയിടം_സർവ്വേ_നമ്പർ ;
    assignValues.പുരയിടം_വിസ്തീർണം = textData.പുരയിടം_വിസ്തീർണം;
    assignValues.പുരയിട_കൃഷി= textData.പുരയിട_കൃഷി
    assignValues.നില_സർവ്വേ_നമ്പർ= textData.നില_സർവ്വേ_നമ്പർ;
    assignValues.നില_സെൻറ്= textData.നില_സെൻറ്
   
    assignValues.ഏത്_മാരക_രോഗങ്ങൾ= selectData.ഏത്_മാരക_രോഗങ്ങൾ;
    assignValues.ഏത്_ജീവിത_ശൈലീ_രോഗങ്ങൾ= selectData.ഏത്_ജീവിത_ശൈലീ_രോഗങ്ങൾ
    assignValues.ഏത്_ചികിത്= selectData.ഏത്_ചികിത്
    assignValues.നൂതന_കൃഷി_രീതികൾ= selectData.നൂതന_കൃഷി_രീതികൾ

    assignValues.കിടപ്പു_രോഗികൾ_ഉണ്ടോ=radioData.കിടപ്പു_രോഗികൾ_ഉണ്ടോ
    assignValues.വൈകല്യം_ഉണ്ടോ= radioData.വൈകല്യം_ഉണ്ടോ
    assignValues.മാരക_രോഗങ്ങൾ_ഉണ്ടോ= radioData.മാരക_രോഗങ്ങൾ_ഉണ്ടോ
    assignValues.ജീവിത_ശൈലീ_രോഗങ്ങൾ= radioData.ജീവിത_ശൈലീ_രോഗങ്ങൾ
    assignValues.രോഗത്തിന്_ചികിത്സ_എവിടെ= radioData.രോഗത്തിന്_ചികിത്സ_എവിടെ
    assignValues.ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ= radioData.ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ
    assignValues.സ്വന്തമായി_ഭൂമി_ഉണ്ടോ= radioData.സ്വന്തമായി_ഭൂമി_ഉണ്ടോ
    assignValues.പട്ടയം= radioData.പട്ടയം
    assignValues.പുരയിട_കൃഷി_ഉണ്ടോ= radioData.പുരയിട_കൃഷി_ഉണ്ടോ
    assignValues.പുരയിടം_തരിശ്ശ്= radioData.പുരയിടം_തരിശ്ശ്
    assignValues.നില_കൃഷി_ഉണ്ടോ= radioData.നില_കൃഷി_ഉണ്ടോ
    assignValues.നില_തരിശ്ശ്= radioData.നില_തരിശ്ശ്
   
   
    return assignValues;
}

export default sendDataSection2;