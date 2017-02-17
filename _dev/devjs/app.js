var appsettings = require("./jsmoduler/appSettings.js");
var msg = require("./jsmoduler/main.js");
var ServiceHandler = require("./jsmoduler/ServiceCallHandler.js");
var templateHandler = require("./jsmoduler/htmltemplateHandler.js");

var $ = require("jquery");

$(function () {

    var init = function () {
        console.log("1. init körs");
        ServiceHandler.injecttemplate("test", "0", function (data) {
            console.log("4. servicen hämtar Templaten");
            templateHandler.injecthtmltemplate('.kk_aj_profile', 'kk_aj_profile.txt', data);
        })
    }
    init();
    //$("body").attr('style','background:#fff;')
    //    .append("funkar! Webpack och concat");
    //msg.testar("ja du det funkar med Webpack och concat");
});
