var $ = require("jquery");
var appsettings = require("./appSettings.js");

module.exports = {
    testar: function (msg) {
        alert(msg);
    },
    injecthtmltemplate: function (targetClass, usetemplateName, currentdata) {
        console.log("6. inne i templatehandler");
        $.get(appsettings.htmltemplateURL +"/"+ usetemplateName, function (data) {
            var temptpl = Handlebars.compile(data);

            console.log("7. template klar att levereras");
            $(targetClass).html(temptpl(currentdata));
            //callback(htmltemplate)
        }, 'html');
    }

};
