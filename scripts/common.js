var modal = document.getElementById("MyModalForSignUp");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}



var modal1 = document.getElementById("MyModalForSignIn");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close1")[0];
btn1.onclick = function () {
    modal1.style.display = "block";
}
span1.onclick = function () {
    modal1.style.display = "none";
}







var link = document.getElementById("signuplink");
link.onclick = function () {
    
    modal1.style.display = "none";
    modal.style.display = "block";
}