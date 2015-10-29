var chai = require('chai');

var assert = chai.assert;
chai.expect;

var prime = require('../prime');

describe('Prime numbers', function() {

	it ('should 1 be prime number', function () {

		var input = 1;
		var expected = true;

		var actual = prime(input);

		assert.equal(expected, actual, '1 must be prime');
	});


	it ('should 2 be prime number', function () {

		var input = 2;
		var expected = true;

		var actual = prime(input);

		assert.equal(expected, actual, '2 must be prime');
	});

	it ('should 3 be prime number', function () {

		var input = 3;
		var expected = true;

		var actual = prime(input);

		assert.equal(expected, actual, '3 must be prime');
	});

	it ('should 4 not be prime number', function () {

		var input = 4;
		var expected = false;

		var actual = prime(input);

		assert.equal(expected, actual, '4 is not prime');
	});


	it ('should 5 be prime number', function () {

		var input = 5;
		var expected = true;

		var actual = prime(input);

		assert.equal(expected, actual, '5 must be prime');
	});

	it ('should 6 not be prime number', function () {

		var input = 6;
		var expected = false;

		var actual = prime(input);

		assert.equal(expected, actual, '6 is not prime');
	});

	it ('should 7 be prime number', function () {

		var input = 7;
		var expected = true;

		var actual = prime(input);

		assert.equal(expected, actual, '7 must be prime');
	});

	it ('should 8 not be prime number', function () {

		var input = 8;
		var expected = false;

		var actual = prime(input);

		assert.equal(expected, actual, '8 is not prime');
	});
	
});