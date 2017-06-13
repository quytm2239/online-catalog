var slideIndex = 0;
showSlides();

var logout_api_route = '/api/logout';

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function gotoList() {
    window.location = "/list";
}

function logout(){
    var logoutUrl = document.location.origin + logout_api_route;
    httpGetAsync("POST",logoutUrl,null,function (responseText) {
        console.log(responseText);
    });
}

function download(){
    window.location.href = "/api/download";
}

function httpGetAsync(method, theUrl, data, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4)
        {
            window.location = '/login';
            // if (xmlHttp.status == 200) {
            //     // error.html("<b>Register successfully!<a href=" + "/" + "login" +"> Login now? </a></b>");
            //     // error.height(50);
            //     // error.css({"line-height":"50px","color":"#00FF00"});
            //     // error.css({"border-width":"1px","border-color":"#00FF00"});
            // } else {
            //     error.text('Something went wrong please try again!');
            //     error.height(50);
            //     error.css({"line-height":"50px","color":"#FF0000"});
            //     error.css({"border-width":"1px","border-color":"#FF0000"});
            // }
        }
    }
    xmlHttp.open(method, theUrl, true); // true for asynchronous
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.send(data);
}
