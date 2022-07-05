const express = require('express');
const moment=require("moment");
const excelJS = require("exceljs");
const jwt = require("jsonwebtoken");
const Person = require("../models/panchayath");
const downloadRouter = express.Router();
const workbook = new excelJS.Workbook();

//====================================================================================================//

const headerValueWT =
[
  { header: "S no.", key: "s_no", width: 10 },
  { header: "കോഡ്", key: "കോഡ്", width: 20 },
  { header: "വാർഡിൻ്റെ പേര്", key: "വാർഡിൻ്റെ_പേര്", width: 20 },
  { header: "കുടുംബനാഥൻ്റെ പേര്", key: "കുടുംബനാഥൻ്റെ_പേര്", width: 20 },
  { header: "മേൽവിലാസം", key: "മേൽവിലാസം", width: 20 },
  { header: "ഫോൺ നമ്പർ", key: "ഫോൺ_നമ്പർ", width: 20 },
  { header: "വില്ലേജ്", key: "വില്ലേജ്", width: 20 },
  { header: "വാർഡ്_നമ്പർ ", key : "വാർഡ്_നമ്പർ" , width : 20 },
  { header: "വയസ്സ്_ജനന_തീയ്യതി ", key : "വയസ്സ്_ജനന_തീയ്യതി" , width : 20 },
  { header: "ഫോൺ_നമ്പർ ", key : "ഫോൺ_നമ്പർ" , width : 20},
  { header: "ഇമെയിൽ_ഐ_ഡി ", key : "ഇമെയിൽ_ഐ_ഡി" , width : 20},
  { header: "പിൻ_കോഡ് ", key : "പിൻ_കോഡ്" , width : 20 },
  { header: "റേഷൻ_കാർഡ് ", key : "റേഷൻ_കാർഡ്" , width : 20 },
  { header: "റേഷൻ_കാർഡിൻ്റെ_തരം ", key : "റേഷൻ_കാർഡിൻ്റെ_തരം" , width : 20 },
  { header: "റേഷൻ_കാർഡ്_നമ്പർ ", key : "റേഷൻ_കാർഡ്_നമ്പർ" , width : 20},
  { header: "മതം ", key : "മതം" , width : 20},
  { header: "ജാതി ", key : "ജാതി" , width : 20 },
  { header: "താമസം ", key : "താമസം" , width : 20 },
  { header: "കോളനിയുടെ_പേര് ", key : "കോളനിയുടെ_പേര്" , width : 20 },
  { header: "ബാങ്ക്_അക്കൗണ്ട് ", key : "ബാങ്ക്_അക്കൗണ്ട്" , width : 20 },
  { header: "തൊഴിൽ ", key : "തൊഴിൽ" , width : 20},
  { header: "കുടുംബാംഗങ്ങളുടെ_എണ്ണം ", key : "കുടുംബാംഗങ്ങളുടെ_എണ്ണം" , width : 20},
  { header: "പുരുഷന്മാർ ", key : "പുരുഷന്മാർ" , width : 20 },
  { header: "സ്ത്രീകൾ ", key : "സ്ത്രീകൾ" , width : 20 },
  { header: "കുട്ടികൾ ", key : "കുട്ടികൾ" , width : 20 },
  { header: "സ്വന്തമായി_വീട് ", key : "സ്വന്തമായി_വീട്" , width : 20 },
  { header: "വീടിൻ്റെ_കാലപ്പഴക്കം ", key : "വീടിൻ്റെ_കാലപ്പഴക്കം" , width : 20},
  { header: "വീടിൻ്റെ_അവസ്ഥ ", key : "വീടിൻ്റെ_അവസ്ഥ" , width : 20},
  { header: "വീടിൻ്റെ_തരം ", key : "വീടിൻ്റെ_തരം" , width : 20 },
  { header: "നിലകളുടെ_എണ്ണം ", key : "നിലകളുടെ_എണ്ണം" , width : 20 },
  { header: "തറ ", key : "തറ" , width : 20 },
  { header: "വിസ്തീർണ്ണം_ഒന്നാം ", key : "വിസ്തീർണ്ണം_ഒന്നാം" , width : 20 },
  { header: "വിസ്തീർണ്ണം_രണ്ടാം ", key : "വിസ്തീർണ്ണം_രണ്ടാം" , width : 20},
  { header: "വിസ്തീർണ്ണം_മൂന്നാം ", key : "വിസ്തീർണ്ണം_മൂന്നാം" , width : 20},
  { header: "വിസ്തീർണ്ണം_മൂന്നിനും_മുകളിൽ ", key : "വിസ്തീർണ്ണം_മൂന്നിനും_മുകളിൽ" , width : 20},
  { header: "ഭവന_നിർമ്മാണം  ", key : "ഭവന_നിർമ്മാണം" , width : 20 },
  { header: "വാസയോഗ്യമാക്കുന്നതിന്_താത്പര്യം ", key : "വാസയോഗ്യമാക്കുന്നതിന്_താത്പര്യം" , width : 20 },
  { header: "വൈദ്യുതി ", key : "വൈദ്യുതി" , width : 20 },
  { header: "പ്രധാന_അടുപ്പ് ", key : "പ്രധാന_അടുപ്പ്" , width : 20},
  { header: "ബയോ_ഗ്യാസ്_താത്പര്യം ", key : "ബയോ_ഗ്യാസ്_താത്പര്യം" , width : 20},
  { header: "സോളാർ_താത്പര് ", key : "സോളാർ_താത്പര്" , width : 20 },
  { header: "കുടിവെള്ള_പ്രശ്നം_ഉണ്ടോ ", key : "കുടിവെള്ള_പ്രശ്നം_ഉണ്ടോ" , width : 20 },
  { header: "കുടി_വെള്ളത്തിനുള്ള_സൗകര്യം ", key : "കുടി_വെള്ളത്തിനുള്ള_സൗകര്യം" , width : 20 },
  { header: "കിണർ", key : "കിണർ" , width : 20 },
  { header: "വറ്റുന്നത്_മാസം ", key : "വറ്റുന്നത്_മാസം" , width : 20},
  { header: "കിണർ_റീചാർജിങ് ", key : "കിണർ_റീചാർജിങ്" , width : 20},
  { header: "കിണറിൻ്റെ_ഭിത്തി ", key : "കിണറിൻ്റെ_ഭിത്തി" , width : 20 },
  { header: "വെള്ളത്തിൻ്റെ_ഗുണ ", key : "വെള്ളത്തിൻ്റെ_ഗുണ" , width : 20 },
  { header: "മഴവെള്ള_താത്പര്യം ", key : "മഴവെള്ള_താത്പര്യം" , width : 20 },
  { header: "വാഹനം ", key : "വാഹനം" , width : 20 },
  { header: "സൈക്കിൾ ", key : "സൈക്കിൾ" , width : 20},
  { header: "മോട്ടോർ_സൈക്കിൾ ", key : "മോട്ടോർ_സൈക്കിൾ" , width : 20},
  { header: "ഓട്ടോറിക്ഷ ", key : "ഓട്ടോറിക്ഷ" , width : 20 },
  { header: "കാർ ", key : "കാർ" , width : 20 },
  { header: "ഭാരവാഹനം ", key : "ഭാരവാഹനം" , width : 20 },
  { header: "ലാട്രിൻ ", key : "ലാട്രിൻ" , width : 20 },
  { header: "മാലിന്_നിർമാർജ്ജനംയ ", key : "മാലിന്_നിർമാർജ്ജനംയ" , width : 20},
  { header: "മാലിന്യ_ആവശ്യം_ഉണ്ടോ ", key : "മാലിന്യ_ആവശ്യം_ഉണ്ടോ" , width : 20},
  { header: "കിടപ്പു_രോഗികൾ_ഉണ്ടോ ", key : "കിടപ്പു_രോഗികൾ_ഉണ്ടോ" , width : 20},
  { header: "വൈകല്യം_ഉണ്ടോ ", key : "വൈകല്യം_ഉണ്ടോ" , width : 20 },
  { header: "മാരക_രോഗങ്ങൾ_ഉണ്ടോ ", key : "മാരക_രോഗങ്ങൾ_ഉണ്ടോ" , width : 20 },
  { header: "ഏത്_മാരക_രോഗങ്ങൾ ", key : "ഏത്_മാരക_രോഗങ്ങൾ" , width : 20 },
  { header: "ജീവിത_ശൈലീ_രോഗങ്ങൾ ", key : "ജീവിത_ശൈലീ_രോഗങ്ങൾ" , width : 20},
  { header: "ഏത്_ജീവിത_ശൈലീ_രോഗങ്ങൾ ", key : "ഏത്_ജീവിത_ശൈലീ_രോഗങ്ങൾ" , width : 20},
{ header: "രോഗത്തിന്_ചികിത്സ_എവിടെ ", key : "രോഗത്തിന്_ചികിത്സ_എവിടെ" , width : 20},
  { header: "ഏത്_ചികിത് ", key : "ഏത്_ചികിത്" , width : 20},        
  { header: "ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ ", key : "ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ" , width : 20 },
  { header: "ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ_അല്ലെ ", key : "ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ_അല്ലെ" , width : 20 },
  { header: "സ്വന്തമായി_ഭൂമി_ഉണ്ടോ ", key : "സ്വന്തമായി_ഭൂമി_ഉണ്ടോ" , width : 20},        
  { header: "പട്ടയം ", key : "പട്ടയം" , width : 20 },
  { header: "പുരയിടം_സർവ്വേ_നമ്പർ ", key : "പുരയിടം_സർവ്വേ_നമ്പർ" , width : 20 },
  { header: "പുരയിടം_വിസ്തീർണം ", key : "പുരയിടം_വിസ്തീർണം" , width : 20},
  { header: "പുരയിട_കൃഷി_ഉണ്ടോ ", key : "പുരയിട_കൃഷി_ഉണ്ടോ" , width : 20},
  { header: "പുരയിട_കൃഷി ", key : "പുരയിട_കൃഷി" , width : 20},
  { header: "പുരയിടം_തരിശ്ശ് ", key : "പുരയിടം_തരിശ്ശ്" , width : 20 },
  { header: "നില_സർവ്വേ_നമ്പർ ", key : "നില_സർവ്വേ_നമ്പർ" , width : 20},
  { header: "നില_സെൻറ് ", key : "നില_സെൻറ്" , width : 20 },
  { header: "നില_കൃഷി_ഉണ്ടോ ", key : "നില_കൃഷി_ഉണ്ടോ" , width : 20 },
  { header: "നില_തരിശ്ശ് ", key : "നില_തരിശ്ശ്" , width : 20},        
  { header: "കൃഷി_രീതികൾ ", key : "കൃഷി_രീതികൾ" , width : 20 },
  { header: "തെങ്ങ് ", key : "തെങ്ങ്" , width : 20 },
  { header: "കൗങ്ങ് ", key : "കൗങ്ങ്" , width : 20 },
  { header: "വാഴ ", key : "വാഴ" , width : 20 },
  { header: "ജാതി_വിള ", key : "ജാതി_വിള" , width : 20},
  { header: "റബ്ബർ ", key : "റബ്ബർ" , width : 20},
  { header: "കിഴങ്ങ് ", key : "കിഴങ്ങ്" , width : 20 },
  { header: "പച്ചക്കറി_സെൻറ് ", key : "പച്ചക്കറി_സെൻറ്" , width : 20 },
  { header: "പച്ചക്കറി_തോട്ടം ", key : "പച്ചക്കറി_തോട്ടം" , width : 20 },
  { header: "പച്ചക്കറി_മറ്റുള്ളവ ", key : "പച്ചക്കറി_മറ്റുള്ളവ" , width : 20 },
  { header: "നൂതന_കൃഷി_രീതികൾ ", key : "നൂതന_കൃഷി_രീതികൾ" , width : 20},
  { header: "നൂതന_കൃഷി_താത്പര്യം ", key : "നൂതന_കൃഷി_താത്പര്യം" , width : 20},
  { header: "ജലസേചന_സൗകര്യം ", key : "ജലസേചന_സൗകര്യം" , width : 20 },
  { header: "ജലസേചന_മാർഗം ", key : "ജലസേചന_മാർഗം" , width : 20 },
  { header: "പമ്പ്_സെറ്റ് ", key : "പമ്പ്_സെറ്റ്" , width : 20 },
  { header: "പമ്പ്_സെറ്റ്_hp ", key : "പമ്പ്_സെറ്റ്_hp" , width : 20 },
  { header: "കൃഷി_സംഘമായി_താത്പര്യം ", key : "കൃഷി_സംഘമായി_താത്പര്യം" , width : 20},
  { header: "പശു ", key : "പശു" , width : 20},
  { header: "എരുമ ", key : "എരുമ" , width : 20 },
  { header: "ആട് ", key : "ആട്" , width : 20 },
  { header: "കോഴി ", key : "കോഴി" , width : 20 },
  { header: "താറാവ് ", key : "താറാവ്" , width : 20 },
  { header: "മറ്റുള്ളവ_മൃഗ ", key : "മറ്റുള്ളവ_മൃഗ" , width : 20},
  { header: "ഓമന_മൃഗ ", key : "ഓമന_മൃഗ" , width : 20},
  { header: "ഓമന_മൃഗ_ഏത് ", key : "ഓമന_മൃഗ_ഏത്" , width : 20},
  { header: "മത്സ്യ_കൃഷി ", key : "മത്സ്യ_കൃഷി" , width : 20 },
  { header: "മത്സ്യ_കൃഷി_ഉണ്ടോ ", key : "മത്സ്യ_കൃഷി_ഉണ്ടോ" , width : 20 },
  { header: "മൃഗ_പരിപാല_താത്പര്യമ ", key : "മൃഗ_പരിപാല_താത്പര്യമ" , width : 20 },
 { header: "സാമൂഹിക_പങ്കാളിത്തം ", key : "സാമൂഹിക_പങ്കാളിത്തം" , width : 20},
  { header: "സ്വയം_സാമൂഹിക_പങ്കാളിത്_താത്പര്യമ ", key : "സ്വയം_സാമൂഹിക_പങ്കാളിത്_താത്പര്യമ" , width : 20},
  { header: "സഹായ_സംരംഭം ", key : "സഹായ_സംരംഭം" , width : 20},
  { header: "പെൻഷൻ ", key : "പെൻഷൻ" , width : 20 },
  { header: "ഇൻഷുറൻസ് ", key : "ഇൻഷുറൻസ്" , width : 20 },
  { header: "ടൂറിസം_ഹോംസ്റ്റേ_താത്പര്യം ", key : "ടൂറിസം_ഹോംസ്റ്റേ_താത്പര്യം" , width : 20 },
  { header: "സഭകളിൽ_പങ്കെടുക്കാറുണ്ടോ ", key : "സഭകളിൽ_പങ്കെടുക്കാറുണ്ടോ" , width : 20},
  { header: "സഭകളിൽ_പങ്കെടുക്കാറില്ലെങ്കിൽ ", key : "സഭകളിൽ_പങ്കെടുക്കാറില്ലെങ്കിൽ" , width : 20},
  { header: "മറ്റു_തൊഴിലാളികൾ ", key : "മറ്റു_തൊഴിലാളികൾ" , width : 20 }
]

//===================================================================================================//

//===============verify Token==================
function verifyToken(req,res,next){
  
  const bearerHeader = req.headers["authorization"]
  //console.log(bearerHeader)
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(" ")
    const bearerToken= bearer[1]
    req.token=bearerToken
    next()
  }else{
    res.sendStatus(403)
  }

}


//Get All 
downloadRouter.get("/", async (req, res) => { 

  var now = new Date();
  
  let stringdate=moment(now).format('DD_MM_YY_hh_mm_sss')
  
  let tempFile="panchayath_"+stringdate+".xlsx";

    try { 
        const path = "./files";  // Path to download excel    
        const totalRecords= await Person.find().count();
        const lmtVal=100;
        let skipVal=0;
        let tempVal = Math.floor(totalRecords/lmtVal);
        const tempValue1 = totalRecords/lmtVal;
        if (tempValue1>0){
            tempVal++;
        }
// Looping through Each data
let counter = 1;
let xlPgCount =1;

for (let index = 0; index < tempVal; index++) {
                    let concatStr="("+(xlPgCount)+"-"+(xlPgCount+lmtVal-1)+")"
                    xlPgCount=xlPgCount+lmtVal
                    
                    let persons= await Person.find().sort("_id").skip(skipVal).limit(lmtVal);
                    let worksheet = workbook.addWorksheet("Panchayath data"+concatStr); // New Worksheet        
                 

                // Column for data in excel. key must match data key
                worksheet.columns = headerValueWT;
                    persons.forEach((oneMember) => {
                        oneMember.s_no = counter;
                    worksheet.addRow(oneMember); // Add data in worksheet
                    counter++;
                    });
                    // Making first line in excel bold
                    worksheet.getRow(1).eachCell((cell) => {
                    cell.font = { bold: true };
                    });

        skipVal+=lmtVal;
}
     

try {
  
  
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", `attachment; filename=${tempFile}`);
    
    return workbook.xlsx.write(res).then(() => {
      res.status(200);
    });
        } catch (err) {
            
            res.send({
            status: "error",
            message: "Something went wrong try again",
            });
        }


    } catch (err) {
      res.status(500).json("Something went wrong");
     console.log(err)
    }
  });

//===========================================================================================================

//Get view of fields
downloadRouter.get("/:search", async (req, res) => {
  const tempValueSearch=req.params.search;
  try {
    const persons = await Person.find({$or : [{"കുടുംബനാഥൻ്റെ_പേര്" : { $regex :"^" + tempValueSearch ,$options:'i' }}
                                             ,{"വാർഡ്_നമ്പർ" : { $regex : "^" + tempValueSearch ,$options:'i' }}
                                             , {"വാർഡിൻ്റെ_പേര്" : { $regex : "^" + tempValueSearch ,$options:'i' }}
                                             ,{"മേൽവിലാസം" : { $regex : "^" + tempValueSearch ,$options:'i' }}
                                             , {"ഫോൺ_നമ്പർ" : { $regex : "^" + tempValueSearch ,$options:'i' }}
                                             ,{"വില്ലേജ്" : { $regex : "^" + tempValueSearch ,$options:'i' }}
                                            ]});

    
    //{ $or: [ { quantity: { $lt: 20 } }, { price: 10 } + '.*'
    res.status(200).json(persons);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//Get for download data


  
module.exports = downloadRouter;


// { header: "വില്ലേജ്", key: "വില്ലേജ്", width: 20 }