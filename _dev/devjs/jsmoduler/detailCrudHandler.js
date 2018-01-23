var $ = require("jquery");
var appsettings = require("./appSettings.js");

var _requesteddata = {};
// Edit parametrar
//{
//    "arrid": "",
//    "contentid": "",
//    "rubrik": "",
//    "underrubrik": "",
//    "innehall": "",
//    "konstformid": "",
//    "arrangemangtypid": "",
//    "utovareid": "",
//    "publicerad": "",
//    "faktaid": "",
//    "faktaval": "",
//    "mediaid": "",
//    "mediaalt": "",
//    "mediafilename": "",
//    "mediafoto": "",
//    "mediasize": "",
//    "mediaurl": "",
//    "mediavald": "",
//    "mediatyp": ""
//}

module.exports = {
    detailEditMainContent: function (arrid, contentid, rubrik, underrubrik, innehall, konstformid, arrangemangtypid, utovareid,publicerad, callback) {
        var reqUrl = urlhelper("editcontent");

        _requesteddata.arrid = arrid;
        _requesteddata.contentid = contentid;
        _requesteddata.rubrik = rubrik;
        _requesteddata.underrubrik = underrubrik;
        _requesteddata.innehall = innehall;
        _requesteddata.konstformid = konstformid;
        _requesteddata.arrangemangtypid = arrangemangtypid;
        _requesteddata.utovareid = utovareid;
        _requesteddata.publicerad = publicerad;        
        apiajaxRequest(reqUrl, _requesteddata, function (data) {

            callback(data);
        });
    },
    detailArchiveArrangemang: function (arrid, userid,optionalmotivering) {
        alert(msg);
    },
    detailAddMedia: function (requesteddata, callback) {
        var reqUrl = urlhelper("addmedia");
        
        apiajaxRequest(reqUrl, requesteddata, function (data) {

            callback(data);
        });
    },
    detailAddFakta: function (arrid, editfaktaid, editfaktatext, callback) {
        var reqUrl = urlhelper("addfakta");

        _requesteddata.arrid = arrid;
        _requesteddata.faktaid = editfaktaid;
        _requesteddata.faktaval = editfaktatext;
                
        apiajaxRequest(reqUrl, _requesteddata, function (data) {

            callback(data);
        });
    },
    detailEditMedia: function (requesteddataObj, callback) {
        var reqUrl = urlhelper("editmedia");             

        apiajaxRequest(reqUrl, requesteddataObj, function (data) {

            callback(data);
        });
    },
    detailEditFakta: function (arrid, editfaktaid, editfaktatext, callback) {
        var reqUrl = urlhelper("editfakta");

        _requesteddata.arrid = arrid;
        _requesteddata.faktaid = editfaktaid;
        _requesteddata.faktaval = editfaktatext;
                
        apiajaxRequest(reqUrl, _requesteddata, function (data) {

            callback(data);
        });
    },
    detailDeleteMedia: function (arrid, mediaid, callback) {
        var reqUrl = urlhelper("delmedia");

        _requesteddata.arrid = arrid;
        _requesteddata.mediaid = mediaid;

        apiajaxRequest(reqUrl, _requesteddata, function (data) {

            callback(data);
        });
    },
    detailDeleteFakta: function (arrid, faktaid,callback) {
        var reqUrl = urlhelper("delfakta");

        _requesteddata.arrid = arrid;
        _requesteddata.faktaid = faktaid;

        apiajaxRequest(reqUrl, _requesteddata, function (data) {

            callback(data);
        });
    },
    utovareEdit: function (editdata, callback) {
        var reqUrl = appsettings.ServerApiURL + "/Api_v3/utovare/editutovare/user/" + appsettings.currentUserid + "/devkey/" + appsettings.devkeysnippet;
        var formdatan = new FormData();

        formdatan.append("UtovarID", editdata.UtovarID);
        formdatan.append("Organisation", editdata.Organisation);
        formdatan.append("Fornamn", editdata.Fornamn);
        formdatan.append("Efternamn", editdata.Efternamn);
        formdatan.append("Telefon", editdata.Telefon);
        formdatan.append("Adress", editdata.Adress);
        formdatan.append("Postnr", editdata.Postnr);
        formdatan.append("Ort", editdata.Ort);
        formdatan.append("Epost", editdata.Epost);
        formdatan.append("Kommun", editdata.Kommun);
        formdatan.append("Weburl", editdata.Weburl);
        formdatan.append("Beskrivning", editdata.Beskrivning);


        //var files = $("#kk_aj_utovareBildFile")[0].files;
        // Add the uploaded image content to the form data collection
        if (editdata.Bild.length > 0) {
            formdatan.append("Bild", editdata.Bild[0]);
        } else {
            formdatan.append("Bild", "");
        }

        apiajaxRequestUtovare(reqUrl, formdatan, function (data) {

            callback(data);
        });
    },
    detailImageEdit: function (imgdata,filnamn, callback) {

        // Make Ajax request with the contentType = false, and procesDate = false
        var ajaxRequest = $.ajax({
            type: "POST",
            url: appsettings.ServerApiURL + "/Api/uploadmedia/devkey/alf",
            contentType: false,
            processData: false,
            data: imgdata
        });

        ajaxRequest.done(function (xhr, textStatus) {
            callback(filnamn);
        });

    },
    adminbreakpoint: function (calltyp, urid, dateval, callback) {
        let currurl = appsettings.localOrServerURL + "/updatearrangemang";        
        switch (calltyp) {
            case "breakpoint":
                currurl += "/pubbrytpunkt/id/1/uid/1/val/" + dateval + "/devkey/" + appsettings.devkeysnippet;
                break;
            case "Mainbreakpoint":
                currurl += "/pubhuvudbrytpunkt/id/1/uid/1/val/" + dateval + "/devkey/" + appsettings.devkeysnippet;
                break;
        }
        $.ajax({
            async: true,
            type: "GET",
            url: currurl,
            dataType: "json",
            success: function (data) {
                console.log("Brytpunkt körs! typ: " + calltyp);
                callback(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                //console.log(xhr + ":: " + ajaxOptions + ":: " + thrownError);
                alert("Nått blev fel vid uppdatering av parametrarna!");
            }
        });

    },
    adminArrDELETE: function (arrid, userid, callback) {
        let currurl = appsettings.ServerApiURL + "/Api_v2/arrangemang/1/del/"+arrid+"/devkey/alf?type=json&callback=testar"
        apiajaxDELETE(currurl, function (data) {
            callback(data);
        });
    }

};


var apiajaxRequestUtovare = function (currurl, dataarr, callback) {

    //console.log("2. servicen hämtar data");
    $.ajax({
        async: true,
        type: "POST",
        url: currurl,
        dataType: "json",
        data: dataarr,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            console.log("Edit fakta updaterad: ");
            callback(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            //console.log(xhr + ":: " + ajaxOptions + ":: " + thrownError);
            alert("Nått blev fel vid uppdatering av parametrarna!");
        }
    });

}

var apiajaxRequest = function (currurl, dataarr, callback) {

    //console.log("2. servicen hämtar data");
    $.ajax({
        async: true,
        type: "POST",
        url: currurl,
        data: dataarr,
        success: function (data) {
            console.log("Edit fakta updaterad: ");
            callback(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            //console.log(xhr + ":: " + ajaxOptions + ":: " + thrownError);
            alert("Nått blev fel vid uppdatering av parametrarna!");
        }
    });

}

var apiajaxDELETE = function (currurl, callback) {

    //console.log("2. servicen hämtar data");
    $.ajax({
        async: true,
        type: "DELETE",
        url: currurl,        
        success: function (data) {
            console.log("Edit fakta updaterad: ");
            callback(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            //console.log(xhr + ":: " + ajaxOptions + ":: " + thrownError);
            alert("Nått blev fel vid uppdatering av parametrarna!");
        }
    });

}

var urlhelper = function (cmd) {

    return appsettings.detailediturl + "/" + cmd + "/val/" + appsettings.currentUserid + "/devkey/" + appsettings.devkeysnippet;

};
