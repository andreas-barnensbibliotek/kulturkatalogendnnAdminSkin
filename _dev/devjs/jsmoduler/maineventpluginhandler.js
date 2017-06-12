//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
var appsettings = require("./appSettings.js");
var loadpageHandler = require("./pageloadhandler.js");
var jsGridPlugin = require("./externalplugin/jsgrid.js");

var _desktopmoduleURL = appsettings.basepageUri; //"/KulturkatalogenAdmin/KatalogenAnsokningar"

module.exports = {
    jqueryMainPluginEVENTS: function (userid) {

        $(function () {
            menyIsActive();
            validateform();
            
            //$('#diarieTable').editableTableWidget();

          

        });
        $('#diarieTable td').on('change', function (evt, newValue) {
            // do something with the new cell value 
            alert("testar");
            //return false; // reject change

        });

        jsGridPlugin.jsGridInit();
        var clients = [
 { "alf": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue", "Married": false },
 { "alf": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av.", "Married": true },
 { "alf": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St.", "Married": false },
 { "alf": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave", "Married": true },
 { "alf": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street", "Married": false }
        ];

        var countries = [
            { Name: "", Id: 0 },
            { Name: "United States", Id: 1 },
            { Name: "Canada", Id: 2 },
            { Name: "United Kingdom", Id: 3 }
        ];

        $("#jsGrid").jsGrid({
            width: "100%",
            height: "400px",

            inserting: true,
            editing: true,
            sorting: true,
            paging: true,

            data: clients,

            fields: [
                { name: "alf", type: "text", width: 150, validate: "required" },
                { name: "Age", type: "number", width: 50 },
                { name: "Address", type: "text", width: 200 },
                { name: "Country", type: "select", items: countries, valueField: "Id", textField: "Name" },
                { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
                { type: "control" }
            ]
        });


       


    }
}
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