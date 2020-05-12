var c1 = document.querySelector(".c1");
var c2 = document.querySelector(".c2");
var css= document.querySelector("h3");
var body= document.getElementById("gradient");
function bgchange(){
	body.style.background= "radial-gradient( " + c1.value +","+c2.value+")";
	css.textContent = body.style.background + ";";
}

c1.addEventListener("input", bgchange);

c2.addEventListener("input", bgchange);

 