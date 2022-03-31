import $ from 'jquery'
//bot token
var telegram_bot_id = "5219968887:AAH-F720dZq2CcoqeJRe_HH_lUQHgDzGoLc"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = -1001796764085; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, phone, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    phone = document.getElementById("phone").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nTelefon: " + phone + "\nIzoh: " + message;
};
export var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    return false;
};


