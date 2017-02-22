var $ = require("jquery");
var appsettings = require("./appSettings.js");
module.exports = {
    testar: function (msg) {
        alert(msg);
    },
    injecttemplate: function (callTyp, usrid, callback) {
        console.log("2. servicen hämtar data");
        $.ajax({
            type: "GET",
            url: appsettings.localOrServerURL +"/"+ callTyp + "/devkey/testar",
            dataType: "json",
            success: function (data) {
                console.log("3. servicen har hämtat datan");
                callback(data)
                
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr + ":: " + ajaxOptions + ":: " + thrownError);
                alert("Nått blev fel!");
            }
        });
       
    },
    injecttemplateDebug: function (callTyp, usrid, callback) {
        console.log("2. servicen hämtar debug data");

        var currurl="";
        switch(callTyp) {
            case "kk_aj_userinfojson":
                currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_userinfojson.aspx";
                break;
            case "kk_aj_lasteventjson":
                currurl="http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_lasteventjson.aspx";
                break;
            case "kk_aj_nyaansokjson":
                currurl="http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_nyaansokjson.aspx";
                break;
            case "kk_aj_approvedansokjson":
                currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_approvedansokjson.aspx";
                break;
            case "kk_aj_deniedansokjson":
                currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_deniedansokjson.aspx";
                break;
            case "kk_aj_archiveansokjson":
                currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_archiveansokjson.aspx";
                break;
            case "kk_aj_diariejson":
                currurl = "http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_diariejson.aspx";
                break;
            default:
                currurl = "http://kulturkatalog.kivdev.se:8080/Api_v1/test/devkey/testar";
                break;
        }

        $.ajax({
            type: "GET",
            //url: appsettings.localOrServerURL + "/" + callTyp + "/devkey/testar",
            url: currurl, //"http://kivdev.se/DesktopModules/barnensbiblService/kk_aj_admin_test/kk_aj_json.aspx",
            dataType: "json",
            success: function (data) {
                console.log("3. servicen har hämtat debugg datan from " + callTyp);
                callback(data)

            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr + ":: " + ajaxOptions + ":: " + thrownError);
                alert("Nått blev fel med debugdatan!");
            }
        });

    }
}

