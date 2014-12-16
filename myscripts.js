var weight = 0;
var nameCall = 0;

function increaseWeight(w) {
	weight += w;
}

function increaseWeight2(w) {
		weight += w;
		nameCall += 1;
}

function checkWeight2() {
	if(nameCall > 0 || weight > 8) {
		window.location.hash="9";
	}
	else {
		window.location.hash="9a";
	}
}

function checkWeight3() {
	if(weight > 5) {
		window.location.hash="10a";
	}
	else {
		window.location.hash="10b";
	}
}

function getName() {
	var name = document.getElementById("mainName").value;
	document.getElementById("placeName1").innerHTML = name;
	document.getElementById("placeName2").innerHTML = name;
	document.getElementById("placeName3").innerHTML = name;
	document.getElementById("placeName4").innerHTML = name;
	document.getElementById("placeName5").innerHTML = name;
	document.getElementById("placeName6").innerHTML = name;
	document.getElementById("placeName7").innerHTML = name;
	document.getElementById("placeName8").innerHTML = name;
	document.getElementById("placeName9").innerHTML = name;
	document.getElementById("placeName10").innerHTML = name;
	document.getElementById("placeName11").innerHTML = name;
	document.getElementById("placeName12").innerHTML = name;
	document.getElementById("placeName13").innerHTML = name;
	document.getElementById("placeName14").innerHTML = name;
	if(nameCall > 0) {
		window.location.hash="4a";
	}
	else {
		window.location.hash="4";
	}
}

function getName2() {
	var name = document.getElementById("mainName2").value;
	document.getElementById("placeName1").innerHTML = name;
	document.getElementById("placeName2").innerHTML = name;
	document.getElementById("placeName3").innerHTML = name;
	document.getElementById("placeName4").innerHTML = name;
	document.getElementById("placeName5").innerHTML = name;
	document.getElementById("placeName6").innerHTML = name;
	document.getElementById("placeName7").innerHTML = name;
	document.getElementById("placeName8").innerHTML = name;
	document.getElementById("placeName9").innerHTML = name;
	document.getElementById("placeName10").innerHTML = name;
	document.getElementById("placeName11").innerHTML = name;
	document.getElementById("placeName12").innerHTML = name;
	document.getElementById("placeName13").innerHTML = name;
	document.getElementById("placeName14").innerHTML = name;
	if(nameCall > 0) {
		window.location.hash="4a";
	}
	else {
		window.location.hash="4";
	}
}