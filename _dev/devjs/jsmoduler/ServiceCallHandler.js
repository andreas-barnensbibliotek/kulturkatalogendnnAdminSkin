var $ = require("jquery");
var appsettings = require("./appSettings.js");
module.exports = {
    testar: function (msg) {
        alert(msg);
    },
    injecttemplate: function (callTyp, usrid, callback) {
        console.log("2. servicen hämtar data");
        $.ajax({
            type: "GET",
            url: appsettings.localOrServerURL +"/"+ callTyp + "/devkey/testar",
            dataType: "json",
            success: function (data) {
                console.log("3. servicen har hämtat datan");
                callback(data)
                
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr + ":: " + ajaxOptions + ":: " + thrownError);
                alert("Nått blev fel!");
            }
        });
       
    }
}

