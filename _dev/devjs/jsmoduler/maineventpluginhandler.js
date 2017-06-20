//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
require('jquery-ui-dist/jquery-ui.js');
var appsettings = require("./appSettings.js");
var ServiceHandler = require("./ServiceCallHandler.js");
var jsboottbl = require("./externalplugin/dataTablesbootstrap.js");
var jsjquerytbl = require("./externalplugin/jquery.dataTables.js");

var _desktopmoduleURL = appsettings.basepageUri; //"/KulturkatalogenAdmin/KatalogenAnsokningar"

module.exports = {
    jqueryMainPluginEVENTS: function (userid, currpageType) {

        $(function () {
            menyIsActive();
            validateform();


            jsboottbl.bootTableInit();
            jsjquerytbl.jqueryTableInit();            
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
                                    data = '<a href="/Kulturkatalogen/katalogendetaljvy?id=' + row.Arrid + '">'  + data + '</a>';
                                }

                                return data;
                        },
                        "width": "5%"
                        },
                        { "data": "Datum" },
                        { "data": "Arrrubrik", "render": function (data, type, row, meta) {
                                if (type === 'display') {
                                    data = '<a href="/Kulturkatalogen/katalogendetaljvy?id=' + row.Arrid + '">' + data + '</a>';
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
                                    data = '<a href="' + appsettings.basepageUri + '?utovarid=' + row.ArrutovareID + '">' + data + '</a>';
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
             
       
/// REMOVE FROM HERE jsGRID ////////////////////////////////////////////////////////////////////////////////////
            if (currpageType == "kk_aj_utovareView") {
            };

//            jsGridPlugin.jsGridInit();
//            //       var clients = [
//            //{ "alf": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
//            //{ "alf": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
//            //{ "alf": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
//            //{ "alf": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
//            //{ "alf": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false }
//            //       ];

//            //var countries = [
//            //    { Name: "", Id: 0 },
//            //    { Name: "United States", Id: 1 },
//            //    { Name: "Canada", Id: 2 },
//            //    { Name: "United Kingdom", Id: 3 }
//            //];
//            ServiceHandler.utovarData("getutovarelista", "", function (datajson) {

//                    $("#jsGrid").jsGrid({
//                        height: "70%",
//                        width: "100%",

//                        inserting: false,
//                        editing: false,
//                        sorting: true,
//                        paging: true,
//                        rowClick: function (args) {
//                            showDetailsDialog("Edit", args.item);
//                        },
//                        data: datajson.kk_aj_admin.utovare,

//                        fields: [
//                            { name: "id", type: "text", width: 20, validate: "required" },
//                            { name: "organisation", type: "text", width: 70 },
//                            { name: "fornamn", type: "text", width: 50 },
//                            { name: "efternamn", type: "text", width: 50 },
//                            { name: "adress", type: "text", width: 80 },
//                            { name: "postnr", type: "text", width: 40 },
//                            { name: "ort", type: "text", width: 50 },
//                            { name: "kommun", type: "text", width: 50 },
//                            { name: "telefon", type: "text", width: 70 },
//                            { name: "epost", type: "text", width: 80 },
//                            { name: "weburl", type: "text", width: 100 },
//                            { name: "ovrigt", type: "text", width: 100 },
//                            {
//                                type: "control",
//                                modeSwitchButton: false,
//                                editButton: false,
//                                headerTemplate: function () {
//                                    return $("<button>").attr("type", "button").text("Add")
//                                            .on("click", function () {
//                                                showDetailsDialog("Add", {});
//                                            });
//                                }
//                            }
//                        ]
//                    });
//            });
//            }
                       
//            var formSubmitHandler = $.noop;
//            var showDetailsDialog = function (dialogType, client) {
//                $("#id").val(client.id);
//                $("#organisation").val(client.organisation);
//                $("#fornamn").val(client.fornamn);
//                $("#efternamn").val(client.efternamn);                

//                formSubmitHandler = function () {
//                    saveClient(client, dialogType === "Add");
//                };

//                $("#detailsDialog").dialog({
//                    autoOpen: false,
//                    modal: true,                    
//                    title: 'Kontaktuppgifter',
//                    buttons: {
//                        Ok: function () {
//                            $(this).dialog("close");
//                        }
//                    }
//                }).dialog("open");
//            };
//            //$('#diarieTable').editableTableWidget();

//            var saveClient = function (client, isNew) {
//                $.extend(client, {
//                    Name: $("#name").val(),
//                    Age: parseInt($("#age").val(), 10),
//                    Address: $("#address").val(),
//                    Country: parseInt($("#country").val(), 10),
//                    Married: $("#married").is(":checked")
//                });

//                $("#jsGrid").jsGrid(isNew ? "insertItem" : "updateItem", client);

//                $("#detailsDialog").dialog("close");
//            };

///// to here REMOVE to HERE jsGRID ////////////////////////////////////////////////////////////////////////////////////


        });//ready function end 



        //$('#diarieTable td').on('change', function (evt, newValue) {
        //    // do something with the new cell value 
        //    alert("testar");
        //    //return false; // reject change

        //});

      

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