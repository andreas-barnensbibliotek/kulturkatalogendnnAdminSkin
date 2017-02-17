
jQuery(document).ready(function ($) {

    var jsondata = {
        users: [{
            person: {
                firstName: "Garry",
                lastName: "Finch"
            },
            jobTitle: "Front End Technical Lead",
            twitter: "gazraa"
        }, {
            person: {
                firstName: "andreas",
                lastName: "josefsson"
            },
            jobTitle: "Photographer",
            twitter: "photobasics"
        }, {
            person: {
                firstName: "Garry",
                lastName: "Finch"
            },
            jobTitle: "LEGO Geek",
            twitter: "minifigures"
        }]
    };
   
    var init = function () {

        $.get('http://dnndev.me/Portals/_default/Skins/kk_Admin_Acklay/htmltemplates/test.txt', function (data) {
            var temptpl = Handlebars.compile(data);

            Handlebars.registerHelper('fullName', function (person) {
                return person.firstName + " " + person.lastName;
            });
        
            $('body').append(temptpl(jsondata));

        }, 'html');

    };

    init();
});