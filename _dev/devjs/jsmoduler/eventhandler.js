var $ = require("jquery");
var appsettings = require("./appSettings.js");
var loadpageHandler = require("./pageloadhandler.js");

module.exports = {
    jqueryEVENTS: function (userid) {
        
        $('body').on('click', '.kk_aj_nyadansokningar', function () {
            //console.log('1-1. .kk_aj_nyadansokningar');            
            updateansokHeaderjquery("label-primary", "Nya ansökningar");
            loadpageHandler.pageloader("kk_aj_ansokningarView");
            return false;
        });

        $('body').on('click', '.kk_aj_approvedansokningar', function () {
            //console.log('1-1. .kk_aj_approvedansokningar');           
            updateansokHeaderjquery("label-success", "Godkända");
            loadpageHandler.pageloader("kk_aj_approvedansokningarView");
            return false;
        });

        $('body').on('click', '.kk_aj_deniedansokningar', function () {
            //console.log('1-1. .kk_aj_deniedansokningar');
            updateansokHeaderjquery("label-danger", "Nekade");
            loadpageHandler.pageloader("kk_aj_deniedansokningarView");
            return false;
        });

        $('body').on('click', '.kk_aj_archiveansokningar', function () {
            //console.log('1-1. .kk_aj_archiveansokningar');
            updateansokHeaderjquery("", "Arkiv");
            loadpageHandler.pageloader("kk_aj_archiveansokningarView");
            return false;
        });
    }
}

var updateansokHeaderjquery = function (classname, headertext) {
    $('.kk_aj_ansokningar').html('<tr><td><div class="kk_aj_loader"></div></td></tr>');

    $('.kk_aj_ansokanboxheader').attr('class', $('.kk_aj_ansokanboxheader').attr('class').replace(/(^|\s)label-\S+/g, '')).addClass(classname);
    $('.kk_aj_box-title').html(headertext);
    $('.kk_aj_ansoksearchform').attr('placeholder', 'Sök i ' + headertext);
    
};