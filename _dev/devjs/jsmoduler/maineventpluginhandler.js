//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
require('jquery-ui-dist/jquery-ui.js');
var appsettings = require("./appSettings.js");
var ServiceHandler = require("./ServiceCallHandler.js");
var jsboottbl = require("./externalplugin/dataTablesbootstrap.js");
var jsjquerytbl = require("./externalplugin/jquery.dataTables.js");

module.exports = {
    jqueryMainPluginEVENTS: function (userid, currpageType) {

        $(function () {
            menyIsActive();
            validateform();


            jsboottbl.bootTableInit();
            jsjquerytbl.jqueryTableInit();    
           

            if (currpageType == "kk_aj_diarieView") {
         
                ServiceHandler.injectdiarietable("all", "0", function (datajson) {
                
                    $('#diarieTable').DataTable({
                        "processing": true,
                        "stateSave": true,
                        "paging": true,
                        "lengthChange": true,
                        "searching": true,
                        "ordering": true,
                        "info": true,
                        "autoWidth": false,
                        "language": {
                            "decimal": "",
                            "emptyTable": "Det finns inget att visa",
                            "info": "Visar _START_ av _END_ totalt _TOTAL_ ",
                            "infoEmpty": "Visar 0 av 0 totalt 0",
                            "infoFiltered": "(Filtrerat från totalt _MAX_ poster)",
                            "infoPostFix": "",
                            "thousands": ",",
                            "lengthMenu": "Visa _MENU_",
                            "loadingRecords": "Laddar...",
                            "processing": "Jobbar...",
                            "search": "Sök:",
                            "zeroRecords": "Inget hittades",
                            "paginate": {
                                "first": "Först",
                                "last": "Sist",
                                "next": "Nästa",
                                "previous": "Föregående"
                            },
                            "aria": {
                                "sortAscending": ": activate to sort column ascending",
                                "sortDescending": ": activate to sort column descending"
                            }
                        },
                        "data": datajson.kk_aj_admin.Logitemlist,
                        "columns": [
                            { "data": "Arrid", "render": function (data, type, row, meta) {
                                if (type === 'display') {
                                    data = '<a href="' + appsettings.basepageUri + '/katalogendetaljvy?id=' + row.Arrid + '">' + data + '</a>';
                                }

                                return data;
                            },
                                "width": "5%"
                            },
                            { "data": "Datum" },
                            { "data": "Arrrubrik", "render": function (data, type, row, meta) {
                                if (type === 'display') {
                                    data = '<a href="' + appsettings.basepageUri + '/katalogendetaljvy?id=' + row.Arrid + '">' + data + '</a>';
                                }

                                return data;
                            },
                                "width": "30%"
                            },
                            { "data": "Statustypid" },
                            { "data": "ArrutovareID" },                       
                            { "data": "Arrutovare",
                                "render": function (data, type, row, meta) {
                                    if (type === 'display') {
                                        data = '<a href="' + appsettings.basepageUri + '/katalogenutovarevy?utovarid=' + row.ArrutovareID + '">' + data + '</a>';
                                    }

                                    return data;
                                }, "width": "20%"
                            },
                            { "data": "Beskrivning", "width": "35%" },
                            { "data": "ChangebyUsernamn", "width": "5%" },
                        
                            {
                                "data": "Statustyp",
                                "width": "5%",
                                "render": function (data, type, row, meta) {
                                    if (type === 'display') {                                                                     
                                        var statuscolor = "";
                                        switch (row.Statustypid) {
                                            case 1:
                                                statuscolor = '<span class="label label-primary">';
                                                break;
                                            case 2:
                                                statuscolor = '<span class="label label-warning">';
                                                break;
                                            case 3:
                                                statuscolor = '<span class="label label-success">';
                                                break;
                                            case 4:
                                                statuscolor = '<span class="label label-danger">';
                                                break;
                                            case 5:
                                                statuscolor = '<span class="label label-info">';
                                                break;
                                            case 6:
                                                statuscolor = '<span class="label label-success">';
                                                break;
                                            case 7:
                                                statuscolor = '<span class="label label-warning">';
                                                break;
                                            case 8:
                                                statuscolor = '<span class="label label">';
                                                break;
                                            case 9:
                                                statuscolor = '<span class="label label-default">';
                                                break;
                                            case 10:
                                                statuscolor = '<span class="label label-danger">';
                                                break;
                                            default:
                                                statuscolor = '<span class="label label-default">';
                                                break;
                                        }
                                                 
                                        data = statuscolor + data + '</span>';
                                    }

                                    return data;
                                }
                            }
                        ],
                        "columnDefs": [                       
                            {
                                "targets": [3],
                                "visible": false,
                                "searchable": false
                            },
                            {
                                "targets": [4],
                                "visible": false,
                                "searchable": false
                            }
                        ]
                    }
                );
               
            });
        }; 
       
/// REMOVE FROM HERE jsGRID ////////////////////////////////////////////////////////////////////////////////////
            if (currpageType == "kk_aj_utovareView") {
            };
           
          


        });//ready function end 
      

        var menyIsActive = function () {
            var pageType = $('.kk_aj_CurrentPageType').html();
            $('.sidebar-menu li').removeClass('active');

            switch (pageType) {
                case "kk_aj_startView":
                    $('.menystart').addClass('active');
                    break;
                case "kk_aj_ansokningarView":
                    $('.menyansokningar').addClass('active');
                    break;
                case "kk_aj_diarieView":
                    $('.menydiarielog').addClass('active');
                    break;
                case "kk_aj_detailView":
                    $('.menyansokningar').addClass('active');
                    break;
                default:
                    $('.menystart').addClass('active');
                    break;
            };
        }

        var validateform = function () {

        };
    }
}