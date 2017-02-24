var $ = require("jquery");
var appsettings = require("./appSettings.js");
var ServiceHandler = require("./ServiceCallHandler.js");
module.exports = {
    testar: function (msg) {
        alert(msg);
    },
    pageloader: function (pagetoload) {
        switch(pagetoload) {
            case "kk_aj_startView":
                console.log("2. kk_aj_startView körs");                
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.starttemplate);
                break;
            case "kk_aj_ansokningarView":               
                console.log("3. servicen hämtar debug Templaten: kk_aj_ansokningarView ");
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.ansokningartemplate);   
                break;
            case "kk_aj_diarieView":
                console.log("3. servicen hämtar debug Templaten: kk_aj_diarieView");
                lloadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.diarietemplate);                
                break;
            default:
                console.log("3. servicen hämtar debug Templaten: kk_aj_startView");
                loadtemplateTypes(appsettings.topnavtemplate);
                loadtemplateTypes(appsettings.starttemplate);
                break;
        }
    }

};

var loadtemplateTypes = function (pagetemplate, userid) {    
    var i = 0;
    //for (var obj in pagetemplate) {
    $.each(pagetemplate, function( obj, value ) {
        console.log("3.  körs obj= " + obj + " val= " + value.templatedata);
        
        ServiceHandler.injecttemplateDebug(value.templatedata, userid, function (data) {
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
