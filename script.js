var c1 = document.querySelector(".c1");
var c2 = document.querySelector(".c2");
var css= document.querySelector("h3");
var body= document.getElementById("gradient");

function gradientfunction(){
	body.style.background = "liner-gradient(to right, " + c1.value + ", " + c2.value + ")";
	css.text
};

color1.addEventListener("input", gradientfunction);
color2.addEventListener("input", gradientfunction);

