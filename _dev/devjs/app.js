var msg = require("./jsmoduler/main.js");
var $ = require("jquery");

$(function(){
    $("body").attr('style','background:#fff;')
        .append("funkar! Webpack och concat");
    msg.testar("ja du det funkar med Webpack och concat");
});
