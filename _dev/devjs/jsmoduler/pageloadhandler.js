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
                console.log("3. servicen hämtar debug Templaten: kk_aj_ansokningarView =nya");                

                loadtemplateTypes(appsettings.topnavtemplate);                
                loadtemplateTypes(appsettings.nyaansokningartemplate,0, sortobj);
                break;
            case "kk_aj_approvedansokningarView": //godkända
                console.log("3. servicen hämtar debug Templaten: kk_aj_approvedansokningarView ");

                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.approvedansokningartemplate, 0, sortobj);
                break;
            case "kk_aj_deniedansokningarView": //nekade
                console.log("3. servicen hämtar debug Templaten: kk_aj_deniedansokningarView ");
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.deniedansokningartemplate, 0, sortobj);
                break;
            case "kk_aj_archiveansokningarView": //arkiv
                console.log("3. servicen hämtar debug Templaten: kk_aj_archiveansokningarView ");
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.archiveansokningartemplate, 0, sortobj);
                break;                
            case "kk_aj_diarieView":
                console.log("3. servicen hämtar debug Templaten: kk_aj_diarieView");
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.diarietemplate, 0, sortobj);
                break;
            default:
                console.log("3. servicen hämtar debug Templaten: kk_aj_startView");
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.starttemplate);
                break;
        }
    }
};

var loadtemplateTypes = function (pagetemplate, userid, sortera) {    
    var i = 0;
   
    //for (var obj in pagetemplate) {
    $.each(pagetemplate, function( obj, value ) {
        //console.log("3.  körs obj= " + obj + " val= " + value.templatedata);
        
        ServiceHandler.injecttemplateDebug(value.templatedata, userid, function (data) {
           // console.log("3.1.  körs");
            
            if (data.kk_aj_admin.ansokningarlista) {              
                var sortorder;
                var sortobjIndex;

                if (sortera != undefined) {
                    // 2=ansokningtitle, 4= ansokningutovare                     
                    sortorder = sortera.order;
                    sortobjIndex = parseInt(sortera.tosort);
                }
                //"tosort": "title", "order": "down"
                data.kk_aj_admin.ansokningarlista.ansokningar.sort(function (a, b) {
                    if (sortorder == "down") {
                        if (Object.values(a)[sortobjIndex] == Object.values(b)[sortobjIndex])
                            return 0;
                        if (Object.values(a)[sortobjIndex] < Object.values(b)[sortobjIndex])
                            return -1;
                        if (Object.values(a)[sortobjIndex] > Object.values(b)[sortobjIndex])
                            return 1;
                    }else {
                        if (Object.values(a)[sortobjIndex] == Object.values(b)[sortobjIndex])
                            return 0;
                        if (Object.values(a)[sortobjIndex] > Object.values(b)[sortobjIndex])
                            return -1;
                        if (Object.values(a)[sortobjIndex] < Object.values(b)[sortobjIndex])
                            return 1;
                    }
                });

            }

            loadpagetemplates(value, data, function (data) {
                if (data == "ja") {
                    console.log("KLART");
                    if ($('.kk_aj_sortutovare i').hasClass('fa-caret-down')) {
                        $('.kk_aj_ansokningar .kk_aj_sortutovare i').removeClass('fa-caret-down').addClass('fa-caret-up');
                    } else {
                        $('.kk_aj_sortutovare i').removeClass('fa-caret-up').addClass('fa-caret-down');

                    };
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
        console.log("7. "+template.filename +" klar att levereras");
        $(template.targetdiv).html(temptpl(currentdata));
        callback("ja");
    }, 'html');

}
