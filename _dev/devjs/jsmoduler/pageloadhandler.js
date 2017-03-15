var $ = require("jquery");
var appsettings = require("./appSettings.js");
var ServiceHandler = require("./ServiceCallHandler.js");
module.exports = {
    testar: function (msg) {
        alert(msg);
    },
    pageloader: function (pagetoload) {
        var sortobj = { "tosort": "title", "order": "down" };
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
    if (sortera != undefined) {
        console.log("3.  userid= " + userid + " sort=" +sortera.tosort);
    }
    
    //for (var obj in pagetemplate) {
    $.each(pagetemplate, function( obj, value ) {
        //console.log("3.  körs obj= " + obj + " val= " + value.templatedata);
        
        ServiceHandler.injecttemplateDebug(value.templatedata, userid, function (data) {
            console.log("3.1.  körs");
            
            if (data.kk_aj_admin.ansokningarlista) {
                //var objectToSort;
                //switch(sortera.tosort) {
                //    case "utovare":
                //        objectToSort = data.kk_aj_admin.ansokningarlista.ansokningar;
                //        break;
                //    case "title":
                //        objectToSort = data.kk_aj_admin.ansokningarlista.ansokningar;
                //        break;
                //    default:
                //        objectToSort = data.kk_aj_admin.ansokningarlista.ansokningar;
                //        break;
                //}  
              

            
             //   console.log("3.2.  körs ");
                data.kk_aj_admin.ansokningarlista.ansokningar.sort(function (b, a) {
                    //return a.attributes.OBJECTID - B.attributes.OBJECTID;
                    console.log(a[0]);
                    if (a.ansokningtitle == b.ansokningtitle)
                        return 0;
                    if (a.ansokningtitle < b.ansokningtitle)
                        return -1;
                    if (a.ansokningtitle > b.ansokningtitle)
                        return 1;
               //     console.log("3.3.  körs ");

                });

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
        console.log("7. "+template.filename +" klar att levereras");
        $(template.targetdiv).html(temptpl(currentdata));
        callback("ja");
    }, 'html');

}
