var login_api_route = '/api/login';

$(document).ready(function(){
    var username = $('#username');
    var password = $('#password');
    var error = $('#error');

    $("#submit").click(function(){
        if (validate()) {
            login($('form').serialize());
        }
    });

    function validate(){

        if (isBlank(username.val())) {
            console.log('Username is blank!');
            showErrorMess(true,'Username is blank!');
            return false;
        }

        if (isBlank(password.val())) {
            console.log('Password is blank!');
            showErrorMess(true,'Password is blank!');
            return false;
        }

        return true;
    }

    function showErrorMess(show,message) {
        if (show) {
            error.text(message);
            error.height(50);
            error.css({"line-height": "50px"});
            error.css({"border-width":"1px"});
        } else {
            error.text('');
            error.height(0);
            error.css({"border-width":"0px"});
        }
    }

    function isBlank(str){
        if (str == '' || str == undefined || str == null) {
            return true;
        } else {
            return false;
        }
    }

    function login(data){
        $('#loader').show();
        $('#submit').prop('disabled',true);
        var loginUrl = document.location.origin + login_api_route;
        httpGetAsync("POST",loginUrl,data,function () {
            $('#loader').hide();
            $('#submit').prop('disabled',false);
        });
    }

    function httpGetAsync(method, theUrl, data, callback)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4)
            {
                console.log(xmlHttp.responseText);
                var JSONObj = JSON.parse(xmlHttp.responseText);
                if (xmlHttp.status == 200) {
                    // error.text(JSONObj.message);
                    // error.height(50);
                    // error.css({"line-height":"50px","color":"#00FF00"});
                    // error.css({"border-width":"1px","border-color":"#00FF00"});
                    window.location = '/main';
                } else {
                    error.text(JSONObj.message);
                    error.height(50);
                    error.css({"line-height":"50px","color":"#FF0000"});
                    error.css({"border-width":"1px","border-color":"#FF0000"});
                }
                callback();
            }
        }
        xmlHttp.open(method, theUrl, true); // true for asynchronous
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send(data);
    }
});
