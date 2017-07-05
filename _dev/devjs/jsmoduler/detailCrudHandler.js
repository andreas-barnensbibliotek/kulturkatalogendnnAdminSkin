﻿var $ = require("jquery");
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
    detailAddMedia: function (arrid, editalt, editfilename, mediafoto, editurl, editvald, editmediatyp, editmediasize, callback) {
        var reqUrl = urlhelper("addmedia");

        _requesteddata.arrid = arrid;        
        _requesteddata.mediaalt = editalt;
        _requesteddata.mediafilename = editfilename;
        _requesteddata.mediafoto = mediafoto;
        _requesteddata.mediaurl = editurl;
        _requesteddata.mediavald = editvald;
        _requesteddata.mediatyp = editmediatyp;
        _requesteddata.mediasize = editmediasize;      

        
        apiajaxRequest(reqUrl, _requesteddata, function (data) {

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
    detailEditMedia: function (arrid, mediaid, editalt, editfilename, mediafoto, editurl, editvald,editmediatyp, editmediasize, callback) {
        var reqUrl = urlhelper("editmedia");

        _requesteddata.arrid = arrid;
        _requesteddata.mediaid = mediaid;
        _requesteddata.mediaalt = editalt;
        _requesteddata.mediafilename = editfilename;
        _requesteddata.mediafoto = mediafoto;
        _requesteddata.mediaurl = editurl;        
        _requesteddata.mediavald = editvald;
        _requesteddata.mediatyp = editmediatyp;
        _requesteddata.mediasize = editmediasize;

        apiajaxRequest(reqUrl, _requesteddata, function (data) {

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
    }

};


var apiajaxRequest = function (currurl, dataarr, callback) {

    //console.log("2. servicen hämtar data");
    $.ajax({
        async: true,
        type: "POST",
        url: currurl,
        dataType: "json",
        data:dataarr,
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