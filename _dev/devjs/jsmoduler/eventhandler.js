var $ = require("jquery");
var appsettings = require("./appSettings.js");
var loadpageHandler = require("./pageloadhandler.js");

module.exports = {
    jqueryEVENTS: function (userid) {
        
        $('body').on('click', '.kk_aj_nyadansokningar', function () {
            //console.log('1-1. .kk_aj_nyadansokningar');                 
            loadlistView("kk_aj_ansokningarView");
            return false;
        });

        $('body').on('click', '.kk_aj_approvedansokningar', function () {
            //console.log('1-1. .kk_aj_approvedansokningar');           
            loadlistView("kk_aj_approvedansokningarView");
            return false;
        });

        $('body').on('click', '.kk_aj_deniedansokningar', function () {
            //console.log('1-1. .kk_aj_deniedansokningar');
            loadlistView("kk_aj_deniedansokningarView");
            return false;
        });

        $('body').on('click', '.kk_aj_archiveansokningar', function () {
            //console.log('1-1. .kk_aj_archiveansokningar');
            loadlistView("kk_aj_archiveansokningarView");
            return false;
        });

        //ansökningsidor EVENT ---------------------------------------------------------------
        $('body').on('click', '.kk_aj_uppdateraannonser', function () {            
            var curpage = $('.kk_aj_box-title').attr('rel');            
            loadlistView(curpage);            
            return false;
        });

        $('body').on('click', '.kk_aj_markall', function (event) {                
                // Iterate each checkbox
                $('.kk_aj_chkboxAnnons').each(function () {
                    if (this.checked) {
                        this.checked = false;
                    } else {
                        this.checked = true;
                    }
                  
                });
           
        });
    }
}

var updateansokHeaderjquery = function (currentListView) {
    var classname = "";
    var headertext = "";
    var activeclass = "";

    switch (currentListView) {
        case "kk_aj_ansokningarView":            
            classname ="label-primary";
            headertext= "Nya ansökningar";
            activeclass=".kk_aj_nyansokanmenu";            
            break;
        case "kk_aj_approvedansokningarView":
            classname ="label-success";
            headertext= "Godkända";
            activeclass=".kk_aj_approvedansokanmenu"; 
            break;
        case "kk_aj_deniedansokningarView":
            classname ="label-danger";
            headertext="Nekade";
            activeclass=".kk_aj_deniedansokanmenu"; 
            break;
        case "kk_aj_archiveansokningarView":
            classname ="";
            headertext= "Arkiv";
            activeclass=".kk_aj_archiveansokanmenu";             
            break;
    };
    
    $('.kk_aj_ansokningar').html('<tr><td><div class="kk_aj_loader"></div></td></tr>');

    $('.kk_aj_ansokanboxheader').attr('class', $('.kk_aj_ansokanboxheader').attr('class').replace(/(^|\s)label-\S+/g, '')).addClass(classname);
    $('.kk_aj_box-title').html(headertext);
    $('.kk_aj_ansoksearchform').attr('placeholder', 'Sök i ' + headertext);

    $('.kk_aj_box-title').attr('rel', currentListView);

    $('.kk_aj_ansokanmenu li.active').removeClass('active');
    $(activeclass).addClass('active');
};


var loadlistView = function (getlistview) {
    updateansokHeaderjquery(getlistview);    
    loadpageHandler.pageloader(getlistview);
}

var updatemainannonscount = function () {
    var classtocheck = ".kk_aj_archiveansokningar";
    if ($(classtocheck + " span").length) {
        $(classtocheck + ' .label').html('2222');
    } else {
        $(classtocheck).append('</i> Nekade <span class="label label-danger pull-right kk_aj_deniedcount">65</span>');
    };

    //if (!$(".kk_aj_deniedansokningar span").length) {
    //    $('.kk_aj_deniedansokningar').append('</i> Nekade <span class="label label-danger pull-right kk_aj_deniedcount">65</span>');
    //} else {

    //    $('.kk_aj_deniedansokningar').append('funkar');

    //}

};

var markeraallaannonser = function () {
    
    
    
}