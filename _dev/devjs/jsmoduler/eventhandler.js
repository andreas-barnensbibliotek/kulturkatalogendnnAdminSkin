var $ = require("jquery");
var appsettings = require("./appSettings.js");
var loadpageHandler = require("./pageloadhandler.js");

module.exports = {
    jqueryEVENTS: function (userid) {
        var sortobj;

        $('body').on('click', '.kk_aj_nyadansokningar', function () {
            //console.log('1-1. .kk_aj_nyadansokningar'); 
            sortobj = { "tosort": "2", "order": "down", "status": "ansokningtitle" };                
            loadlistView("kk_aj_ansokningarView", sortobj);

            history.replaceState('', '', appsettings.basepageUri + '/KatalogenAnsokningar?sida=kk_aj_ansokningarView');

            return false;
        });

        $('body').on('click', '.kk_aj_approvedansokningar', function () {
            //console.log('1-1. .kk_aj_approvedansokningar');           
            loadlistView("kk_aj_approvedansokningarView");
            history.replaceState('', '', appsettings.basepageUri + '/KatalogenAnsokningar?sida=kk_aj_approvedansokningarView');
            return false;
        });

        $('body').on('click', '.kk_aj_deniedansokningar', function () {
            //console.log('1-1. .kk_aj_deniedansokningar');
            loadlistView("kk_aj_deniedansokningarView");
            history.replaceState('', '', appsettings.basepageUri + '/KatalogenAnsokningar?sida=kk_aj_deniedansokningarView');
            return false;
        });

        $('body').on('click', '.kk_aj_archiveansokningar', function () {
            //console.log('1-1. .kk_aj_archiveansokningar');
            loadlistView("kk_aj_archiveansokningarView");
            history.replaceState('', '', appsettings.basepageUri + '/KatalogenAnsokningar?sida=kk_aj_archiveansokningarView');
            return false;
        });

        //ansökningsidor Pager EVENT ---------------------------------------------------------------
        $('body').on('click', '.kk_aj_listannonsnext', function () {
            var setting = appsettings.pagerHandler;

            var next = setting.page_currentlimit;            
            if (setting.page_max_size >= next) {
                setting.page_currentlimit = parseInt(setting.page_currentlimit) + parseInt(setting.page_item_per_page);
                loadpageHandler.pagechanger(setting.page_currentdataset, setting.page_currenttemplate, next, setting.page_currentlimit);
            }
            return false;
        });

        $('body').on('click', '.kk_aj_listannonsprev', function () {
            var setting = appsettings.pagerHandler;
           
            var pre = setting.page_currentlimit-(2*setting.page_item_per_page);
            if(pre>=0) { 
                setting.page_currentlimit = parseInt(setting.page_currentlimit) - parseInt(setting.page_item_per_page);
                loadpageHandler.pagechanger(setting.page_currentdataset, setting.page_currenttemplate, pre, setting.page_currentlimit);
            }
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

        $('body').on('click', '.kk_aj_sortutovare', function (event) {
            var curpage = $('.kk_aj_box-title').attr('rel');
            if ($('.kk_aj_sortutovare i').hasClass('fa-caret-down')) {                
                sortobj = { "tosort": "ansokningtitle", "order": "up"};
                loadlistView(curpage, sortobj);
                $('.kk_aj_sortutovare i').removeClass('fa-caret-down').addClass('fa-caret-up');
            } else {
                sortobj = { "tosort": "ansokningtitle", "order": "down" };
                loadlistView(curpage, sortobj);
                $('.kk_aj_sortutovare i').removeClass('fa-caret-up').addClass('fa-caret-down');                
            };            
            return false;
        });

        $('body').on('click', '.kk_aj_sortrubrik', function (event) {            
            var curpage = $('.kk_aj_box-title').attr('rel');
            if ($('.kk_aj_sortrubrik i').hasClass('fa-caret-down')) {
                sortobj = { "tosort": "ansokningutovare", "order": "up" };
                loadlistView(curpage, sortobj);
                $('.kk_aj_sortrubrik i').removeClass('fa-caret-down').addClass('fa-caret-up');
            } else {
                sortobj = { "tosort": "ansokningutovare", "order": "down" };
                loadlistView(curpage, sortobj);
                $('.kk_aj_sortrubrik i').removeClass('fa-caret-up').addClass('fa-caret-down');
            };
            return false;
        });

        $('body').on('click', '.kk_aj_sortdatum', function (event) {
            var curpage = $('.kk_aj_box-title').attr('rel');
            if ($('.kk_aj_sortdatum i').hasClass('fa-caret-down')) {
                sortobj = { "tosort": "ansokningdate", "order": "up" };
                loadlistView(curpage, sortobj);
                $('.kk_aj_sortdatum i').removeClass('fa-caret-down').addClass('fa-caret-up');
            } else {
                sortobj = { "tosort": "ansokningdate", "order": "down" };
                loadlistView(curpage, sortobj);
                $('.kk_aj_sortdatum i').removeClass('fa-caret-up').addClass('fa-caret-down');
            };
            return false;
        });
        $('body').on('click', '.kk_aj_detailback', function (event) {
            history.back(-1);
            return false;
        });
       

    },
    laddanysida: function (sidvy) {
        loadlistView(sidvy);
    },
    updatacontentheader: function (listview, options) {
        updateansokHeaderjquery(listview, options);
    }

}

var updateansokHeaderjquery = function (currentListView, options) {
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
    
   
    if (options != "detailview") {
        $('.kk_aj_ansokningar').html('<tr><td><div class="kk_aj_loader"></div></td></tr>');
        $('.kk_aj_ansokanboxheader').attr('class', $('.kk_aj_ansokanboxheader').attr('class').replace(/(^|\s)label-\S+/g, '')).addClass(classname);
        $('.kk_aj_box-title').html(headertext);
        $('.kk_aj_ansoksearchform').attr('placeholder', 'Sök i ' + headertext);

        $('.kk_aj_box-title').attr('rel', currentListView);
    }
    

    $('.kk_aj_ansokanmenu li.active').removeClass('active');
    $(activeclass).addClass('active');
};


var loadlistView = function (getlistview, sortobj) {
    updateansokHeaderjquery(getlistview);    
    loadpageHandler.pageloader(getlistview, sortobj);
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

