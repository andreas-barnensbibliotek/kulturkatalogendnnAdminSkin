var $ = require("jquery");
var appsettings = require("./appSettings.js");
module.exports = {
    testar: function (msg) {
        alert(msg);
    },
    updateparam: function (callTyp, usrid, arrid, val, callback) {
        var devkeysnippet = "alf?type=json&callback=testar";
        var currurl="";
        switch(callTyp) {
            case "UpdateLookedAtParam":
                //currurl = "/updatearrangemang/lookedat/id/2/uid/2/val/ja/devkey/alf?type=json&callback=testar;
                currurl = appsettings.localOrServerURL + "/updatearrangemang/lookedat/id/" + arrid + "/uid/" + usrid + "/val/" + val + "/devkey/" + devkeysnippet;
                break;
            case "UpdateArrstatusParam":
                //currurl = "/updatearrangemang/arrstat/id/2/uid/2/val/2/devkey/alf?type=json&callback=testar;
                currurl = appsettings.localOrServerURL + "/updatearrangemang/arrstat/id/" + arrid + "/uid/" + usrid + "/val/" + val + "/devkey/" + devkeysnippet;
                break;
            case "UpdatePublishedParam":
                //currurl = "/updatearrangemang/pub/id/2/uid/2/val/ja/devkey/alf?type=json&callback=testar;
                currurl = appsettings.localOrServerURL + "/updatearrangemang/pub/id/" + arrid + "/uid/" + usrid + "/val/" + val + "/devkey/" + devkeysnippet;
                break;
            default:
                currurl = "http://kulturkatalog.kivdev.se:8080/Api_v1/test/devkey/testar_help";
                break;
        }

        console.log("2. servicen hämtar data");
        $.ajax({
            async: true,
            type: "GET",            
            url: currurl,
            dataType: "json",
            success: function (data) {
                console.log("Parameter updaterad: " + callTyp);
                callback(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                //console.log(xhr + ":: " + ajaxOptions + ":: " + thrownError);
                alert("Nått blev fel vid uppdatering av parametrarna!");
            }
        });
       
    },
    updatePostparam: function (postjson, callback) {
        
        var currurl = appsettings.localOrServerURL + "/updatearrangemang/upd/devkey/alf";
             
        console.log("2. servicen POSTAR data"); 
        $.ajax({
            async: true,
            type: "POST",
            url: currurl,
            data: postjson,
            success: function (data) {
                console.log("Parameter updaterad: ");
                callback(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                //console.log(xhr + ":: " + ajaxOptions + ":: " + thrownError);
                alert("Nått blev fel vid uppdatering av parametrarna!");
            }
        });

    },
    injecttemplateDebug: function (callTyp, usrid, val, callback) {
        //console.log("4. servicen hämtar debug data ----->>> " + usrid);
        console.log("injecttemplateDebug: " + usrid);
        console.log("appsettings.currentUserid: " + appsettings.currentUserid);
        var currurl="";
        switch(callTyp) {
            case "kk_aj_userinfojson":
                //currurl = "http://localhost:60485/Api_v2/user/usrinfo/id/2/devkey/alf?type=json&callback=testar"
                currurl = appsettings.localOrServerURL + "/user/usrinfo/id/" + usrid + "/devkey/alf?type=json&callback=testar";
                //currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_userinfojson.aspx";
                break;
            case "kk_aj_lasteventjson":
                //currurl="http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_lasteventjson.aspx";
                //currurl="http://localhost:60485/Api_v2/arrangemang/bylatest/uid/4/typ/0/val/top5/devkey/alf?type=json&callback=testar";
                currurl = appsettings.localOrServerURL + "/arrangemang/bylatest/uid/" + usrid + "/typ/0/val/" + val + "/devkey/alf?type=json&callback=testar";

                break;
            case "kk_aj_nyaansokjson":                
                 currurl = appsettings.localOrServerURL + "/arrangemang/bystatus/uid/" + usrid + "/typ/1/devkey/alf?type=json&callback=testar";
                 break;
            case "kk_aj_approvedansokjson":
                //currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_approvedansokjson.aspx";
                currurl = appsettings.localOrServerURL +"/arrangemang/bystatus/uid/"+ usrid +"/typ/2/devkey/alf?type=json&callback=testar";
                break;
            case "kk_aj_deniedansokjson":
                //currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_deniedansokjson.aspx";
                currurl = appsettings.localOrServerURL +"/arrangemang/bystatus/uid/"+ usrid +"/typ/3/devkey/alf?type=json&callback=testar";
                break;
            case "kk_aj_archiveansokjson":
                //currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_archiveansokjson.aspx";
                currurl = appsettings.localOrServerURL +"/arrangemang/bystatus/uid/"+ usrid +"/typ/4/devkey/alf?type=json&callback=testar";
                break;
            case "kk_aj_diariejson":
                currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_diariejson.aspx";
                break;
            case "kk_aj_detailvyjson":
                //currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_detaljjson.aspx?id="+ val;
                currurl = appsettings.localOrServerURL +"/arrangemang/details/uid/" + usrid + "/typ/"+ val +"/devkey/alf?type=json&callback=testar";
                break;
            case "kk_aj_detailmotiveringloggjson":
                currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_detaljjson.aspx";
                break;
            case "kk_aj_topnavjson":
                //currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_topnavjson.aspx";
                currurl = appsettings.localOrServerURL + "/notify/get/id/" + usrid + "/devkey/alf?type=json&callback=testar";
                break;
            case "kk_aj_SearchNyaansokjson":
                //currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_deniedansokjson.aspx";                              
                var search = appsettings.searchansokningartemplate.nya.searchstr;
                currurl = appsettings.localOrServerURL + "/arrangemang/bysearch/uid/" + usrid + "/typ/1/val/"+ search +"/devkey/alf?type=json&callback=testar";
                break;
            case "kk_aj_SearchApprovedansokjson":
                //currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_deniedansokjson.aspx";                              
                var search = appsettings.searchansokningartemplate.approved.searchstr;
                currurl = appsettings.localOrServerURL + "/arrangemang/bysearch/uid/" + usrid + "/typ/2/val/" + search + "/devkey/alf?type=json&callback=testar";
                break;
            case "kk_aj_SearchDeniedansokjson":
                //currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_deniedansokjson.aspx";                              
                var search = appsettings.searchansokningartemplate.denied.searchstr;
                currurl = appsettings.localOrServerURL + "/arrangemang/bysearch/uid/" + usrid + "/typ/3/val/" + search + "/devkey/alf?type=json&callback=testar";
                break;
            case "kk_aj_SearchArchiveansokjson":
                //currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_deniedansokjson.aspx";                              
                var search = appsettings.searchansokningartemplate.archive.searchstr;
                currurl = appsettings.localOrServerURL + "/arrangemang/bysearch/uid/" + usrid + "/typ/4/val/" + search + "/devkey/alf?type=json&callback=testar";
                break;
            case "kk_aj_detailloggListjson":
                //currurl = "http://localhost:60485/Api_v2/log/byarrid/id/1/devkey/alf?type=json&callback=testar";
                currurl = appsettings.localOrServerURL + "/log/byarrid/id/" + val + "/devkey/alf?type=json&callback=testar";
                break;
            case "kk_aj_UpdateLookedAt":
                //currurl = "/updatearrangemang/lookedat/id/2/uid/2/val/ja/devkey/alf?type=json&callback=testar;
                currurl = appsettings.localOrServerURL + "/updatearrangemang/lookedat/id/" + val + "/uid/" + usrid + "/val/ja/devkey/alf?type=json&callback=testar";
                break;
            default:
                // resultat är en empty json response
                currurl =""
                break;
        }
        if (currurl != "") {

        $.ajax({
            type: "GET",
            //url: appsettings.localOrServerURL + "/" + callTyp + "/devkey/testar",
            url: currurl, //"kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_json.aspx",
            dataType: "json",
            success: function (data) {
                //console.log("5. servicen har hämtat debugg datan from " + callTyp);
                callback(data)

            },
            error: function (xhr, ajaxOptions, thrownError) {
                //console.log(xhr + ":: " + ajaxOptions + ":: " + thrownError);
                alert("Nått blev fel med debugdatan!");
            }
        });

        } else {
            var emptyjsonresponse = { "kk_aj_admin": { "status": "emptyjson" } };
            callback(emptyjsonresponse);
        }
    }
}

