﻿// object
//var _localOrServerURL = "http://www.barnensbibliotek.se/DesktopModules/barnensbiblService/bokemonApi";
var _localOrServerURL = "http://kulturkatalog.kivdev.se:8080/Api_v1";
var _htmltemplateURL = "http://dnndev.me/Portals/_default/Skins/kk_Admin_Acklay/htmltemplates";

window.kk_aj_startView= [
    {
        templatename: "startUserprofileTmpl",
        templatedata:"kk_aj_userinfojson",
        targetdiv: ".kk_aj_profile",
        filename: "kk_aj_profile.txt"
    },    
    {
        templatename: "StartSenasteListTmpl",
        templatedata: "kk_aj_lasteventjson",
        targetdiv: ".kk_aj_startsenastelist",
        filename: "kk_aj_startSenasteList.txt"
    }
];
window.kk_aj_nyaansokningarView = [
    {
        templatename: "nyaAnsokningarTmpl",
        templatedata: "kk_aj_nyaansokjson",
        targetdiv: ".kk_aj_ansokningar",
        filename: "kk_aj_ansokningarLista.txt"
    }
];
window.kk_aj_approvedansokningarView = [
    {
        templatename: "approvedansokningarTmpl",
        templatedata: "kk_aj_approvedansokjson",
        targetdiv: ".kk_aj_ansokningar",
        filename: "kk_aj_ansokningarLista.txt"
    }
];
window.kk_aj_deniedansokningarView = [
    {
        templatename: "deniedansokningarTmpl",
        templatedata: "kk_aj_deniedansokjson",
        targetdiv: ".kk_aj_ansokningar",
        filename: "kk_aj_ansokningarLista.txt"
    }
];
window.kk_aj_archiveansokningarView = [
    {
        templatename: "archiveansokningarTmpl",
        templatedata: "kk_aj_archiveansokjson",
        targetdiv: ".kk_aj_ansokningar",
        filename: "kk_aj_ansokningarLista.txt"
    }
];
window.kk_aj_DiarieView =[    
    {
        templatename: "DiareTmpl",
        templatedata: "kk_aj_diariejson",
        targetdiv: "",
        filename: "kk_aj_topNav_message_menu.txt"
    }
];
window.kk_aj_kk_aj_topNavView = [
    {
        templatename: "TopNavMenuTmpl",
        templatedata: "kk_aj_topnavjson",
        targetdiv: ".kk_aj_topNav",
        filename: "kk_aj_topNav_menu.txt"
    }
];

module.exports = {  
    localOrServerURL: _localOrServerURL,
    htmltemplateURL: _htmltemplateURL,
    currentUserid: window.currentuserid,
    topnavtemplate: window.kk_aj_kk_aj_topNavView,
    starttemplate: window.kk_aj_startView,
    nyaansokningartemplate: window.kk_aj_nyaansokningarView,
    approvedansokningartemplate: window.kk_aj_approvedansokningarView,
    deniedansokningartemplate: window.kk_aj_deniedansokningarView,
    archiveansokningartemplate: window.kk_aj_archiveansokningarView,
    diarietemplate:window.kk_aj_DiarieView
}





//Handlebars.registerHelper('ifLast', function (object) {
//   // var ret = true;
//    console.log("inne!");
//    if (object === "nej") {
//        return '<i class="fa fa-star text-yellow" title="Ej läst"></i>';
//    } else {
//        return '<i class="fa fa-star-o text-yellow" title="Läst"></i>';
//    }
//    // ret;
//    //return (object == "nej") ? false : true;
//});