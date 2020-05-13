var c1 = document.querySelector(".c1");
var c2 = document.querySelector(".c2");
var css= document.querySelector("h3");
var body= document.getElementById("gradient");
var buttonl = document.getElementById("buttonl");
var buttonr = document.getElementById("buttonr");
function bgchange(){
	body.style.background= "radial-gradient( " + c1.value +","+c2.value+")";
	css.textContent = body.style.background + ";";
}
function linear() {
	body.style.background= "linear-gradient(to right, " + c1.value +","+c2.value+")";
	css.textContent = body.style.background + ";";
}


c1.addEventListener("input", bgchange);

c2.addEventListener("input", bgchange);

buttonl.addEventListener("click", linear);
buttonr.addEventListener("click", bgchange);

