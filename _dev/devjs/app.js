var appsettings = require("./jsmoduler/appSettings.js");
//var msg = require("./jsmoduler/main.js");
var handlebarshelpers = require("./jsmoduler/handlebarHelpers.js");
var loadpageHandler = require("./jsmoduler/pageloadhandler.js");
var registerJqueryEvents = require("./jsmoduler/eventhandler.js");
//var templateHandler = require("./jsmoduler/htmltemplateHandler.js");

var $ = require("jquery");

$(function () {

    //Jquery div
    var _userid = $('.kk_aj_CurrentUserid').html();
    var _rollid = $('.kk_aj_CurrentRollid').html();
    var _pageType = $('.kk_aj_CurrentPageType').html();

    // start eventhandler -----------------------------
    registerJqueryEvents.jqueryEVENTS(_userid);
    // end eventhandler

    var init = function () {
        console.log("1. init körs");
        
        loadpageHandler.pageloader(_pageType);


        //ServiceHandler.injecttemplate("test", "0", function (data) {
        //    console.log("4. servicen hämtar Templaten");
        //    templateHandler.injecthtmltemplate('.kk_aj_profile', 'kk_aj_profile.txt', data);
        //})

        //console.log("1.init debug körs");
        //ServiceHandler.injecttemplate("test", "0", function (data) {
        //    console.log("4. servicen hämtar debug Templaten");
        //    templateHandler.injecthtmltemplate('.kk_aj_topNav_message_menu', 'kk_aj_topNav_message_menu.txt', data);
        //})

    }
    init();
    //$("body").attr('style','background:#fff;')
    //    .append("funkar! Webpack och concat");
    //msg.testar("ja du det funkar med Webpack och concat");
});
