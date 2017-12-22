
var $ = require("jquery");
require('jquery-ui-dist/jquery-ui.js');
var appsettings = require("./appSettings.js");
var loadpageHandler = require("./pageloadhandler.js");

var _desktopmoduleURL = "/KatalogenAnsokningar"; //"/KulturkatalogenAdmin/KatalogenAnsokningar"
var jsautocomplete = require("./externalplugin/autocomplete.js");
var detailCrudHandler = require("./detailCrudHandler.js");

module.exports = {
    jqueryEVENTS: function (userid) {
        var sortobj;
        // sätt upp alla kontroller här så att searchload minimeras
        //var _arrid_kontroll = $('#kk_aj_arridtxt');
        $('.kk_aj_markall').hide();
        $('.kk_aj_denieannons').hide();
        $('.kk_aj_approveannons').hide();
        $('.kk_aj_chkboxAnnons').hide();
       
        
        $('body').on('click', '.kk_aj_nyadansokningar', function () {
            //console.log('1-1. .kk_aj_nyadansokningar'); 
            resetsearchformdata();
            sortobj = { "tosort": "2", "order": "down", "status": "ansokningtitle" };                
            loadlistView("kk_aj_ansokningarView", sortobj);

            //history.pushState('1', '', appsettings.basepageUri + '/KatalogenAnsokningar?sida=kk_aj_ansokningarView');
            history.pushState('1', '', appsettings.basepageUri + _desktopmoduleURL + '?sida=kk_aj_ansokningarView');
          
            return false;
        });

        $('body').on('click', '.kk_aj_approvedansokningar', function () {
            //console.log('1-1. .kk_aj_approvedansokningar');   
            resetsearchformdata();
            loadlistView("kk_aj_approvedansokningarView");
            history.pushState('2', '', appsettings.basepageUri + _desktopmoduleURL + '?sida=kk_aj_approvedansokningarView');
            $('.kk_aj_approveannons').hide();
            return false;
        });

        $('body').on('click', '.kk_aj_deniedansokningar', function () {
            resetsearchformdata();
            //console.log('1-1. .kk_aj_deniedansokningar');
            loadlistView("kk_aj_deniedansokningarView");
            history.pushState('3', '', appsettings.basepageUri + _desktopmoduleURL + '?sida=kk_aj_deniedansokningarView');
                    
            return false;
        });

        $('body').on('click', '.kk_aj_archiveansokningar', function () {
            resetsearchformdata();
            //console.log('1-1. .kk_aj_archiveansokningar');
            loadlistView("kk_aj_archiveansokningarView");
            history.pushState('4', '', appsettings.basepageUri + _desktopmoduleURL + '?sida=kk_aj_archiveansokningarView');
           
            return false;
        });
        
        ////////////////////////////////////////////////////////////////////////////////////////////////
        //ansökningsidor Pager EVENT ---------------------------------------------------------------
        ////////////////////////////////////////////////////////////////////////////////////////////////

        $('body').on('click', '.kk_aj_listannonsnext', function () {
            var searchpagetyp = $('.kk_aj_box-title').attr('rel');
            var setting = appsettings.pagerHandler;
           
            var next = setting.page_currentlimit;
            setting.page_currentpage = Math.ceil(next / parseInt(setting.page_item_per_page)) +1;
            loadpageHandler.pagetotalupdater();
            if (setting.page_max_size >= next) {
                setting.page_currentlimit = parseInt(setting.page_currentlimit) + parseInt(setting.page_item_per_page);
                history.pushState('pages', '', appsettings.basepageUri + _desktopmoduleURL +'?sida=' + searchpagetyp + '&p=' + next);

                loadpageHandler.pagechanger(setting.page_currentdataset, setting.page_currenttemplate, next, setting.page_currentlimit);
            }
            return false;
        });

        $('body').on('click', '.kk_aj_listannonsprev', function () {
            var searchpagetyp = $('.kk_aj_box-title').attr('rel');
            var setting = appsettings.pagerHandler;

            var pre = setting.page_currentlimit - (2 * setting.page_item_per_page);
            setting.page_currentpage = Math.ceil(pre / parseInt(setting.page_item_per_page)) +1;
            loadpageHandler.pagetotalupdater();

            if (pre >= 0) {
                setting.page_currentlimit = parseInt(setting.page_currentlimit) - parseInt(setting.page_item_per_page);
                history.pushState('p', '', appsettings.basepageUri +  _desktopmoduleURL +'?sida=' + searchpagetyp + '&p=' + pre);
                loadpageHandler.pagechanger(setting.page_currentdataset, setting.page_currenttemplate, pre, setting.page_currentlimit);
            }
            return false;
        });

        ////////////////////////////////////////////////////////////////////////////////////////////////
        // Edit Detailvy ------------------------------------------------------------------------------
        ////////////////////////////////////////////////////////////////////////////////////////////////

        $('body').on('click', '.kk_aj_detailbackfromEdit', function () {
            console.log("testar detta: " +userid)
            loadlistView("kk_aj_detailView");
            return false;
        });
       
        $('body').on('click', '.kk_aj_detailedit', function () {            
            console.log("testar detta: " + userid);
            appsettings.detailEdittemplate.detailid = appsettings.detailetemplate.detailid
            loadlistView("kk_aj_detailEditView", "", userid);

            return false;
        });

        ////////////////////////////////////////////////////////////////////////////////////////////////
        //ansökningsidor EVENT ---------------------------------------------------------------
        ////////////////////////////////////////////////////////////////////////////////////////////////
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

        $('body').on('click', '.kk_aj_sortrubrik', function (event) {
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

        $('body').on('click', '.kk_aj_sortutovare', function (event) {
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

        $('body').on('click', '.kk_aj_sortkonstform', function (event) {
            var curpage = $('.kk_aj_box-title').attr('rel');
            if ($('.kk_aj_sortkonstform i').hasClass('fa-caret-down')) {
                sortobj = { "tosort": "ansokningkonstform", "order": "up" };
                loadlistView(curpage, sortobj);
                $('.kk_aj_sortkonstform i').removeClass('fa-caret-down').addClass('fa-caret-up');
            } else {
                sortobj = { "tosort": "ansokningkonstform", "order": "down" };
                loadlistView(curpage, sortobj);
                $('.kk_aj_sortkonstform i').removeClass('fa-caret-up').addClass('fa-caret-down');
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
       
        $('body').on('click', '.mailbox-name a', function (event) {
            var arrid = $(this).attr('rel');

            if (arrid === "0") { return false; };

            var isNotRead = $('.mailbox-star[rel="' + arrid + '"] i').hasClass('fa-star')
            if (isNotRead) {
                event.preventDefault();
                var arrid = $(this).attr('rel');
                loadpageHandler.pageParameterUpdater("UpdateLookedAtParam", appsettings.currentUserid, arrid, "ja", function () {
                    location.href = event.currentTarget.getAttribute('href');
                });
            };            
        });

        $('body').on('click', '.mailbox-subject a', function (event) {
            var arrid = $(this).attr('rel');
            if (arrid === "0") { return false; };

            var isNotRead =$('.mailbox-star[rel="'+ arrid +'"] i').hasClass('fa-star')
            if (isNotRead) {
                event.preventDefault();
                var arrid = $(this).attr('rel');
                loadpageHandler.pageParameterUpdater("UpdateLookedAtParam", appsettings.currentUserid, arrid, "ja", function () {
                    location.href = event.currentTarget.getAttribute('href');
                });
            };            
        });

        $('body').on('click', '.kk_aj_ansoksearchformSubmit', function (event) {
            var arrstat = $('.kk_aj_ansoksearchform').attr('rel');
            var searchtyp = $('.kk_aj_ansoksearchform').val();
            var convertarrstat = arrstat.toLowerCase();
            if (convertarrstat == "nekad") {
                arrstat = "denied";
            };             
            if (searchtyp) {
                switch (arrstat) {
                    case "nya":
                        appsettings.searchansokningartemplate.nya.searchstr = searchtyp;
                        loadlistView("kk_aj_search_nyaansokningarView", sortobj, "");
                        history.pushState('', '', appsettings.basepageUri + _desktopmoduleURL + '?sida=kk_aj_search_nyaansokningarView&search=' + searchtyp);
                        break;
                    case "approved":
                        appsettings.searchansokningartemplate.approved.searchstr = searchtyp;
                        loadlistView("kk_aj_search_approvedansokningarView", sortobj, "");
                        history.pushState('', '', appsettings.basepageUri + _desktopmoduleURL + '?sida=kk_aj_search_approvedansokningarView&search=' + searchtyp);
                        break;
                    case "denied":
                        appsettings.searchansokningartemplate.denied.searchstr = searchtyp;
                        loadlistView("kk_aj_search_deniedansokningarView", sortobj, "");
                        history.pushState('', '', appsettings.basepageUri + _desktopmoduleURL + '?sida=kk_aj_search_deniedansokningarView&search=' + searchtyp);
                        break;
                    case "archive":
                        appsettings.searchansokningartemplate.archive.searchstr = searchtyp;
                        loadlistView("kk_aj_search_archiveansokningarView", sortobj, "");
                        history.pushState('', '', appsettings.basepageUri + _desktopmoduleURL + '?sida=kk_aj_search_archiveansokningarView&search=' + searchtyp);
                        break;
                }
            } else {
                $('.kk_aj_ansoksearchform').focus();
            };
            return false;
           
        });
        
        ////////////////////////////////////////////////////////////////////////////////////////////////
        //detaljvy event -------------------------------------------------------------------------------
        ////////////////////////////////////////////////////////////////////////////////////////////////

        $('body').on('click', '.kk_aj_addmotivering', function (event) {
            if ($('#faktatypid_1').length >0) {
                $('#kk_aj_arrangorstod').attr('disabled', 'disabled');
                $('#kk_aj_arrangorstod').attr('style', "background-color:#ccc;");

            } else {
                $('#kk_aj_arrangorstod').attr('disabled', false);
                $('#kk_aj_arrangorstod').attr('style', "background-color:transparent");
            }
            $('.motiveringEditblock').toggle();
        })
        
        $('body').on('click', '.kk_aj_detailapproved', function (event) {
            var arrstodalredyexists = $('#faktatypid_1').length;
            var arrstodalredyexistsedit = 0;
            var motiveringbox = $(".motivering");
            var arrstordbox = $("#kk_aj_arrangorstod");
            //var arrid = $('.motiveringEditblock').attr('rel');
            var arrid = appsettings.detailetemplate.detailid;
            var checktext = motiveringbox.val();           
            var faktavalue = $("#kk_aj_arrangorstod :selected").text();

            if ($('.kk_aj_faktablockID[rel=1]')[0]) {
                arrstodalredyexistsedit = 1;
            }

            if (arrstodalredyexists > 0 || faktavalue != "" || arrstodalredyexistsedit == 1) { //kör            
                if (checktext != "") {
                    updateArrangemangMotivering("2", function () {

                        if (arrstodalredyexists > 0 || arrstodalredyexistsedit == 1 ) {
                            appsettings.detailEdittemplate.detailid = appsettings.detailetemplate.detailid
                            location.href = appsettings.basepageUri + _desktopmoduleURL + "?sida=kk_aj_approvedansokningarView";
                        } else {
                            var faktatypid = "1"
                            detailCrudHandler.detailAddFakta(arrid, faktatypid, faktavalue, function (data) {
                                appsettings.detailEdittemplate.detailid = appsettings.detailetemplate.detailid
                                location.href = appsettings.basepageUri + _desktopmoduleURL + "?sida=kk_aj_approvedansokningarView";
                                arrstordbox.removeClass('markborderRed');
                            });
                        };
                    });
                };
            };
            if (arrstodalredyexists > 0 || faktavalue != "" || arrstodalredyexistsedit == 1) {
                arrstordbox.removeClass('markborderRed');
            } else {                
                arrstordbox.addClass('markborderRed');
            }
            if (checktext == "") {
                motiveringbox.addClass('markborderRed');
            } else {
                motiveringbox.removeClass('markborderRed');
            }
            return false;
        });

        $('body').on('click', '.kk_aj_detaildenied', function (event) {            
                var motiveringbox = $(".motivering");
                var checktext = motiveringbox.val();
                if (checktext != "") {
                    updateArrangemangMotivering("3", function () {
                        location.href = appsettings.basepageUri + _desktopmoduleURL + "?sida=kk_aj_deniedansokningarView";
                    });
                } else {
                    motiveringbox.addClass('markborderRed');
                };
            return false;
        });

        $('body').on('click', '.kk_aj_detailkommentar', function (event) {
            var motiveringbox = $(".motivering");
            var checktext = motiveringbox.val();
            if (checktext != "") {
                updateArrangemangMotivering("1", function () { //log granska är 2, +1 läggs till i uppdatarrangemangMotivering()
                    $('.motiveringEditblock').toggle();
                    loadpageHandler.pageloader("updatelogView", "", "");
                });
            } else {
                motiveringbox.addClass('markborderRed');
            };
            return false;
        });


        $('body').on('keydown', '.motivering', function (event) {
            $('.motivering').removeClass('markborderRed');
        });
        ////////////////////////////////////////////////////////////////////////////////////////////////
        //detaljvy event END---------------------------------------------------------------------------
        ////////////////////////////////////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////////////////////////////////////
        //Detaljvy EDIT event START---------------------------------------------------------------------
        ////////////////////////////////////////////////////////////////////////////////////////////////
        $('body').on('click', '.kk_aj_nymediabutton', function (event) {
            $(".kk_aj_nymediabox").toggle(500);
            return false;
        });
        $('body').on('click', '#kk_aj_mediaBtnAvbryt', function (event) {
            $(".kk_aj_nymediabox").hide();
            return false;
        });
        $('body').on('click', '#kk_aj_mediaBtnNewCancel', function (event) {
            $(".kk_aj_nymediabox").hide(500);
            return false;
        });                

        $('body').on('click', '.kk_aj_btnaddfakta', function (event) {
            $(".kk_aj_addfaktablock").show();
            return false;
        });
        $('body').on('click', '.kk_aj_btnremovenewfakta', function (event) {
            $(".kk_aj_addfaktablock").hide();
            return false;
        });
        
        $('body').on('keydown', '#testauto', function (event) {
            $(this).autocomplete({                
                source: function (request, response) {
                    $.ajax({
                        url: appsettings.ServerApiURL + "/Api/helper/autocomplete/val/" + request.term + "/devkey/" + appsettings.devkeysnippet,
                        dataType: "json",                        
                        success: function (data) {
                            response(data.kk_aj_admin.Utovarelist);
                        }
                    });
                },
                minLength: 2,
                select: function (event, ui) {                    
                    $('#testauto').val(ui.item.Organisation);
                    $('.kk_aj_arrUtovareblock').attr("data", ui.item.UtovarID);
                    
                    $('.kk_aj_kontaktnamn').html(ui.item.Fornamn + " " + ui.item.Efternamn);
                    $('.kk_aj_kontaktadress').html(ui.item.Adress);
                    $('.kk_aj_kontaktpostnrort').html(ui.item.Postnr + " " + ui.item.Ort);
                    $('.kk_aj_kontaktkommun').html(ui.item.Kommun);

                    $('.kk_aj_kontaktorganisation').html(ui.item.Organisation);
                    $('.kk_aj_kontaktTelefon').html(ui.item.Telefon);
                    $('.kk_aj_kontaktEpost').html(ui.item.Epost);
                    $('.kk_aj_kontaktHemsida').html(ui.item.Weburl);
                    return false;
                }
            }).autocomplete("instance")._renderItem = function (ul, item) {
                return $("<li>")
                  .append("<div>" + item.Organisation + " - kontakt: "+ item.Fornamn + " " + item.Efternamn +  "</div>")
                  .appendTo(ul);
            };         
        });
        
        $('body').on('click', '.kk_aj_showpressentationsbild', function (event) {
            $('.kk_aj_pressentationsbildblock').toggle(500);
            return false;
        });
        

        $('body').on('click', '.kk_aj_SparaDetailEdit', function () {
            var data = new FormData();

            var arrid = $('#kk_aj_arridtxt').val();
            var contentid = $('#kk_aj_arrcontentid').attr("data");
            var uploadedfiles = $("#arr_UploadedImage").get(0).files;
            var filnamnet;

            data.append("arrid", arrid);
            data.append("contentid", contentid);
            data.append("cmd", "editcontent");
            data.append("userid", appsettings.currentUserid);
            
            data.append("rubrik", $('#kk_aj_rubriktext').val());
            data.append("underrubrik", $('#kk_aj_underrubriktext').val());          
            data.append("innehall", htmlEncode($('#kk_aj_contenttext').val()));
            data.append("konstformid", $('#kk_aj_konstform').val());
            data.append("arrangemangtypid", $('#kk_aj_arrtyp').val());
            data.append("utovareid", $('.kk_aj_arrUtovareblock').attr("data"));
            data.append("publicerad", $('input[name=optionsRadiospub]:checked').val());                      
            data.append("arralt", $('#arr_altfoto').val());
            data.append("arrsize", $('#arr_sizefoto').val());
            data.append("arrfoto", $('#arr_fotograf').val());
            data.append("Kontaktfornamn", $('#kk_aj_ansokningKontaktfornamn').val())
            data.append("KontaktEfternamn", $('#kk_aj_ansokningKontaktEfternamn').val())
            data.append("KontaktTelefon", $('#kk_aj_ansokningKontaktTelefon').val())
            data.append("KontaktEpost", $('#kk_aj_ansokningKontaktEpost').val())
            // Add the uploaded image content to the form data collection
            if (uploadedfiles.length > 0) {
                data.append("UploadedImage", uploadedfiles[0]);

                // skapa tmpfilnamn för imagelänken så att den kan visas direkt måste skickas med så att det visar när detailImageEdit skickar tillbaka sin callback
                filnamnet = arrid + "_" + uploadedfiles[0].name;
                //Ladda upp bilden

            } else {
                data.append("mediaimgageUrl", $('#kk_aj_currbild').attr("rel"));
            };

            detailCrudHandler.detailImageEdit(data, filnamnet, function (filnamn) {
                if (filnamn) {
                    var imgnewurl =  filnamn;
                    $('#kk_aj_currbild').attr("src", imgnewurl);
                };
                console.log("bilduppladdad: " + imgnewurl);
                $("#dialog-message_sparat").dialog({
                    modal: true,
                    buttons: {
                        Ok: function () { loadlistView("kk_aj_detailView");
                            $(this).dialog("close");
                        }
                    }
                });
            });

            return false;
        });
        
        $('body').on('click', '.stdmottext', function (e) {           
            $("#Motivering").val($(this).text());
            e.preventDefault();
        })
        
        // MainCONTENT HANDLERS STOPP---------------------------------------------------------------------------
        ////////////////////////////////////////////////////////////////////////////////////////////////
        // FAKTA HANDLERS START---------------------------------------------------------------------------
        $('body').on('click', '.kk_aj_faktaBtnEdit', function () {
            var arrid = $('#kk_aj_arridtxt').val();
            var faktaid = $(this).attr("data");
            var editval = $('.kk_aj_faktaEditValue[data=' + faktaid + ']').val();

            detailCrudHandler.detailEditFakta(arrid, faktaid, editval, function (data) {
                console.log("Detail Edit är skickat och värdena skall uppdaterasrid");
                appsettings.detailEdittemplate.detailid = appsettings.detailetemplate.detailid

                loadlistView("kk_aj_detailEditView", "", appsettings.currentUserid);
            });

            return false;
        });

        $('body').on('click', '#kk_aj_faktaBtnAdd', function () {
            var arrid = $('#kk_aj_arridtxt').val();
            var faktatypid = $('#kk_aj_faktatypid').val();
            var faktavalue = $('#kk_aj_faktaAddValue').val();
            
            detailCrudHandler.detailAddFakta(arrid, faktatypid, faktavalue, function (data) {

                appsettings.detailEdittemplate.detailid = appsettings.detailetemplate.detailid

                loadlistView("kk_aj_detailEditView", "", appsettings.currentUserid);
            });

            return false;
        });

        $('body').on('click', '.kk_aj_faktaBtnDel', function () {
            var arrid = $('#kk_aj_arridtxt').val();
            var faktaid = $(this).attr("data");

            $("#dialog-confirm").dialog({
                resizable: false,
                height: "auto",
                width: 400,
                modal: true,
                buttons: {
                    "Ta bort": function () {
                        detailCrudHandler.detailDeleteFakta(arrid, faktaid, function (data) {
                            appsettings.detailEdittemplate.detailid = appsettings.detailetemplate.detailid
                            loadlistView("kk_aj_detailEditView", "", userid);
                            
                        });
                        $(this).dialog("close");
                    },
                    Avbryt: function () {
                        $(this).dialog("close");
                    }
                }
            });            
            return false;
        });
        // FAKTA HANDLERS STOPP---------------------------------------------------------------------------
        ////////////////////////////////////////////////////////////////////////////////////////////////
        // MEDIA HANDLERS START---------------------------------------------------------------------------
        $('body').on('click', '.kk_aj_mediaBtnEdit', function () {
            var mediaid = $(this).attr("data");
            var _requesteddata = {};            
            _requesteddata.arrid = $('#kk_aj_arridtxt').val();
            _requesteddata.mediaid = mediaid;
            _requesteddata.mediaalt = $('.kk_aj_mediaalt[data=' + mediaid + ']').val();
            _requesteddata.mediafilename = $('.kk_aj_mediafilename[data=' + mediaid + ']').val();
            _requesteddata.mediafoto = $('.kk_aj_mediafoto[data=' + mediaid + ']').val();
            _requesteddata.mediaurl = fixmediaurl($('.kk_aj_mediaurl[data=' + mediaid + ']').val());                
            _requesteddata.mediasize = $('.kk_aj_mediasize[data=' + mediaid + ']').val();           
            _requesteddata.mediatyp = $('.kk_aj_mediatyp[data=' + mediaid + ']').val();
            _requesteddata.mediaTitle = $('.kk_aj_mediatitel[data=' + mediaid + ']').val();
            _requesteddata.mediaBeskrivning = $('.kk_aj_mediabeskrivning[data=' + mediaid + ']').val();
            _requesteddata.mediaLink = $('.kk_aj_medialink[data=' + mediaid + ']').val();
            _requesteddata.mediavald = "";

            detailCrudHandler.detailEditMedia(_requesteddata, function (data) {
                $("#dialog-message_sparat").dialog({
                    modal: true,
                    buttons: {
                        Ok: function () { loadlistView("kk_aj_detailView");
                            appsettings.detailEdittemplate.detailid = appsettings.detailetemplate.detailid
                            loadlistView("kk_aj_detailEditView", "", appsettings.currentUserid);
                            $(this).dialog("close");
                        }
                    }
                });                
            });

            return false;
        });

        var fixmediaurl = function (urltofix) {           
            return urltofix.replace("https://youtu.be/", "");            
        }

        $('body').on('click', '#kk_aj_mediaBtnAdd', function () {
            var _requesteddata = {};
            _requesteddata.arrid = $('#kk_aj_arridtxt').val();           
            _requesteddata.mediaalt = $('#kk_aj_nymediaAlt').val();
            _requesteddata.mediafilename = $('#kk_aj_nymediafilnamn').val();
            _requesteddata.mediafoto = $('#kk_aj_nymediafoto').val();
            _requesteddata.mediaurl = $('#kk_aj_nymediaUrl').val();
            _requesteddata.mediasize = $('#kk_aj_nymediasize').val();            
            _requesteddata.mediatyp = $('input[name=nyoptionsRadios]:checked').val();
            _requesteddata.mediaTitle = $('.kk_aj_nymediatitel').val();
            _requesteddata.mediaBeskrivning = $('.kk_aj_nymediabeskrivning').val();
            _requesteddata.mediaLink = $('.kk_aj_nymedialink').val();
            _requesteddata.mediavald = "";

            detailCrudHandler.detailAddMedia(_requesteddata, function (data) {
                appsettings.detailEdittemplate.detailid = appsettings.detailetemplate.detailid
                loadlistView("kk_aj_detailEditView", "", appsettings.currentUserid);
            });

            return false;
        });
        $('body').on('click', '.kk_aj_mediaBtnTabort', function () {
            var arrid = $('#kk_aj_arridtxt').val();
            var mediaid = $(this).attr("data");

            $("#dialog-confirm_media").dialog({
                resizable: false,
                height: "auto",
                width: 400,
                modal: true,
                buttons: {
                    "Ta bort": function () {
                        detailCrudHandler.detailDeleteMedia(arrid, mediaid, function (data) {
                            appsettings.detailEdittemplate.detailid = appsettings.detailetemplate.detailid
                            loadlistView("kk_aj_detailEditView", "", userid);

                        });
                        $(this).dialog("close");
                    },
                    Avbryt: function () {
                        $(this).dialog("close");
                    }
                }
            });
            return false;
        });
        // MEDIA HANDLERS STOPP---------------------------------------------------------------------------
        ////////////////////////////////////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////////////////////////////////////
        //Detaljvy EDIT event END-----------------------------------------------------------------------
        ////////////////////////////////////////////////////////////////////////////////////////////////

        $(window).on('popstate', function (e) {
            var match,
                pl = /\+/g,  // Regex for replacing addition symbol with a space
                search = /([^&=]+)=?([^&]*)/g,
                decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
                query = window.location.search.substring(1);

            urlParams = {};
            while (match = search.exec(query))
                urlParams[decode(match[1])] = decode(match[2]);

            if (urlParams.id) {
                appsettings.detailetemplate.detailid = urlParams.id;
                console.log("sida id= " + urlParams.id);
            };
            

            if (urlParams.p) {
                var setting = appsettings.pagerHandler;
                console.log('search ' + setting);

                var next = urlParams.p;
                console.log('search ' + next);

                if (setting.page_max_size >= next) {
                    setting.page_currentlimit = parseInt(setting.page_currentlimit) + parseInt(setting.page_item_per_page);
                    console.log("search setting.page_currentlimit " + setting.page_currentlimit + " setting.page_currentdataset: " + setting.page_currentdataset)
                    console.log("search setting.page_currenttemplate " + setting.page_currenttemplate + " next " + next + ", setting.page_currentlimit " + setting.page_currentlimit);
                    loadpageHandler.pagechanger(setting.page_currentdataset, setting.page_currenttemplate, next, setting.page_currentlimit);
                }

            } else {
                if (urlParams.sida) {
                    console.log("sida= " + urlParams.sida);
                    loadlistView(urlParams.sida);
                }
            }
        });


        ////////////////////////////////////////////////////////////////////////////////////////////////
        // UtovareEVENT START ////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////

        

        $('body').on('click', '.kk_aj_editUtovareDetail', function () {
            var utovareid = $(this).attr("data");

            history.pushState('', '', appsettings.basepageUri + '/katalogenUtovare?uid=' + utovareid + '');

            appsettings.utovaredetailtemplate.detailid = utovareid;
            loadpageHandler.pageloader("kk_aj_utovareView","",utovareid);            

            $('.kk_aj_utovaredetalj').show();
            $('.kk_aj_utovarelist').hide();
           
            return false;
        });
        $('body').on('click', '.kk_aj_utovaredetailback', function () {            
            history.back();
            $('.kk_aj_utovaredetalj').hide();
            $('.kk_aj_utovarelist').show();
        });


        $('body').on('click', '#kk_aj_utovareSave', function () {           
            var editdata = {
                "UtovarID": $("#kk_aj_utovareid").val(),
                "Organisation": $("#kk_aj_utovareOrganisation").val(),
                "Fornamn": $("#kk_aj_utovarefornamn").val(),
                "Efternamn": $("#kk_aj_utovareefternamn").val(),
                "Telefon": $("#kk_aj_utovaretelefon").val(),
                "Adress": $("#kk_aj_utovareadress").val(),
                "Postnr":$("#kk_aj_utovarepostnr").val(),
                "Ort": $("#kk_aj_utovareort").val(),
                "Epost":  $("#kk_aj_utovareepost").val(),
                "Kommun": $("#kk_aj_utovarekommun").val(),
                "Weburl": $("#kk_aj_utovareHemsida").val(),
                "Bild": $("#kk_aj_utovareBildFile")[0].files,
                "Beskrivning": $("#kk_aj_utovareBeskrivning").val()
            }; 
            var utovareid = editdata.UtovarID;

            if (validate(editdata)){
                
                detailCrudHandler.utovareEdit(editdata, function (data) {
                    appsettings.utovaredetailtemplate.detailid = utovareid;
                                loadpageHandler.pageloader("kk_aj_utovareView", "", utovareid);
                    $("#dialog-message_sparat").dialog({
                        modal: true,
                        buttons: {
                            Ok: function () {
                                
                                $(this).dialog("close");
                            }
                        }
                    });                    
                });
            };      
                        
            return false;
        });
        


        ////////////////////////////////////////////////////////////////////////////////////////////////
        // UtovareEVENT END ////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////
       




    },
    laddanysida: function (sidvy) {
        loadlistView(sidvy);
    },
    laddautovaresida: function (uid) {
        utovarehandler(uid);
    },
    updatacontentheader: function (listview, options) {
        updateansokHeaderjquery(listview, options);
    }
}

var updateansokHeaderjquery = function (currentListView, options) {
    var classname = "";
    var headertext = "";
    var activeclass = "";
    var searchtyp ="nya";
    $('.kk_aj_approveannons').hide();

    switch (currentListView) {
        case "kk_aj_ansokningarView":            
            classname ="label-primary";
            headertext= "Ansökningar";
            activeclass = ".kk_aj_nyansokanmenu";
            searchtyp = "nya";
            break;
        case "kk_aj_approvedansokningarView":
            classname ="label-success";
            headertext= "Godkända";
            activeclass = ".kk_aj_approvedansokanmenu";
            searchtyp = "approved";
            $('.kk_aj_approveannons').show();
            break;
        case "kk_aj_deniedansokningarView":
            classname ="label-danger";
            headertext="Nekade";
            activeclass = ".kk_aj_deniedansokanmenu";
            searchtyp = "denied";
            break;
        case "kk_aj_archiveansokningarView":
            classname ="";
            headertext= "Arkiv";
            activeclass = ".kk_aj_archiveansokanmenu";
            searchtyp = "archive";
            break;
        case "kk_aj_search_nyaansokningarView":
            classname = "label-primary";
            headertext = "Ansökningar - Sökresultat";
            activeclass = ".kk_aj_nyansokanmenu";
            searchtyp = "nya";
            break;
        case "kk_aj_search_approvedansokningarView":
            classname = "label-success";
            headertext = "Godkända - Sökresultat";
            activeclass = ".kk_aj_approvedansokanmenu";
            searchtyp = "approved";
            break;
        case "kk_aj_search_deniedansokningarView":
            classname = "label-danger";
            headertext = "Nekade - Sökresultat";
            activeclass = ".kk_aj_deniedansokanmenu";
            searchtyp = "denied";
         
            break;
        case "kk_aj_search_archiveansokningarView":
            classname = "";
            headertext = "Arkiv - Sökresultat";
            activeclass = ".kk_aj_archiveansokanmenu";
            searchtyp = "archive";
            break;
           
    };
    
   
    if (options != "detailview") {
        $('.kk_aj_ansokningar').html('<tr><td><div class="kk_aj_loader"></div></td></tr>');
        $('.kk_aj_ansokanboxheader').attr('class', $('.kk_aj_ansokanboxheader').attr('class').replace(/(^|\s)label-\S+/g, '')).addClass(classname);
        $('.kk_aj_box-title').html(headertext);
        $('.kk_aj_ansoksearchform').attr('placeholder', 'Sök i ' + headertext);
        $('.kk_aj_ansoksearchform').attr('rel', searchtyp);
        $('.kk_aj_box-title').attr('rel', currentListView);
    }
    

    $('.kk_aj_ansokanmenu li.active').removeClass('active');
    $(activeclass).addClass('active');
};


var loadlistView = function (getlistview, sortobj, val) {
    updateansokHeaderjquery(getlistview);
    console.log("sök getlistview: " + getlistview);
    loadpageHandler.pageloader(getlistview, sortobj,val);
}

var updatemainannonscount = function () {
    var classtocheck = ".kk_aj_archiveansokningar";
    if ($(classtocheck + " span").length) {
        $(classtocheck + ' .label').html('2222');
    } else {
        $(classtocheck).append('</i> Nekade <span class="label label-danger pull-right kk_aj_deniedcount">65</span>');
    };

};

var resetsearchformdata = function () {
    $('.kk_aj_ansoksearchform').val("");
};

var updateArrangemangMotivering = function (NyArrStatus, callback) {
    var tmpstatusid = parseInt(NyArrStatus) + 1;
   
    var postjson = {
        CmdTyp:"arrstat",
        Userid: appsettings.currentUserid,
        //Arrid: $('.motiveringEditblock').attr('rel'),
        Arrid: appsettings.detailetemplate.detailid,
        Logtypid:"1",
        Logstatusid: tmpstatusid,
        Logbeskrivning: $('.motivering').val(),          
        UpdValue:NyArrStatus
    };
    var arridt = postjson.Arrid
    loadpageHandler.pagePostParameterUpdater(postjson, function () {

        callback();        
    });
    
}

var validate= function(editdata){
    var ret= 0;
    if(!editdata.Organisation|| 0 === editdata.Organisation.length){
        $(".kk_aj_utovareOrganisation span").show().focus();
        ret += 1;
    }else{
        $(".kk_aj_utovareOrganisation span").hide();        
    };
    if(!editdata.Fornamn|| 0 === editdata.Fornamn.length){
        $(".kk_aj_utovarefornamn span").show().focus();
        ret += 1;
    }else{
        $(".kk_aj_utovarefornamn span").hide();
    };
    if(!editdata.Efternamn|| 0 === editdata.Efternamn.length){
        $(".kk_aj_utovareefternamn span").show().focus();
        ret += 1;
    }else{
        $(".kk_aj_utovareefternamn span").hide();
    };
    if(!editdata.Telefon|| 0 === editdata.Telefon.length){
        $(".kk_aj_utovaretelefon span").show().focus();
        ret += 1;
    }else{
        $(".kk_aj_utovaretelefon span").hide();
    };
    if(!editdata.Adress|| 0 === editdata.Adress.length){
        $(".kk_aj_utovareadress span").show().focus();
        ret += 1;
    }else{
        $(".kk_aj_utovareadress span").hide();
    };
    if(!editdata.Postnr|| 0 === editdata.Postnr.length){
        $(".kk_aj_utovarepostnr span").show().focus();
        ret += 1;
    }else{
        $(".kk_aj_utovarepostnr span").hide();
    };
    if(!editdata.Ort|| 0 === editdata.Ort.length){
        $(".kk_aj_utovareort span").show().focus();
        ret += 1;
    }else{
        $(".kk_aj_utovareort span").hide();
    };
    if(!editdata.Epost|| 0 === editdata.Epost.length){
        $(".kk_aj_utovareepost span").show().focus();
        ret += 1;
    }else{
        $(".kk_aj_utovareepost span").hide();
    };
    if(!editdata.Kommun|| 0 === editdata.Kommun.length){
        $(".kk_aj_utovarekommun span").show().focus();
        ret += 1;
    }else{
        $(".kk_aj_utovarekommun span").hide();
    };

    if (!editdata.Weburl || 0 === editdata.Weburl.length) {
        $(".kk_aj_utovareHemsida span").show().focus();
        ret += 1;
    } else {
        $(".kk_aj_utovareHemsida span").hide();
    };

    //if(!editdata.Beskrivning|| 0 === editdata.Beskrivning.length){
    //    $(".kk_aj_utovareBeskrivning span").show().focus();
    //    ret += 1;
    //}else{
    //    $(".kk_aj_utovareBeskrivning span").hide();
    //};

    if (ret > 0) {
        $(".kk_aj_utovareSave span").show();        
        return false;
    } else {
        $(".kk_aj_utovareSave span").hide();
        return true;
    };

};

var htmlEncode = function (value) {
    //create a in-memory div, set it's inner text(which jQuery automatically encodes)
    //then grab the encoded contents back out.  The div never exists on the page.
    return $('<div/>').text(value).html();
};
