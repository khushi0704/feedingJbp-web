var x= document.getElementById("login");
var y= document.getElementById("register");
var z= document.getElementById("btn");
function register(){
    x.style.left = "-400px";
y.style.left = "50px";
z.style.left = "110px";
}
function login(){
  x.style.left = "50px";
y.style.left = "450px";
    z.style.left = "0";
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide-img");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
