var weight = 0;

function increaseWeight() {
	weight += 10;
}

function checkWeight() {
	if(weight >= 10) {
		window.location.hash="3";
	}
	else {
		window.location.hash="2";
	}
}