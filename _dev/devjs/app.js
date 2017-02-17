var msg = require("./jsmoduler/main.js");
var $ = require("jquery");

$(function(){
    $("body").attr('style','background:#fff;')
        .append("funkar!");
    msg.testar("ja du det funkar");
});
