var appsettings = require("./jsmoduler/appSettings.js");
//var msg = require("./jsmoduler/main.js");
var handlebarshelpers = require("./jsmoduler/handlebarHelpers.js");
var loadpageHandler = require("./jsmoduler/pageloadhandler.js");
var registerJqueryEvents = require("./jsmoduler/eventhandler.js");
var registerJqueryMainPluginEvents = require("./jsmoduler/maineventpluginhandler.js");

var $ = require("jquery");
require('jquery-ui-dist/jquery-ui.js');

$(function () {

    //Jquery div
    var _userid = $('.kk_aj_CurrentUserid').html();
    var _rollid = $('.kk_aj_CurrentRollid').html();
    var _pageType = $('.kk_aj_CurrentPageType').html();
    var _url_id = "";

    // init base values
    appsettings.currentUserid = _userid;

    // start eventhandler -----------------------------
    registerJqueryEvents.jqueryEVENTS(_userid);
    registerJqueryMainPluginEvents.jqueryMainPluginEVENTS(_userid, _pageType);
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
            var index = sPageURL.indexOf("uid");
            if (index > 0) {
                urlParams.id = sPageURL[index + 1];
            };
            var index = sPageURL.indexOf("search");
            if (index > 0) {
                urlParams.search = sPageURL[index + 1];
            };
            var index = sPageURL.indexOf("p");
            if (index > 0) {
                urlParams.p = sPageURL[index + 1];
            };
        }
    };
       

    var init = function () {
        
        appsettings.currentUserid = _userid;
        checkparamsinurl();

        _url_id = urlParams.id
        if (_url_id) {
            appsettings.detailetemplate.detailid = _url_id;
            appsettings.detaillogtemplate.arrid = _url_id;
        }
        if (_pageType == "kk_aj_utovareView") {
            appsettings.utovaredetailtemplate.detailid = urlParams.uid;
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
        //    console.log("4. servicen hämtar Templaten");
        //    templateHandler.injecthtmltemplate('.kk_aj_profile', 'kk_aj_profile.txt', data);
        //})

        //console.log("1.init debug körs");
        //ServiceHandler.injecttemplate("test", "0", function (data) {
        //    console.log("4. servicen hämtar debug Templaten");
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
            //var ViewModel = function (first, last) {
            //    this.firstName = ko.observable(first);
            //    this.lastName = ko.observable(last);

            //    this.fullName = ko.computed(function () {
            //        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
            //        return this.firstName() + " " + this.lastName();
            //    }, this);
            //};

            //ko.applyBindings(new ViewModel("alg", "Earth")); // This makes Knockout get to work
           
            
    }
    init();
    //$("body").attr('style','background:#fff;')
    //    .append("funkar! Webpack och concat");
    //msg.testar("ja du det funkar med Webpack och concat");

});
