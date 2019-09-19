$(".first").append(
    "<div id=\"logind\" >\n" +
    "</div>");

$(".third").append("<div id=\"registerd\">\n" +
    "</div>");

$( "#registerd" ).append("<button type=\"button\" id=\"registerb\" name=\"registerb\">РЕГИСТРАЦИЈА</button>");
$("#logind").append("<button type=\"button\" id=\"loginb\" name=\"loginb\">НАЈАВИ СЕ</button>");

$(document).ready ( function () {
    $(document).on('click', "#rgstr_btn", function () {
       alert("Може да се најавите.");
       window.location.replace("html.html");
    });
});


$( "#registerb" ).click(function() {
    $( "#registerd" ).append( "<form id=\"register-form\">\n" +
        "                <input id=\"nm1\" type=\"text\" placeholder=\"Име\" />\n" +
        "                <input id=\"pw\" type=\"password\" placeholder=\"Лозинка\" />\n" +
        "                <input id=\"rgstr_btn\" type=\"button\" value=\"креирај\" onClick=\"store()\"/> \n" +
        "            </form>" );
    $("#registerb").hide();
    var nm1 = document.getElementById('nm1');
    var pw = document.getElementById('pw');
});

function store() {
    localStorage.setItem('nm1', nm1.value);
    localStorage.setItem('pw', pw.value);

}

function check() {

    var storedName = localStorage.getItem('nm1');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');



    if (userName.value == storedName && userPw.value == storedPw) {
        alert('Успешно се најавивте.');
        window.location.replace("user.html");
    }
    if (userName.value == 'admin' && userPw.value == 'pw') {
        alert('Вие сте најавени како админ.');
        window.location.replace("user.html");
    }
    if (userName.value == '' && userPw.value == '') {
        alert('Неуспешен Обид.');
        window.location.replace("html.html");
    }
    
}

$( "#loginb" ).click(function() {
    $( "#logind" ).append( "<form id=\"login-form\"> \n" +
        "                <input id=\"userName\" type=\"text\" placeholder=\"внеси име\" value=\"\"/>\n" +
        "                <input id=\"userPw\" type=\"password\" placeholder=\"внеси лозинка\" value=\"\"/>\n" +
        "                <input id=\"login_btn\" type=\"button\" value=\"НАЈАВИ СЕ\" onClick=\"check()\"/> \n" +
        "           </form>" );
    $("#loginb").hide();

});