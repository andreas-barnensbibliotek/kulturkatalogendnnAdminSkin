﻿var $ = require("jquery");
var jplists = require("./externalplugin/jplist_moduleexport.js");
var appsettings = require("./appSettings.js");
var ServiceHandler = require("./ServiceCallHandler.js");
module.exports = {
    testar: function (msg) {
        alert(msg);
    },
    pageloader: function (pagetoload, sortobj, val) {
        jplists.init();

        /// DOM CACHE ///////////////////////////////////////////////////////////////////////////////////
        let $dom_kk_aj_utovaredetalj = $('.kk_aj_utovaredetalj');
        let $dom_kk_aj_utovarelist = $('.kk_aj_utovarelist');
        let $dom_section_kk_aj_utovareDetailArrListTbl = $('#section_kk_aj_utovareDetailArrListTbl');
        /////////////////////////////////////////////////////////////////////////////////////////////////

        switch(pagetoload) {
            case "kk_aj_startView":                  
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.starttemplate, appsettings.currentUserid, "", "top5");
                break;
            case "kk_aj_ansokningarView": //nya  
                $('#kk_aj_ansokningMain').jplist({
                    command: 'empty'
                });
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.nyaansokningartemplate, appsettings.currentUserid, sortobj, val);
                pagetotalblock();
                break;
            case "kk_aj_underbehandlingansokningarView": //Under behandling  
                $('#kk_aj_ansokningMain').jplist({
                    command: 'empty'
                });
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.underbehandlingansokningartemplate, appsettings.currentUserid, sortobj, val);
                pagetotalblock();
                break;
            case "kk_aj_approvedansokningarView": //godkända
                $('#kk_aj_ansokningMain').jplist({
                    command: 'empty'
                });
                //console.log("3. servicen hämtar debug Templaten: kk_aj_approvedansokningarView ");
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.approvedansokningartemplate, appsettings.currentUserid, sortobj, val);
                pagetotalblock();
                break;
            case "kk_aj_deniedansokningarView": //nekade
                $('#kk_aj_ansokningMain').jplist({
                    command: 'empty'
                });
                //console.log("3. servicen hämtar debug Templaten: kk_aj_deniedansokningarView ");
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.deniedansokningartemplate, appsettings.currentUserid, sortobj, val);
                break;
                pagetotalblock();
            case "kk_aj_archiveansokningarView": //arkiv
                $('#kk_aj_ansokningMain').jplist({
                    command: 'empty'
                });
                //console.log("3. servicen hämtar debug Templaten: kk_aj_archiveansokningarView ");
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.archiveansokningartemplate, appsettings.currentUserid, sortobj, val);
                pagetotalblock();
                break;                
            case "kk_aj_diarieView":
               // console.log("3. servicen hämtar debug Templaten: kk_aj_diarieView");
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.diarietemplate, appsettings.currentUserid, sortobj, "all");
                break;
            case "kk_aj_utovareView":
                // console.log("3. servicen hämtar debug Templaten: kk_aj_diarieView");
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
               
                //loadtemplateTypes(appsettings.utovaretemplate, appsettings.currentUserid, sortobj, "all");
                var uid = appsettings.utovaredetailtemplate.detailid
                if (uid > 0) {
                    loadtemplateTypes(appsettings.utovaredetailtemplate, appsettings.currentUserid, sortobj, uid); 
                    
                    $dom_kk_aj_utovaredetalj.show();
                    $dom_section_kk_aj_utovareDetailArrListTbl.show();
                    $dom_kk_aj_utovarelist.hide();
                };
                break;
            case "kk_aj_detailView":
                //console.log("3. servicen hämtar debug Templaten: kk_aj_detailView");
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.detailetemplate, appsettings.currentUserid, sortobj, appsettings.detailetemplate.detailid);
                loadtemplateTypes(appsettings.detaillogtemplate, appsettings.currentUserid, '', appsettings.detaillogtemplate.arrid);
                break;
            case "kk_aj_detailEditView":
                //console.log("3. servicen hämtar debug Templaten: kk_aj_detailView");
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.detailEdittemplate, appsettings.currentUserid, sortobj, appsettings.detailEdittemplate.detailid);
                loadtemplateTypes(appsettings.detaillogtemplate, appsettings.currentUserid, '', appsettings.detaillogtemplate.arrid);
                break;
            case "kk_aj_search_nyaansokningarView": //sök i nya              
                //console.log("kk_aj_search_nyaansokningarView: SÖK I kk_aj_search_nyaansokningarView= ");
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.searchansokningartemplate.nya, appsettings.currentUserid, sortobj, val);
                break;     
            case "kk_aj_search_underbehandlingansokningarView": //sök i underbehandling             
                //console.log("kk_aj_search_underbehandlingaansokningarView: SÖK I kk_aj_search_underbehandlingansokningarView= ");
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.searchansokningartemplate.underbehandling, appsettings.currentUserid, sortobj, val);
                break;  
            case "kk_aj_search_approvedansokningarView": //sök i nya              
                //console.log("kk_aj_search_nyaansokningarView: SÖK I kk_aj_search_nyaansokningarView= ");
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.searchansokningartemplate.approved, appsettings.currentUserid, sortobj, val);
                break;
            case "kk_aj_search_deniedansokningarView": //sök i nya              
                //console.log("kk_aj_search_nyaansokningarView: SÖK I kk_aj_search_nyaansokningarView= ");
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.searchansokningartemplate.denied, appsettings.currentUserid, sortobj, val);
                break;
            case "kk_aj_search_archiveansokningarView": //sök i nya              
                //console.log("kk_aj_search_nyaansokningarView: SÖK I kk_aj_search_nyaansokningarView= ");
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.searchansokningartemplate.archive, appsettings.currentUserid, sortobj, val);
                break;
            case "updatelogView":
                loadtemplateTypes(appsettings.detaillogtemplate, appsettings.currentUserid, "", appsettings.detailetemplate.detailid);
                break;
            default:
               // console.log("3. servicen hämtar debug Templaten: kk_aj_startView");
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                loadtemplateTypes(appsettings.starttemplate, appsettings.currentUserid);
                break;
        }
        
    },
    pagechanger: function (currdata, currtemp, sta, limit) {
        partpageloadertemplates(currtemp, datapager(currdata,sta, limit), function (data) {
            if (data == "ja") {
                console.log("ansokningarpagerinfotemplate");
            }
        });
    },
    pagetotalupdater: function () {
        pagetotalblock();
    },
    pageParameterUpdater: function (callTyp, usrid, arrid, val, callback) {
        ServiceHandler.updateparam(callTyp, usrid, arrid, val, function (data) {
            callback();                           
        });
    },
    pagePostParameterUpdater: function (postjson, callback) {
        ServiceHandler.updatePostparam(postjson, function (data) {
            callback();
        });
    }
};

var loadtemplateTypes = function (pagetemplate, userid, sortera, val) {
    var i = 0;
       
    $.each(pagetemplate, function( obj, value ) {       
        
        ServiceHandler.injecttemplateDebug(value.templatedata, userid, val, function (data) {
          
            //kolla om det är en detaljvy som efterfrågas om det är det behövs ingen sortering eller pager
            if (!(value.templatename == "detailTmpl" || value.templatename == "detailEditTmpl" || value.templatename == "utovareDetailTmpl" || value.templatename == "utovareDetailArrlistTmpl")) {
                if (value.templatename != "StartSenasteListTmpl") {
                    if (value.templatename != "DiareTmpl") {

                        if (data.kk_aj_admin.ansokningarlista) {
                           
                            partpageloadertemplates(appsettings.ansokningarpagerinfotemplate[0], data, function (data) {
                                                          
                            });
                        }
                    };
                };
            };
            loadpagetemplates(value, data, function (data) {
                if (data == "ja") {
                    // console.log("KLART");  
                   
                    $('#kk_aj_ansokningMain').jplist({
                        itemsBox: '#kk_aj_ansokningar',
                        itemPath: '.kk_aj_ansokning_item',
                        panelPath: '.jplist-panel',
                        storage: 'localstorage',
                        storageName: 'adminstorage',
                        cookiesExpiration: -1
                    });      
                    
                }
            });
            
        });
        //ServiceHandler.injecttemplate(pagetemplate[obj].templatedata, userid, function (data) {
        //    loadpagetemplates(pagetemplate[obj], data);
    });
   
}


var loadpagetemplates = function (template, currentdata,callback) {
    
    $.get(appsettings.htmltemplateURL + "/" + template.filename, function (data) {
        var temptpl = Handlebars.compile(data);

        updatecountmenybox(currentdata);
        $(template.targetdiv).html(temptpl(currentdata));
        callback("ja");
    }, 'html');

}

var partpageloadertemplates = function (template, currentdata, callback) {
   
    $.get(appsettings.htmltemplateURL + "/" + template.filename, function (data) {
        var temptpl = Handlebars.compile(data);

        //console.log("71. " + template.filename + " klar att levereras");
        $(template.targetdiv).html(temptpl(currentdata));
        callback("ja");
    }, 'html');


}

var updatecountmenybox = function (data) {
    let $dom_kk_aj_newcount = $('.kk_aj_newcount');
    let $dom_kk_aj_underbehandlingcount = $('.kk_aj_underbehandlingcount');    
    let $dom_kk_aj_approvedcount = $('.kk_aj_approvedcount');
    let $dom_kk_aj_deniedcount = $('.kk_aj_deniedcount');
    let $dom_kk_aj_menyNamn = $('.kk_aj_menyNamn');

    if (data.kk_aj_admin.nyaansokningarcount != undefined) {       
        if (data.kk_aj_admin.nyaansokningarcount) {
            $dom_kk_aj_newcount.show();
            $dom_kk_aj_newcount.html(data.kk_aj_admin.nyaansokningarcount);
        } else {            
            $dom_kk_aj_newcount.hide();
        }  
        //if (data.kk_aj_admin.approvedansokningarcount) {
        //    $dom_kk_aj_approvedcount.show();
        //    $dom_kk_aj_approvedcount.html(data.kk_aj_admin.approvedansokningarcount);
        //} else {
            $dom_kk_aj_underbehandlingcount.hide();
        //}  
        if (data.kk_aj_admin.approvedansokningarcount) {
            $dom_kk_aj_approvedcount.show();
            $dom_kk_aj_approvedcount.html(data.kk_aj_admin.approvedansokningarcount);
        } else {            
            $dom_kk_aj_approvedcount.hide();
        }  
        if (data.kk_aj_admin.deniedansokningarcount){
            $dom_kk_aj_deniedcount.show();
            $dom_kk_aj_deniedcount.html(data.kk_aj_admin.deniedansokningarcount);
        } else {            
            $dom_kk_aj_deniedcount.hide();
        }                    
    }
    if (data.kk_aj_admin.userinfo != undefined) {
        $dom_kk_aj_menyNamn.html('<p>' + data.kk_aj_admin.userinfo.username + '</p>');
        $dom_kk_aj_menyNamn.append('<p><a>'+ data.kk_aj_admin.userinfo.userinfoheader +'</a></p>');
        $('.kk_aj_menyAvatar img').attr('src', data.kk_aj_admin.userinfo.useravatar)
    }
    //console.log("inne i test")
};


var datapager = function(datat,sta,limit) {
    var retdata = jQuery.extend(true, {}, datat);
    var settings = appsettings.pagerHandler;
    appsettings.pagerHandler.page_max_size = datat.kk_aj_admin.ansokningarlista.ansokningar.length;//var max_size=b.length;
    
    //appsettings.pagerHandler.page_currentlimit = //appsettings.pagerHandler.page_item_per_page; //10
    var b = datat.kk_aj_admin.ansokningarlista.ansokningar;
    retdata.kk_aj_admin.ansokningarlista.ansokningar = [];
    
    if (typeof sta == 'undefined'){
        sta = settings.page_startitem;
    }
    if (typeof limit == 'undefined') {
        limit = settings.page_item_per_page;
    }

    appsettings.pagerHandler.page_currentlimit = limit;
    //var elements_per_page = 4;
    //var limit = elements_per_page;


    for (var i = sta ; i < limit; i++) {
        if (typeof b[i] !== 'undefined') {
            var test = {
                "ansokningid": b[i]['ansokningid'],
                "ansokningdate": b[i]['ansokningdate'],
                "ansokningtitle": b[i]['ansokningtitle'],
                "ansokningsubtitle": b[i]['ansokningsubtitle'],
                "ansokningutovare": b[i]['ansokningutovare'],
                "ansokningutovareid": b[i]['ansokningUtovarid'],
                "ansokningurl": b[i]['ansokningurl'],
                "ansokningbilaga": b[i]['ansokningbilaga'],
                "ansokningbilagaUrl": b[i]['ansokningbilagaUrl'],
                "ansokninglast": b[i]['ansokninglast'],
                "ansokningkonstform": b[i]['ansokningkonstform'],
                "ansokningpublicerad": b[i]['ansokningpublicerad'],
                "ansokningstatus": b[i]['ansokningstatus']
            };

            retdata.kk_aj_admin.ansokningarlista.ansokningar.push(test);
        }
    }
    return retdata;
}


var pagetotalblock = function () {
     
    if (appsettings.pagerHandler.page_currentpage <= 1) {
        appsettings.pagerHandler.page_currentpage = 1;
    }
    if (appsettings.pagerHandler.page_currentpage > appsettings.pagerHandler.page_totalpages) {
        appsettings.pagerHandler.page_currentpage = appsettings.pagerHandler.page_totalpages;
    }
    
    var pagehtml = appsettings.pagerHandler.page_currentpage + "/" + appsettings.pagerHandler.page_totalpages;

    $('.kk_aj_pageToTotal').html(pagehtml);

}