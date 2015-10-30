'use strict';



function isPrime (number) {

	if (number === 1) {
		return true;
	}

	var other = 2;
	while (number !== other && number % other !== 0) {
		other++;
	}

	if (number !== other) {
		return false;
	}
	else {
		return true;	
	}
	
}


module.exports = isPrime;

