var registerJqueryEvents = require("./eventhandler.js");
module.exports = {
    inithelper: ""

}
// ANSÖKNINGAR TEMPLATE HELPER---------------------------------------------
// används i: kk_aj_ansokningarLista.txt

// kollar om ansökningar är lästa eller ej
Handlebars.registerHelper('ifLast', function (object) {        
    if (object === "nej") {
        return '<i class="fa fa-star text-yellow" title="Ej läst"></i>';
    } else {
        return '<i class="fa fa-star-o text-yellow" title="Läst"></i>';
    }    
});
Handlebars.registerHelper('getFlag', function (read, pub, typ) {

    switch (typ) {
        case "Ny":
            if (read === "nej") {
                return '<i class="fa fa-star text-yellow" title="Ej läst"></i>';
            } else {
                return '<i class="fa fa-star-o text-yellow" title="Läst"></i>';
            }
            break;
        case "Nekad":
            if (read === "nej") {
                return '<i class="fa fa-star text-yellow" title="Nekad, ej läst"></i>';
            } else {
                return '<i class="fa fa-exclamation text-red" aria-hidden="true" title="Nekad, ej publicerad"></i>';
            }
            break;
        case "Arkiv":          
            return '<i class="fa fa-lock text-black" title="Arkiverad"></i>';
            break;

        default:
            if (read === "nej") {
                return '<i class="fa fa-star text-yellow" title="Publicerad, ej läst"></i>';
            } else {
                if (pub === "nej") {
                    return '<i class="fa fa-exclamation text-red" title="Ej publicerad"></i>';
                } else {
                    return '<i class="fa fa-flag-o text-green" title="Publicerad"></i>';
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
            statuscolor = '<span class="label label-warning">Granskas</span>';
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
            statuscolor = '<span class="label label">Arkiverad</span>';
            break;
        case 9:
            statuscolor = '<span class="label label-default">Event</span>';
            break;
        case 10:
            statuscolor = '<span class="label label-danger">Borttagen</span>';
            break;
        default:
            statuscolor = '<span class="label label-default">Event</span>';
            break;
    }
    
    return statuscolor;
});

Handlebars.registerHelper('ifdetailstatus', function (currarrstatus, options) {
    var tmpcurrarrstatus = currarrstatus.toLowerCase();
    if (tmpcurrarrstatus === "1") {
        return options.fn(this);
    };
});

Handlebars.registerHelper('ifdetailstatusList', function (currarrstatus, options) {
    var tmpcurrarrstatus = currarrstatus.toLowerCase();
    if (tmpcurrarrstatus != "1") {
        return options.fn(this);
    };
});
// kollar om ansökningar har bilaga eller ej
Handlebars.registerHelper('fixStatuscolorlabel', function (ansokningstatus) {
    var tmpstatus = ansokningstatus.toLowerCase();
    var statuscolorClass = "";
    switch (tmpstatus) {
        case "godkänd":
            statuscolorClass = '<span class="label label-primary">Ny</span>'; //'text-green';
            break;
        case "nekad":
            statuscolorClass = '<span class="label label-danger">Nekad</span>';//'text-danger';
            break;
        case "ny":
            statuscolorClass = '<span class="label label-primary">Ny</span>'; // 'text-primary';
            break;
        case "granskas":
            statuscolorClass = '<span class="label label-warning">Granskas</span>'; // 'text-warning';
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
        case "event":
            statuscolorClass = '<span class="label label-info">Event</span>';//'text-info';
            break;
        case "borttagen":
            statuscolorClass = '<span class="label label-danger">Nekad</span>;'//'text-danger';
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
            rethtml = "<li><span class='mailbox-attachment-icon has-img'><img alt='"+media.MediaAlt+"' src='"+media.MediaUrl+"' /></span>";
            rethtml += "<div class='mailbox-attachment-info'><a href='"+ media.MediaUrl +"' class='mailbox-attachment-name'><i class='fa fa-camera'></i> "+ media.MediaFilename +"</a>";
            rethtml += "<span class='mailbox-attachment-size'>";
            rethtml += media.MediaSize + "<a href='"+ media.MediaUrl +"' class='btn btn-default btn-xs pull-right'><i class='fa fa-cloud-download'></i></a>";
            rethtml += "</span></div></li>";
            break;
        case "2":
            rethtml = "<li><span class='has-img'>";
            rethtml += "<iframe width='198' height='131' src='"+ media.MediaUrl+"' frameborder='0' allowfullscreen></iframe>";
            rethtml += "</span><div class='mailbox-attachment-info'>";
            rethtml += "<a href='"+ media.MediaUrl+"' class='mailbox-attachment-name'><i class='fa fa-camera'></i> "+ media.MediaFilename+"</a>";
            rethtml += "<span class='mailbox-attachment-size'>"+ media.MediaSize+"<a href='"+ media.MediaUrl+"' class='btn btn-default btn-xs pull-right'>";
            rethtml += "<i class='fa fa-cloud-download'></i></a></span></div></li>";
            break;        
    }
    
    return rethtml;
});
// kollar om ansökningar har bilaga eller ej
Handlebars.registerHelper('ifEditMedia', function (mediatyp, mediaurl,mediaalt) {
    var rethtml = "";

    switch (mediatyp) {
        case "1":
            rethtml = "<img alt='" + mediaalt + "' src='" + mediaurl + "' />";
            break;
        case "2":
            rethtml = "<iframe width='198' height='131' src='" + mediaurl + "' frameborder='0' allowfullscreen></iframe>";
            
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