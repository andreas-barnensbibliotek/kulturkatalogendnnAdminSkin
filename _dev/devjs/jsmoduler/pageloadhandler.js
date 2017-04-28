var $ = require("jquery");
var appsettings = require("./appSettings.js");
var ServiceHandler = require("./ServiceCallHandler.js");
module.exports = {
    testar: function (msg) {
        alert(msg);
    },
    pageloader: function (pagetoload, sortobj) {
      
        switch(pagetoload) {
            case "kk_aj_startView":
                console.log("2. kk_aj_startView körs");                
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.starttemplate);
                break;
            case "kk_aj_ansokningarView": //nya              
                console.log("3. servicen hämtar debug Templaten: kk_aj_ansokningarView= " );
                
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.nyaansokningartemplate, appsettings.currentUserid, sortobj);
                break;
            case "kk_aj_approvedansokningarView": //godkända
                console.log("3. servicen hämtar debug Templaten: kk_aj_approvedansokningarView ");
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.approvedansokningartemplate, appsettings.currentUserid, sortobj);
                break;
            case "kk_aj_deniedansokningarView": //nekade
                console.log("3. servicen hämtar debug Templaten: kk_aj_deniedansokningarView ");
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.deniedansokningartemplate, appsettings.currentUserid, sortobj);
                break;
            case "kk_aj_archiveansokningarView": //arkiv
                console.log("3. servicen hämtar debug Templaten: kk_aj_archiveansokningarView ");
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.archiveansokningartemplate, appsettings.currentUserid, sortobj);
                break;                
            case "kk_aj_diarieView":
                console.log("3. servicen hämtar debug Templaten: kk_aj_diarieView");
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.diarietemplate, appsettings.currentUserid, sortobj);
                break;
            case "kk_aj_detailView":
                console.log("3. servicen hämtar debug Templaten: kk_aj_detailView");
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.detailetemplate, appsettings.currentUserid, sortobj);
                break;
            default:
                console.log("3. servicen hämtar debug Templaten: kk_aj_startView");
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.starttemplate);
                break;
        }
    },
    pagechanger: function (currdata, currtemp, sta, limit) {
        partpageloadertemplates(currtemp, datapager(currdata,sta, limit), function (data) {
            if (data == "ja") {
                console.log("ansokningarpagerinfotemplate");
            }
        });
    }
};

var loadtemplateTypes = function (pagetemplate, userid, sortera) {    
    var i = 0;
   
    //for (var obj in pagetemplate) {
    $.each(pagetemplate, function( obj, value ) {
        console.log("33.  körs obj= " + obj + " val= " + value.templatedata);
        console.log("44.  appsettings.ansokningarpagerinfotemplate= " + appsettings.ansokningarpagerinfotemplate[0].filename);
        console.log("55.  appsettings.kk_aj_deniedansokningarView= " + appsettings.deniedansokningartemplate[0].filename);

        ServiceHandler.injecttemplateDebug(value.templatedata, userid, function (data) {
            // console.log("3.1.  körs");

            //kolla om det är en detaljvy som efterfrågas om det är det behövs ingen sortering eller pager
            if (value.templatename != "detailTmpl") {

                if (data.kk_aj_admin.ansokningarlista) {              
                    var sortorder;
                    var sortobjtosearch;

                    if (sortera != undefined) {
                        // 2=ansokningtitle, 4= ansokningutovare                     
                        sortorder = sortera.order;
                        sortobjtosearch = sortera.tosort;
                    }
                
                    //"tosort": "title", "order": "down"
                    data.kk_aj_admin.ansokningarlista.ansokningar.sort(function (a, b) {                   
                        if (sortorder == "down") {                        
                            if (a[sortobjtosearch] == b[sortobjtosearch])
                                return 0;
                            if (a[sortobjtosearch] < b[sortobjtosearch])
                                return -1;
                            if (a[sortobjtosearch] > b[sortobjtosearch])
                                return 1;
                        } else {
                            if (a[sortobjtosearch] == b[sortobjtosearch])
                                return 0;
                            if (a[sortobjtosearch] > b[sortobjtosearch])
                                return -1;
                            if (a[sortobjtosearch] < b[sortobjtosearch])
                                return 1;
                        }
                    });
                    var test = data;
                    appsettings.pagerHandler.page_currentdataset = test;
                    appsettings.pagerHandler.page_currenttemplate = value;
                    data = datapager(data);

                    partpageloadertemplates(appsettings.ansokningarpagerinfotemplate[0], data, function (data) {
                        if (data == "ja") {
                            console.log("ansokningarpagerinfotemplate");
                        }
                    });
                }
               
            }
            loadpagetemplates(value, data, function (data) {
                if (data == "ja") {
                    console.log("KLART");                    
                }
            });
        });
        //ServiceHandler.injecttemplate(pagetemplate[obj].templatedata, userid, function (data) {
        //    loadpagetemplates(pagetemplate[obj], data);
        });
    //};
}


var loadpagetemplates = function (template, currentdata,callback) {
    console.log("6. laddar: " + template.filename);   
    $.get(appsettings.htmltemplateURL + "/" + template.filename, function (data) {
        var temptpl = Handlebars.compile(data);

        updatecountmenybox(currentdata);

        console.log("7. "+template.filename +" klar att levereras");
        $(template.targetdiv).html(temptpl(currentdata));
        callback("ja");
    }, 'html');

}

var partpageloadertemplates = function (template, currentdata, callback) {
    console.log("61. partpagerladdar: " + template.filename);
   
    $.get(appsettings.htmltemplateURL + "/" + template.filename, function (data) {
        var temptpl = Handlebars.compile(data);
        console.log("71. " + template.filename + " klar att levereras");
        $(template.targetdiv).html(temptpl(currentdata));
        callback("ja");
    }, 'html');


}

var updatecountmenybox = function (data) {
    
    if (data.kk_aj_admin.nyaansokningarcount != undefined) {       
        if (data.kk_aj_admin.nyaansokningarcount) {
            $('.kk_aj_newcount').show();
            $('.kk_aj_newcount').html(data.kk_aj_admin.nyaansokningarcount);
        } else {            
            $('.kk_aj_newcount').hide();
        }  
        if (data.kk_aj_admin.approvedansokningarcount) {
            $('.kk_aj_approvedcount').show();
            $('.kk_aj_approvedcount').html(data.kk_aj_admin.approvedansokningarcount);
        } else {            
            $('.kk_aj_approvedcount').hide();
        }  
        if (data.kk_aj_admin.deniedansokningarcount){
            $('.kk_aj_deniedcount').show();
            $('.kk_aj_deniedcount').html(data.kk_aj_admin.deniedansokningarcount);
        } else {            
            $('.kk_aj_deniedcount').hide();
        }                    
    }
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
                "ansokningurl": b[i]['ansokningurl'],
                "ansokningbilaga": b[i]['ansokningbilaga'],
                "ansokningbilagaUrl": b[i]['ansokningbilagaUrl'],
                "ansokninglast": b[i]['ansokninglast'],                
                "ansokningstatus": b[i]['ansokningstatus']
            };

            retdata.kk_aj_admin.ansokningarlista.ansokningar.push(test);
        }
    }
    return retdata;
}