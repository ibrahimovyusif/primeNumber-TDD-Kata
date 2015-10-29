'use strict';

var chai = require('chai');
var assert = chai.assert;

var studentController = require('../controllers/students.controller.js')

describe('Testing Student model', function () {

	describe('student registration', function() {

		it ('should save succesuflly - controller way', function() {

			// setup 
			var inputRequest = {
				body: {
					firstName: 'Yusif',
					lastName: 'Ibrahimov',
					email: 'yusifi@gmail.com'
				}
			};

			var inputResponse = (function () {
				var resData;

				return {
					json: function (data) {
						resData = data;
					},
					data: function () {
						return resData;
					}
				}
			})();
			var next = function (err, data) {
				if (err) {
					assert.fail('Error occured in registration', err);
				}
			};

			//expectation
			var expected = {
				firstName: 'Yusif',
				lastName: 'Ibrahimov',
				email: 'yusifi@gmail.com',
				studentId: 10001
			};

			// execution
			studentController.register(inputRequest, inputResponse, next);

			// validation
			var actual = inputResponse.data();
			assert.deepEqual(actual, expected, 'The student is not equal');	
			
			// terndown / destoy
			
		});	

		it ('should save succesuflly - model way', function() {

			var inputRequest = {
				body: {

				}
			};
		});	


		it ('should return error when input invalid. email is wrong format', function(done) {
			//setup
			var inputRequest = {
				body: {
					firstName: 'Yusif',
					lastName: 'Ibrahimov',
					email: 'yusif@igmail.com'
				}
			}

			var inputResponse = (function(){
				var resData;

				return {
					json: function (data) {
						resData = data;
					},
					data: function () {
						return resData;
					}
				}
			})();

			var next = function (err, data) {

				var actual = err.errorCode;
				var expected = {
					errorCode: 10  
				};
				
				assert.equal(actual, expected.errorCode);
				done();
			};

			

			//execution
			studentController.register(inputRequest, inputResponse, next);
		});
	})
	
});