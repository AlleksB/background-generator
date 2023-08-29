var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function firstPageLoad() {
	document.querySelector(".color1").value = "#ff0000";
	document.querySelector(".color2").value = "#ffff00";
	setGradient();
}

function generateRandomBackground() {
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	while (randomColor1.length < 6) {
		randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	}
	while (randomColor2.length < 6) {
		randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	}
	document.querySelector(".color1").value = "#" + randomColor1;
	document.querySelector(".color2").value = "#" + randomColor2;
	setGradient();
}

firstPageLoad();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", generateRandomBackground);
