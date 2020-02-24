var signup = document.getElementById("SignUpPopUp");
var signupbtn = document.getElementById("SignUpBtn");
var signupclose = document.getElementById("signupclose");
signupbtn.onclick = function () {
    signup.style.display = "block";
}
signupclose.onclick = function () {
    signup.style.display = "none";
}

var signin = document.getElementById("SignInPopUp");
var signinbtn = document.getElementById("SignInBtn");
var signinclose = document.getElementById("signinclose");
signinbtn.onclick = function () {
    signin.style.display = "block";
}
signinclose.onclick = function () {
    signin.style.display = "none";
}

var signuplink = document.getElementById("signuplink");
signuplink.onclick = function () {
    
    signin.style.display = "none";
    signup.style.display = "block";
}