
jQuery(document).ready(function ($) {

    var testdata;

    var getdata = function () {
        $.ajax({
            type: "GET",
            url: "http://kulturkatalog.kivdev.se:8080/Api_v1/test/devkey/testar",
            dataType: "json",
            success: function (data) {

                testdata = data
                inittemp(testdata);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr + ":: " + ajaxOptions + ":: " + thrownError);
                alert("Nått blev fel!");
            }
        });
    };



    var inittemp = function (temp) {

        $.get('http://dnndev.me/Portals/_default/Skins/kk_Admin_Acklay/htmltemplates/test.txt', function (data) {
            var temptpl = Handlebars.compile(data);
                       
            $('.kk_aj_profile').append(temptpl(temp));

        }, 'html');

    };

    var init = function () {
        getdata();
    }
    init();

});