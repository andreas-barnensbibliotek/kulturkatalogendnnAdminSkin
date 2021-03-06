﻿//var _localOrServerURL = "http://localhost:60485/Api_v2";
//var _htmltemplateURL = "http://dnndev.me/Portals/_default/Skins/kk_Admin_Acklay/htmltemplates";
//var _detailediturl = "http://localhost:60485/Api_v3/updatearrangemang";

//lokalafiler----------------------kommentera ut dessa på servern
var _apiserver = "http://localhost:60485";
var _dnnURL = "http://dnndev.me";

//Serverfiler---------------------- kommentera ut dessa lokalt
//var _apiserver = "https://api.kulturkatalogenvast.org:443";
//var _dnnURL = "https://www.kulturkatalogenvast.org";

//NYA Serverfiler---------------------- kommentera ut dessa lokalt --- är DEVSITEN PÅ SERVERN!
//var _apiserver = "http://apidev.kulturkatalogenvast.org:8080";
//var _dnnURL = "http://www2.kulturkatalogenvast.org";

//Serverfiler---------------------- kommentera ut dessa lokalt --- är DEVSITEN PÅ SERVERN!
//var _apiserver = "http://dev.kulturkatalogenvast.org:8080";
//var _dnnURL = "http://dev.kulturkatalogenvast.org";

//Serverfiler---------------------- kommentera ut dessa lokalt
//var _apiserver = "http://kulturkatalog.kivdev.se:8080";
//var _dnnURL = "http://kulturkatalog.kivdev.se";
// 
var _localOrServerURL = _apiserver + "/Api_v2";
var _htmltemplateURL = _dnnURL+ "/Portals/_default/Skins/kk_Admin_Acklay/htmltemplates";
var _detailediturl = _apiserver + "/Api_v3/updatearrangemang";
var _detailMainImgURL = _dnnURL+ "/Portals/0/kulturkatalogenArrImages";
//devkey
var _devkeysnippet = "alf?type=json&callback=testar";
var MainSetting = {
    kk_aj_startView: [
        {
            templatename: "startUserprofileTmpl",
            templatedata: "kk_aj_userinfojson",
            targetdiv: ".kk_aj_profile",
            filename: "kk_aj_profile.txt"
        },
        {
            templatename: "StartSenasteListTmpl",
            templatedata: "kk_aj_lasteventjson",
            targetdiv: ".kk_aj_startsenastelist",
            filename: "kk_aj_startSenasteList.txt"
        },
        {
            templatename: "StartSearchTmpl",
            templatedata: "",
            targetdiv: ".kk_aj_startsearch",
            filename: "kk_aj_startSearchTab.txt"
        }
    ],
    kk_aj_nyaansokningarView: [
        {
            templatename: "nyaAnsokningarTmpl",
            templatedata: "kk_aj_nyaansokjson",
            targetdiv: ".kk_aj_ansokningar",
            filename: "kk_aj_ansokningarLista.txt"
        }
    ],
    kk_aj_underbehandlingansokningarView: [
        {
            templatename: "underbehandlingansokningarTmpl",
            templatedata: "kk_aj_underbehandlingansokjson",
            targetdiv: ".kk_aj_ansokningar",
            filename: "kk_aj_ansokningarLista.txt"
        }
    ],
    kk_aj_approvedansokningarView: [
        {
            templatename: "approvedansokningarTmpl",
            templatedata: "kk_aj_approvedansokjson",
            targetdiv: ".kk_aj_ansokningar",
            filename: "kk_aj_ansokningarLista.txt"
        }
    ],
    kk_aj_deniedansokningarView: [
        {
            templatename: "deniedansokningarTmpl",
            templatedata: "kk_aj_deniedansokjson",
            targetdiv: ".kk_aj_ansokningar",
            filename: "kk_aj_ansokningarLista.txt"
        }
    ],
    kk_aj_archiveansokningarView: [
        {
            templatename: "archiveansokningarTmpl",
            templatedata: "kk_aj_archiveansokjson",
            targetdiv: ".kk_aj_ansokningar",
            filename: "kk_aj_ansokningarLista.txt"
        }
    ],
    kk_aj_search_nyaansokningarView: [
        {
            templatename: "nyaAnsokningarTmpl",
            templatedata: "kk_aj_SearchNyaansokjson",
            targetdiv: ".kk_aj_ansokningar",
            filename: "kk_aj_ansokningarLista.txt",
            searchstr: ""
        }
    ],
    kk_aj_search_underbehandlingansokningarView: [
        {
            templatename: "underbehandlingAnsokningarTmpl",
            templatedata: "kk_aj_SearchUnderbehandlingansokjson",
            targetdiv: ".kk_aj_ansokningar",
            filename: "kk_aj_ansokningarLista.txt",
            searchstr: ""
        }
    ],
    kk_aj_search_approvedansokningarView: [
        {
            templatename: "approvedansokningarTmpl",
            templatedata: "kk_aj_SearchApprovedansokjson",
            targetdiv: ".kk_aj_ansokningar",
            filename: "kk_aj_ansokningarLista.txt",
            searchstr: ""
        }
    ],
    kk_aj_search_deniedansokningarView: [
        {
            templatename: "deniedansokningarTmpl",
            templatedata: "kk_aj_SearchDeniedansokjson",
            targetdiv: ".kk_aj_ansokningar",
            filename: "kk_aj_ansokningarLista.txt",
            searchstr: ""
        }
    ],
    kk_aj_search_archiveansokningarView: [
        {
            templatename: "archiveansokningarTmpl",
            templatedata: "kk_aj_SearchArchiveansokjson",
            targetdiv: ".kk_aj_ansokningar",
            filename: "kk_aj_ansokningarLista.txt",
            searchstr: ""
        }
    ],
    kk_aj_ansokningarpagerinfoView: [
        {
            templatename: "ansokningarpagerinfoTmpl",
            templatedata: "",
            targetdiv: ".kk_aj_listpagecount",
            filename: "kk_aj_ansokningarpagerinfo.txt"
        }
    ],
    kk_aj_DiarieView: [
        {
            templatename: "DiareTmpl",
            templatedata: "kk_aj_diariejson",
            targetdiv: ".kk_aj_diarietbl",
            filename: "kk_aj_diarieTable.txt"
        }
    ],
    kk_aj_utovareView: [
        {
            templatename: "utovareTmpl",
            templatedata: "kk_aj_utovarejson",
            targetdiv: ".kk_aj_utovaretbl",
            filename: "kk_aj_utovareTable.txt",
            detailid: window.detailuid
        }
    ],
    kk_aj_utovareDetailView: [
        {
            templatename: "utovareDetailTmpl",
            templatedata: "kk_aj_utovareDetailjson",
            targetdiv: ".kk_aj_utovaredetalj",
            filename: "kk_aj_utovaredetaljvy.txt",
            detailid: window.detailuid
        },
        {
            templatename: "utovareDetailArrlistTmpl",
            templatedata: "kk_aj_utovareDetailArrListjson",
            targetdiv: ".kk_aj_utovareDetailArrListTbl",
            filename: "kk_aj_utovareDetailArrListTable.txt",
            detailid: window.detailuid
        }
    ],
    kk_aj_detailView: [
        {
            templatename: "detailTmpl",
            templatedata: "kk_aj_detailvyjson",
            targetdiv: ".kk_aj_detaljvyContainer",
            filename: "kk_aj_detaljvy.txt",
            detailid: window.detailid
        }
    ],
    kk_aj_detailEditView: [
        {
            templatename: "detailEditTmpl",
            templatedata: "kk_aj_detailvyjson",
            targetdiv: ".kk_aj_detaljvyContainer",
            filename: "kk_aj_detaljvyedit.txt",
            detailid: window.detailid
        }
    ],
    kk_aj_detaillogView: [
        {
            templatename: "logdetaljvyNewTmpl",
            templatedata: "kk_aj_detailloggListjson",
            targetdiv: ".kk_aj_motiveringlogg",
            filename: "kk_aj_logdetaljvyList.txt",
            arrid: window.arrid
        }
    ],
    kk_aj_detailmotiveringloggView: [
        {
            templatename: "motiveringloggTmpl",
            templatedata: "kk_aj_detailmotiveringloggjson",
            targetdiv: ".kk_aj_motiveringlogg",
            filename: "kk_aj_motiveringlogg.txt"
        }
    ],
    kk_aj_kk_aj_topNavView: [
        {
            templatename: "TopNavMenuTmpl",
            templatedata: "kk_aj_topnavjson",
            targetdiv: ".kk_aj_topNav",
            filename: "kk_aj_topNav_menu.txt"
        }
    ],
    kk_aj_pagerHandler:
    {
        page_max_size: "",
        page_startitem: "0",
        page_item_per_page: "20",
        page_currentlimit: "",
        page_currentdataset: [],
        page_currenttemplate: "",
        page_totalpages: "",
        page_currentpage: "0"
    },
    currentuserid: ""
}
module.exports = {  
    localOrServerURL: _localOrServerURL,
    htmltemplateURL: _htmltemplateURL,
    ServerApiURL: _apiserver,
    DnnURL: _dnnURL,
    detailediturl: _detailediturl,
    currentUserid: MainSetting.currentuserid,
    topnavtemplate: MainSetting.kk_aj_kk_aj_topNavView,
    starttemplate: MainSetting.kk_aj_startView,
    nyaansokningartemplate: MainSetting.kk_aj_nyaansokningarView,
    underbehandlingansokningartemplate: MainSetting.kk_aj_underbehandlingansokningarView,
    approvedansokningartemplate: MainSetting.kk_aj_approvedansokningarView,
    deniedansokningartemplate: MainSetting.kk_aj_deniedansokningarView,
    archiveansokningartemplate: MainSetting.kk_aj_archiveansokningarView,
    ansokningarpagerinfotemplate: MainSetting.kk_aj_ansokningarpagerinfoView,
    searchansokningartemplate:{
        nya: MainSetting.kk_aj_search_nyaansokningarView,
        underbehandling: MainSetting.kk_aj_search_underbehandlingansokningarView,
        approved: MainSetting.kk_aj_search_approvedansokningarView,
        denied: MainSetting.kk_aj_search_deniedansokningarView,
        archive: MainSetting.kk_aj_search_archiveansokningarView
    }, 
    diarietemplate: MainSetting.kk_aj_DiarieView,
    utovaretemplate: MainSetting.kk_aj_utovareView,
    utovaredetailtemplate: MainSetting.kk_aj_utovareDetailView,
    detailetemplate: MainSetting.kk_aj_detailView,
    detailEdittemplate: MainSetting.kk_aj_detailEditView,
    detaillogtemplate: MainSetting.kk_aj_detaillogView,
    motiveringloggtemplate: MainSetting.kk_aj_detailmotiveringloggView,
    basepageUri: "/KulturkatalogenAdmin",
    pagerHandler: MainSetting.kk_aj_pagerHandler,
    devkeysnippet: _devkeysnippet,
    detailmainimgurl: _detailMainImgURL,
    youtubelink: "https://www.youtube.com/embed/"

}