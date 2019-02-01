var appsettings = require("./appSettings.js");
var registerJqueryEvents = require("./eventhandler.js");
module.exports = {
    inithelper: ""

}
// ANSÖKNINGAR TEMPLATE HELPER---------------------------------------------
// används i: kk_aj_ansokningarLista.txt

// kollar om ansökningar är lästa eller ej
Handlebars.registerHelper('ifLast', function (object) {        
    if (object === "nej") {
        return '<i class="fa fa-star text-yellow last"></i><span class="kk_aj_typ">1</span>';
    } else {
        return '<i class="fa fa-star-o text-yellow ejlast"></i><span class="kk_aj_typ">2</span>';
    }    
});
Handlebars.registerHelper('getFlag', function (read, pub, typ) {

    switch (typ) {
        case "Ny":
            if (read === "nej") {
                return '<i class="fa fa-star text-yellow last"></i><span class="kk_aj_typ">1</span>';
            } else {
                return '<i class="fa fa-star-o text-yellow ejlast"></i><span class="kk_aj_typ">2</span>';
            }
            break;
        case "Underbehandling":
            if (read === "nej") {
                return '<i class="fa fa-star text-yellow last"></i><span class="kk_aj_typ">1</span>';
            } else {
                return '<i class="fa fa-star-o text-yellow ejlast"></i><span class="kk_aj_typ">2</span>';
            }
            break;
        case "Nekad":
            if (read === "nej") {
                return '<i class="fa fa-star text-yellow" ></i><span class="kk_aj_typ">2</span>';
            } else {
                return '<i class="fa fa-exclamation text-red" aria-hidden="true"></i><span class="kk_aj_typ">4</span>';
            }
            break;
        case "Arkiv":          
            return '<i class="fa fa-lock text-black"></i><span class="kk_aj_typ">6</span>';
            break;

        default:
            if (read === "nej") {
                return '<i class="fa fa-star text-yellow" ></i><span class="kk_aj_typ">2</span>';
            } else {
                if (pub === "nej") {
                    return '<i class="fa fa-exclamation text-red" ></i><span class="kk_aj_typ">4</span>';
                } else {
                    return '<i class="fa fa-flag-o text-green"></i><span class="kk_aj_typ">5</span>';
                }
            }
    };
});
// kollar om ansökningar har bilaga eller ej
Handlebars.registerHelper('ifBilaga', function (bilagaobj, bilagaurl) {
    if (bilagaobj === "ja") {
        return '<a href="' + bilagaurl + '"><i class="fa fa-paperclip"></i></a>';
    } else {
        return '';
    }
});

// kollar om ansökningar har bilaga eller ej
Handlebars.registerHelper('iftype', function (ansoktyp) {
    var changedtyp = "";
    var changeclass = "";
    var loweranskotyp = ansoktyp.toLowerCase();
  
    if (loweranskotyp == "nekad") {
        loweranskotyp = "denied";
    };
    switch (loweranskotyp) {
        case "ny":
            changedtyp = "kk_aj_ansokningarView"
            changeclass = '<div class="kk_aj_ansokanboxheader box-header with-border label-primary">';
            break;
        case "underbehandling":
            changedtyp = "kk_aj_underbehandlingansokningarView"
            changeclass = '<div class="kk_aj_ansokanboxheader box-header with-border label-warning">';
            break;
        case "approved":
            changedtyp = "kk_aj_approvedansokningarView"
            changeclass = '<div class="kk_aj_ansokanboxheader box-header with-border label-success">';
            break;
        case "denied":
            changedtyp = "kk_aj_deniedansokningarView"
            changeclass = '<div class="kk_aj_ansokanboxheader box-header with-border label-danger">';
            break;
        case "arkiv":
            changedtyp = "kk_aj_archiveansokningarView"
            changeclass = '<div class="kk_aj_ansokanboxheader box-header with-border">';
            break;                  
    }         
    registerJqueryEvents.updatacontentheader(changedtyp, "detailview");
    return changeclass;
});

// kollar om ansökningar har bilaga eller ej
Handlebars.registerHelper('fixstatuscolor', function (Statustypid) {
   
    var statuscolor = "";
    switch (Statustypid) {
        case 1:
            statuscolor = '<span class="label label-primary">Ny</span>';            
            break;
        case 2:
            statuscolor = '<span class="label label-primary">Kommentar</span>';
            break;
        case 3:
            statuscolor = '<span class="label label-success">Godkänd</span>';
            break;
        case 4:
            statuscolor = '<span class="label label-danger">Nekad</span>';
            break;
        case 5:
            statuscolor = '<span class="label label-info">Ändrad</span>';
            break;
        case 6:
            statuscolor = '<span class="label label-success">Publicerad</span>';
            break;
        case 7:
            statuscolor = '<span class="label label-warning">Avpublicerad</span>';
            break;
        case 8:
            statuscolor = '<span class="label label-info">Arkiverad</span>';
            break;
        case 9:
            statuscolor = '<span class="label label-default">Event</span>';
            break;
        case 10:
            statuscolor = '<span class="label label-danger">Borttagen</span>';
            break;
        case 11:
            statuscolor = '<span class="label label-warning">Behandlas</span>';
            break;
        default:
            statuscolor = '<span class="label label-default">Event</span>';
            break;
    }
    
    return statuscolor;
});

// kollar om bilden är ny eller redan finns
Handlebars.registerHelper('imgfix', function (id, imgfile) {
    if (imgfile.indexOf(id) == -1) {
        imgfile = id + "_" + imgfile;
    }
    return imgfile;
});

//Handlebars.registerHelper('ifdetailstatus', function (currarrstatus, options) {
//    var tmpcurrarrstatus = currarrstatus.toLowerCase();
//    if (tmpcurrarrstatus === "1") {
//        return options.fn(this);
//    };
//});

//Handlebars.registerHelper('ifdetailstatusList', function (currarrstatus, options) {
//    var tmpcurrarrstatus = currarrstatus.toLowerCase();
//    if (tmpcurrarrstatus != "1") {
//        return options.fn(this);
//    };
//});
// kollar om ansökningar har bilaga eller ej
Handlebars.registerHelper('fixStatuscolorlabel', function (ansokningstatus) {
    var tmpstatus = ansokningstatus.toLowerCase();
    var statuscolorClass = "";
    switch (tmpstatus) {
        case "godkänd":
            statuscolorClass = '<span class="label label-success">Godkänd</span>'; //'text-green';
            break;
        case "nekad":
            statuscolorClass = '<span class="label label-danger">Nekad</span>';//'text-danger';
            break;
        case "approved":
            statuscolorClass = '<span class="label label-success">Godkänd</span>'; //'text-green';
            break;
        case "nekad":
            statuscolorClass = '<span class="label label-danger">Nekad</span>';//'text-danger';
            break;
        case "ny":
            statuscolorClass = '<span class="label label-primary">Ny</span>'; // 'text-primary';
            break;
        case "kommentar":
            statuscolorClass = '<span class="label label-primary">Kommentar</span>'; // 'text-warning';
            break;
        case "ändrad":
            statuscolorClass = '<span class="label label-info">Ändrad</span>';// 'text-info';
            break;
        case "publicerad":
            statuscolorClass = '<span class="label label-success">Godkänd</span>';// 'text-success';
            break;
        case "avpublicerad":
            statuscolorClass = '<span class="label label-warning">Granskas</span>'; // 'text-warning';
            break;
        case "arkiverad":
            statuscolorClass = '<span class="label label-info">Arkiverad</span>';//'text-info';
            break;
        case "arkiv":
            statuscolorClass = '<span class="label label-info">Arkiverad</span>';//'text-info';
            break;
        case "event":
            statuscolorClass = '<span class="label label-info">Event</span>';//'text-info';
            break;
        case "borttagen":
            statuscolorClass = '<span class="label label-danger">Nekad</span>';//'text-danger';
            break;
        case "behandlas":
            statuscolorClass = '<span class="label label-warning">Behandlas</span>';//'text-warning';
            break;        
        default:
            statuscolorClass = '<span class="label label-info">Event</span>';//'text-info';
            break;
    }

    return statuscolorClass;
});

Handlebars.registerHelper('contenttext', function (text) {
    text = Handlebars.Utils.escapeExpression(text);   

    return new Handlebars.SafeString(text);
});

// kollar om ansökningar har bilaga eller ej
Handlebars.registerHelper('ifMedia', function (media) {
    var rethtml = "";
   
    switch (media.MediaTyp) {
        case "1":
            rethtml = "<hr><li class='row col-sm-12' style='padding-bottom: 2rem;'><div class='col-sm-12 col-md-2 mailbox-attachment-icon has-img'><img alt='" + media.MediaAlt + "' src='" + media.MediaUrl + "' style='max-width:100%;'/></div>";
            rethtml += "<div class='col-sm-12 col-md-10 '><a href='" + media.mediaLink + "' class='mailbox-attachment-name'> " + media.mediaTitle + "</a>";
            rethtml += "<div class='mailbox-attachment-size'>" + media.mediaBeskrivning + "</div></li>";

            break;
        case "2":
            if (isNaN(media.MediaUrl)) {
                urltoMovie = "https://www.youtube.com/embed/" + media.MediaUrl;
            } else {                
                urltoMovie = "https://player.vimeo.com/video/" + media.MediaUrl;
            };

            rethtml = "<hr><li class='row col-sm-12' ><div class='col-sm-12 col-md-2 mailbox-attachment-icon has-img'>";
            rethtml += "<iframe width='100%'  src='" + urltoMovie + "' frameborder='0' allowfullscreen></iframe></div>";
            rethtml += "<div class='col-sm-12 col-md-10 '><a href='" + media.mediaLink + "' class='mailbox-attachment-name'> " + media.mediaTitle + "</a>";
            rethtml += "<div class='mailbox-attachment-size'>" + media.mediaBeskrivning + "</div></li>";

            break;        
    }
    
    return rethtml;
});
// kollar om ansökningar har bilaga eller ej
Handlebars.registerHelper('ifEditMedia', function (mediatyp, mediaurl,mediaalt) {
    var rethtml = "";

    switch (mediatyp) {
        case "1":
            rethtml = "<img alt='" + mediaalt + "' src='" + mediaurl + "' style='max-width:200px;'/>";
            break;
        case "2":

            if (isNaN(mediaurl)) {
                urltoMovie = "https://www.youtube.com/embed/" + mediaurl;
            } else {
                urltoMovie = "https://player.vimeo.com/video/" + mediaurl;
            };

            rethtml = "<iframe width='198' height='131' src='" + urltoMovie + "' frameborder='0' allowfullscreen></iframe>";
            
            break;
    }

    return rethtml;
});
window.Handlebars.registerHelper('select', function (value, options) {
   
    var $el = $('<select />').html(options.fn(this));
    $el.find('[value="' + value + '"]').attr({ 'selected': 'selected' });
    return $el.html();
});

// kollar om ansökningar har bilaga eller ej

Handlebars.registerHelper("setChecked", function (value, currentValue) {
    if (value == currentValue) {
        return "checked='checked'"
    } else {
        return "";
    }
});
Handlebars.registerHelper("ifimgempty", function (imgsrc) {
    if(!imgsrc || 0 === imgsrc.length){
        return "/Portals/_default/Skins/kk_Admin_Acklay/img/userDefaultIcon.png";
    } else {
        return imgsrc;
    }
});

Handlebars.registerHelper("htmldecode", function (htmlval) {
    return $('<div/>').html(htmlval).text();
});
Handlebars.registerHelper("htmlencode", function (htmlval) {
    return $('<div/>').html(htmlval).html();
});


//används för att klippa in templates i en redan befintlig template hämtar templaten som sedan kan användas i registerpartial
Handlebars.getTemplate = function (templatefilenamn) {
    if (Handlebars.templates === undefined || Handlebars.templates[templatefilenamn] === undefined) {
        $.ajax({
            url: appsettings.htmltemplateURL +'/'+ templatefilenamn,
            success: function (data) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                Handlebars.templates[templatefilenamn] = Handlebars.compile(data);
            },
            async: false
        });
    }
    return Handlebars.templates[templatefilenamn];
};

Handlebars.registerPartial("deletefaktaAlert", Handlebars.getTemplate('kk_aj_helper_alert_deletefakta.txt'));
Handlebars.registerPartial("deletemediaAlert", Handlebars.getTemplate('kk_aj_helper_alert_deletemedia.txt'));
Handlebars.registerPartial("standardmotiveringarAlert", Handlebars.getTemplate('kk_aj_helper_standardmotiveringar.txt'));

// kollar om uppgifterna är fakta uppgifter eller underlag för bedömning
Handlebars.registerHelper('faktalist', function (fid, frub,fval) {    
    let rettext = "";
    if (fid <= 36 || fid >= 43) {
        rettext = "<p id='faktatypid" + fid + "'><b>" + frub + " : </b>" + fval + "</p>";
        if (fid == 25) {
            rettext += "<p><b>" + frub + "</b> : <a href='" + fval + "'>Ladda ner </a></p>";
        };
    };   
    return rettext;
});

// kollar om uppgifterna är faktabedomninglist uppgifter eller underlag för bedömning
Handlebars.registerHelper('listbedomningsfakta', function (arrid, listan) {
    var rettext = "";
    for (var itm in listan) {
        if (listan[itm].FaktaTypID >= 37 && listan[itm].FaktaTypID <= 42) {            
            if (listan[itm].FaktaTypID == 37) {
                
                if ((listan[itm].FaktaValue.indexOf("http://") != -1) || (listan[itm].FaktaValue.indexOf("https://") != -1)) {
                    rettext += "<p><b>" + listan[itm].Faktarubrik + "</b> : <a href='" + listan[itm].FaktaValue + "' target='_blank' >Gå till </a></p>";
                } else {
                    if (listan[itm].FaktaValue.indexOf("www.") != -1) {
                        rettext += "<p><b>" + listan[itm].Faktarubrik + "</b> : <a href='http://" + listan[itm].FaktaValue + "' target='_blank'>Gå till </a></p>";
                    } else {                   
                        rettext += "<p><b>" + listan[itm].Faktarubrik + "</b> : <a href='" + appsettings.detailmainimgurl + "/" + arrid + "_" + listan[itm].FaktaValue + "'target='_blank'>Ladda ner </a></p>";
                    };
                };

            } else {
                rettext += "<p id='faktatypid" + listan[itm].FaktaTypID + "'><b>" + listan[itm].Faktarubrik + " : </b>" + listan[itm].FaktaValue + "</p>";
            };
        };        
    }
    if (rettext == "") {
        rettext = "<p>Det finns inget underlag för bedömning registrerat</p>";
    };
    return rettext;
});
