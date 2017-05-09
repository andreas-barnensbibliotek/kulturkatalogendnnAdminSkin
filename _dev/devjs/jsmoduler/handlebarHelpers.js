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
    switch(ansoktyp){
        case "nya":
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
        case "archived":
            changedtyp = "kk_aj_archiveansokningarView"
            changeclass = '<div class="kk_aj_ansokanboxheader box-header with-border">';
            break;                  
    }         
    registerJqueryEvents.updatacontentheader(changedtyp, "detailview");
    return changeclass;
});