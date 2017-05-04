var appsettings = require("./jsmoduler/appSettings.js");
//var msg = require("./jsmoduler/main.js");
var handlebarshelpers = require("./jsmoduler/handlebarHelpers.js");
var loadpageHandler = require("./jsmoduler/pageloadhandler.js");
var registerJqueryEvents = require("./jsmoduler/eventhandler.js");
//var templateHandler = require("./jsmoduler/htmltemplateHandler.js");

var $ = require("jquery");
require('jquery-ui-dist/jquery-ui.js');

$(function () {

    //Jquery div
    var _userid = $('.kk_aj_CurrentUserid').html();
    var _rollid = $('.kk_aj_CurrentRollid').html();
    var _pageType = $('.kk_aj_CurrentPageType').html();
    appsettings.currentUserid = _userid;
    // start eventhandler -----------------------------
    registerJqueryEvents.jqueryEVENTS(_userid);
    // end eventhandler


    //// ta hand om querystring parametrar och lagra dom i ett jsonobject urlparam.
    var urlParams = {};
    var checkparamsinurl = function () {
        var match,
            pl = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,           
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query = window.location.search.substring(1);

        urlParams = {};
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);
        
        if(!urlParams.sida){
            var sPageURL = window.location.href.split('/');
            var index = sPageURL.indexOf("sida");
            if(index > 0){
                urlParams.sida = sPageURL[index + 1];
            };
            var index = sPageURL.indexOf("id");
            if (index > 0) {
                urlParams.id = sPageURL[index + 1];
            };
            var index = sPageURL.indexOf("search");
            if (index > 0) {
                urlParams.search = sPageURL[index + 1];
            };
        }
    };
       

    var init = function () {
        
        appsettings.currentUserid = _userid;
        checkparamsinurl();

        if (urlParams.id) {
            appsettings.detailetemplate.detailid = urlParams.id;            
        }        

        
       
        //if (urlParams.search) {
        //    var setting = appsettings.pagerHandler;
        //    console.log('search ' + setting);

        //    var next = urlParams.search;
        //    console.log('search ' + next);

        //    if (setting.page_max_size >= next) {
        //        setting.page_currentlimit = parseInt(setting.page_currentlimit) + parseInt(setting.page_item_per_page);
        //        console.log("search setting.page_currentlimit " + setting.page_currentlimit + " setting.page_currentdataset: " + setting.page_currentdataset)
        //        console.log("search setting.page_currenttemplate " + setting.page_currenttemplate + " next " + next + ", setting.page_currentlimit " + setting.page_currentlimit);
        //        loadpageHandler.pagechanger(setting.page_currentdataset, setting.page_currenttemplate, next, setting.page_currentlimit);
        //    }

        //} else {
            if (urlParams.sida) {
                registerJqueryEvents.laddanysida(urlParams.sida);
            } else {
                loadpageHandler.pageloader(_pageType);
            }
        //}



        //ServiceHandler.injecttemplate("test", "0", function (data) {
        //    console.log("4. servicen h�mtar Templaten");
        //    templateHandler.injecthtmltemplate('.kk_aj_profile', 'kk_aj_profile.txt', data);
        //})

        //console.log("1.init debug k�rs");
        //ServiceHandler.injecttemplate("test", "0", function (data) {
        //    console.log("4. servicen h�mtar debug Templaten");
        //    templateHandler.injecthtmltemplate('.kk_aj_topNav_message_menu', 'kk_aj_topNav_message_menu.txt', data);
        //})
        

        //var cache = {};
        //$(".kk_aj_ansoksearchform").autocomplete({
        //    source: function (request, response) {
        //        $.ajax({
        //            type: "GET",
        //            url: "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_autocomplete.aspx",
        //            data: {cmdtyp: request.term.toLowerCase()},
        //            dataType: "json",
        //            success: function (data) {
        //                console.log(data.label);
        //                response(data.label);
        //            },
        //            error: function (result) {  }
        //        });
        //    },
        //    minLength: 1

        //    //minLength: 2,
        //    //source: function (request, response) {
        //    //    var term = request.term;
        //    //    if (term in cache) {
        //    //        response(cache[term]);
        //    //        return;
        //    //    }

        //    //    $.getJSON("http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_autocomplete.aspx", request, function (data, status, xhr) {
        //    //        cache[term] = data;
        //    //        response(data);
        //    //    });
        //    //}
        //});



    }
    init();
    //$("body").attr('style','background:#fff;')
    //    .append("funkar! Webpack och concat");
    //msg.testar("ja du det funkar med Webpack och concat");
});
