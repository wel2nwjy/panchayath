const mongoose = require("mongoose");

const PeopleSchema = new mongoose.Schema(
    {
        കോഡ്:{
            type:String,
            default: "",
        },
        വാർഡിൻ്റെ_പേര്:{
            type:String,
            default: "",
        },
        വാർഡ്_നമ്പർ: {
            type:String,
            default: "",
        },
        കുടുംബനാഥൻ്റെ_പേര്: {
            type:String,
            default: "",
        },
        മേൽവിലാസം: {
            type:String,
            default:""
        },
        വയസ്സ്_ജനന_തീയ്യതി: {
            type:String,
            default:""
        },
        ഫോൺ_നമ്പർ:{
            type:String,
            default: "",
        },
        ഇമെയിൽ_ഐ_ഡി:{
            type:String,
            default: "",
        },
        പിൻ_കോഡ്: {
            type:String,
            default: "",
        },
        വില്ലേജ്: {
            type:String,
            default: "",
        },
        റേഷൻ_കാർഡ്: {
            type:String,
            default:""
        },
        റേഷൻ_കാർഡിൻ്റെ_തരം: {
            type:String,
            default:""
        },
        റേഷൻ_കാർഡ്_നമ്പർ:{
            type:String,
            default: "",
        },
        മതം:{
            type:String,
            default: "",
        },
        ജാതി: {
            type:String,
            default: "",
        },
        താമസം: {
            type:String,
            default: "",
        },
        കോളനിയുടെ_പേര്: {
            type:String,
            default:""
        },
        ബാങ്ക്_അക്കൗണ്ട്: {
            type:String,
            default:""
        },
        തൊഴിൽ:{
            type:String,
            default: "",
        },
        കുടുംബാംഗങ്ങളുടെ_എണ്ണം:{
            type:String,
            default: "",
        },
        പുരുഷന്മാർ: {
            type:String,
            default: "",
        },
        സ്ത്രീകൾ: {
            type:String,
            default: "",
        },
        കുട്ടികൾ: {
            type:String,
            default:""
        },
        സ്വന്തമായി_വീട്: {
            type:String,
            default:""
        },
        വീടിൻ്റെ_കാലപ്പഴക്കം:{
            type:String,
            default: "",
        },
        വീടിൻ്റെ_അവസ്ഥ:{
            type:String,
            default: "",
        },
        വീടിൻ്റെ_തരം: {
            type:String,
            default: "",
        },
        നിലകളുടെ_എണ്ണം: {
            type:String,
            default: "",
        },
        തറ: {
            type:String,
            default:""
        },
        വിസ്തീർണ്ണം_ഒന്നാം: {
            type:String,
            default:""
        },
        വിസ്തീർണ്ണം_രണ്ടാം:{
            type:String,
            default: "",
        },
        വിസ്തീർണ്ണം_മൂന്നാം:{
            type:String,
            default: "",
        },
        വിസ്തീർണ്ണം_മൂന്നിനും_മുകളിൽ:{
            type:String,
            default: "",
        },
        ഭവന_നിർമ്മാണം : {
            type:String,
            default: "",
        },
        വാസയോഗ്യമാക്കുന്നതിന്_താത്പര്യം: {
            type:String,
            default:""
        },
        വൈദ്യുതി: {
            type:String,
            default:""
        },
        പ്രധാന_അടുപ്പ്:{
            type:String,
            default: "",
        },
        ബയോ_ഗ്യാസ്_താത്പര്യം:{
            type:String,
            default: "",
        },
        സോളാർ_താത്പര്: {
            type:String,
            default: "",
        },
        കുടിവെള്ള_പ്രശ്നം_ഉണ്ടോ: {
            type:String,
            default: "",
        },
        കുടി_വെള്ളത്തിനുള്ള_സൗകര്യം: {
            type:String,
            default:""
        },
        കിണർ: {
            type:String,
            default:""
        },
        വറ്റുന്നത്_മാസം:{
            type:String,
            default: "",
        },
        കിണർ_റീചാർജിങ്:{
            type:String,
            default: "",
        },
        കിണറിൻ്റെ_ഭിത്തി: {
            type:String,
            default: "",
        },
        വെള്ളത്തിൻ്റെ_ഗുണ: {
            type:String,
            default: "",
        },
        മഴവെള്ള_താത്പര്യം: {
            type:String,
            default:""
        },
        വാഹനം: {
            type:String,
            default:""
        },
        സൈക്കിൾ:{
            type:String,
            default: "",
        },
        മോട്ടോർ_സൈക്കിൾ:{
            type:String,
            default: "",
        },
        ഓട്ടോറിക്ഷ: {
            type:String,
            default: "",
        },
        കാർ: {
            type:String,
            default: "",
        },
        ഭാരവാഹനം: {
            type:String,
            default:""
        },
        ലാട്രിൻ: {
            type:String,
            default:""
        },
        മാലിന്_നിർമാർജ്ജനംയ:{
            type:String,
            default: "",
        },
        മാലിന്യ_ആവശ്യം_ഉണ്ടോ:{
            type:String,
            default: "",
        },
        കിടപ്പു_രോഗികൾ_ഉണ്ടോ:{
            type:String,
            default: "",
        },
        വൈകല്യം_ഉണ്ടോ: {
            type:String,
            default: "",
        },
        മാരക_രോഗങ്ങൾ_ഉണ്ടോ: {
            type:String,
            default:""
        },
        ഏത്_മാരക_രോഗങ്ങൾ: {
            type:String,
            default:""
        },
        ജീവിത_ശൈലീ_രോഗങ്ങൾ:{
            type:String,
            default: "",
        },
        ഏത്_ജീവിത_ശൈലീ_രോഗങ്ങൾ:{
            type:String,
            default: "",
        },
        രോഗത്തിന്_ചികിത്സ_എവിടെ:{
            type:String,
            default: "",
        },
        ഏത്_ചികിത്:{
            type:String,
            default: "",
        },
        ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ: {
            type:String,
            default: "",
        },
        ആരോഗ്യ_സേവനങ്ങളിൽ_തൃപ്തൻ_അല്ലെ: {
            type:String,
            default: "",
        },
        സ്വന്തമായി_ഭൂമി_ഉണ്ടോ:{
            type:String,
            default: "",
        },
        പട്ടയം: {
            type:String,
            default:""
        },
        പുരയിടം_സർവ്വേ_നമ്പർ: {
            type:String,
            default:""
        },
        പുരയിടം_വിസ്തീർണം:{
            type:String,
            default: "",
        },
        പുരയിട_കൃഷി:{
            type:String,
            default: "",
        },
        പുരയിടം_തരിശ്ശ്: {
            type:String,
            default: "",
        },
        നില_സർവ്വേ_നമ്പർ:{
            type:String,
            default: "",
        },
        നില_സെൻറ്: {
            type:String,
            default:""
        },
        നില_കൃഷി_ഉണ്ടോ: {
            type:String,
            default:""
        },
        നില_തരിശ്ശ്:{
            type:String,
            default: "",
        },
        പുരയിട_കൃഷി_ഉണ്ടോ:{
            type:String,
            default: "",
        },
        കൃഷി_രീതികൾ: {
            type:String,
            default: "",
        },
        തെങ്ങ്: {
            type:String,
            default: "",
        },
        കൗങ്ങ്: {
            type:String,
            default:""
        },
        വാഴ: {
            type:String,
            default:""
        },
        ജാതി_വിള:{
            type:String,
            default: "",
        },
        റബ്ബർ:{
            type:String,
            default: "",
        },
        കിഴങ്ങ്: {
            type:String,
            default: "",
        },
        പച്ചക്കറി_സെൻറ്: {
            type:String,
            default: "",
        },
        പച്ചക്കറി_തോട്ടം: {
            type:String,
            default:""
        },
        പച്ചക്കറി_മറ്റുള്ളവ: {
            type:String,
            default:""
        },
        നൂതന_കൃഷി_രീതികൾ:{
            type:String,
            default: "",
        },
        നൂതന_കൃഷി_താത്പര്യം:{
            type:String,
            default: "",
        },
        ജലസേചന_സൗകര്യം: {
            type:String,
            default: "",
        },
        ജലസേചന_മാർഗം: {
            type:String,
            default: "",
        },
        പമ്പ്_സെറ്റ്: {
            type:String,
            default:""
        },
        പമ്പ്_സെറ്റ്_hp: {
            type:String,
            default:""
        },
        കൃഷി_സംഘമായി_താത്പര്യം:{
            type:String,
            default: "",
        },
        പശു:{
            type:String,
            default: "",
        },
        എരുമ: {
            type:String,
            default: "",
        },
        ആട്: {
            type:String,
            default: "",
        },
        കോഴി: {
            type:String,
            default:""
        },
        താറാവ്: {
            type:String,
            default:""
        },
        മറ്റുള്ളവ_മൃഗ:{
            type:String,
            default: "",
        },
        ഓമന_മൃഗ:{
            type:String,
            default: "",
        },
        ഓമന_മൃഗ_ഏത്: {
            type:String,
            default: "",
        },
        മത്സ്യ_കൃഷി: {
            type:String,
            default: "",
        },
        മത്സ്യ_കൃഷി_ഉണ്ടോ: {
            type:String,
            default:""
        },
        മൃഗ_പരിപാല_താത്പര്യമ: {
            type:String,
            default:""
        },
        സാമൂഹിക_പങ്കാളിത്തം:{
            type:String,
            default: "",
        },
        സ്വയം_സാമൂഹിക_പങ്കാളിത്_താത്പര്യമ:{
            type:String,
            default: "",
        },
        സഹായ_സംരംഭം: {
            type:String,
            default: "",
        },
        പെൻഷൻ: {
            type:String,
            default: "",
        },
        ഇൻഷുറൻസ്: {
            type:String,
            default:""
        },
        ടൂറിസം_ഹോംസ്റ്റേ_താത്പര്യം: {
            type:String,
            default:""
        },
        സഭകളിൽ_പങ്കെടുക്കാറുണ്ടോ:{
            type:String,
            default: "",
        },
        സഭകളിൽ_പങ്കെടുക്കാറില്ലെങ്കിൽ:{
            type:String,
            default: "",
        },
        മറ്റു_തൊഴിലാളികൾ: {
            type:String,
            default: "",
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Person", PeopleSchema)


