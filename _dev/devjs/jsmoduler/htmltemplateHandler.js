var $ = require("jquery");
var appsettings = require("./appSettings.js");

module.exports = {
    testar: function (msg) {
        alert(msg);
    },
    injecthtmltemplate: function (targetClass, usetemplateName, currentdata) {
        console.log("6 1. inne i templatehandler");
        $.get(appsettings.htmltemplateURL +"/"+ usetemplateName, function (data) {
            var temptpl = Handlebars.compile(data);
            updatecountmenybox(data);
            console.log("7 1. template klar att levereras");
            $(targetClass).html(temptpl(currentdata));
            //callback(htmltemplate)
        }, 'html');
    }

};
var updatecountmenybox = function (data) {
    console.log("81 dount");
    if (data.nyaansokningarcount) {
        $('.kk_aj_newcount').html(data.nyaansokningarcount);
    }
    if (data.approvedansokningarcount) {
        $('.kk_aj_approvedcount').html(data.approvedansokningarcount);
    }
    if (data.deniedansokningarcount) {
        $('.kk_aj_deniedcount').html(data.deniedansokningarcount);
    }
   
};