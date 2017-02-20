if (typeof jQuery !== 'undefined') {
    (function($) {
        if (typeof(Storage) !== "undefined") {
            refreshUi();

        } else {
            //
            console.log("LocalStorage not available");
        }
    })(jQuery);
}

function fetchAnnouncements() {
    var accessToken = localStorage.getItem("accessToken");
    var authorization = 'Bearer ' + accessToken;
    $.ajax({
        url: 'http://localhost:8081/',
        type: 'get',
        headers: {
            "Accept": 'application/json',
            "Authorization": authorization
        },
        success: function (data) {
            console.info(data);
            populateAnnouncements(data);

        },
        error: function (data){
            console.info(data);
        }
    });
}

function populateAnnouncements(data) {
    var html = "";
    for ( var i = 0; i < data.length; i++) {
        var annoucement = data[i];
        html += "<li>" + annoucement.title + "</li>";
    }

    $("#announcements").html(html);
}

function refreshUi() {

    var refreshToken = localStorage.getItem("refreshToken");
    var username = localStorage.getItem("username");
    var accessToken = localStorage.getItem("accessToken");

    if ('null' != accessToken ) {
        $('#logoutForm').show();
        $('#loginForm').hide();

        fetchAnnouncements();

    } else {
        $('#logoutForm').hide();
        $('#loginForm').show();
    }

    $('#loggedAs').attr('value', username);

    $( "#submitLogin" ).click(function() {
        login();
    });

    $( "#logoutForm" ).click(function() {
        logout();
    });
}

function logout() {
    localStorage.setItem("accessToken", null);
    localStorage.setItem("expiresIn", null);
    localStorage.setItem("refreshToken", null);
    localStorage.setItem("roles", null);
    localStorage.setItem("username", null);

    $('#announcements').html('');

    refreshUi();
}

function login() {
    var username = $('#username').val();
    var password = $('#password').val();

    var jsonData = "{\"username\":\""+username+"\",\"password\":\""+password+"\"}"

    $.ajax({
        url: 'http://localhost:8081/api/login',
        type: 'post',
        data: jsonData,
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        success: function (data) {
            localStorage.setItem("accessToken", data.access_token);
            localStorage.setItem("expiresIn", data.expiresIn);
            localStorage.setItem("refreshToken", data.refresh_token);
            localStorage.setItem("roles", data.role);
            localStorage.setItem("username", data.username);

            refreshUi();
        },
        error: function (data){
            console.info(data);
        }
    });
}