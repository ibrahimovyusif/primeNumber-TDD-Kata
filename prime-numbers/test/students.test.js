'use strict';

var express = require('express');
var app = express();
var chai = require('chai');
var assert = chai.assert;

var httpMocks = require('node-mocks-http');


console.log('TEST before world ');
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
mockgoose(mongoose);
console.log('TEST after mockgoose ');

var fixtures = require("pow-mongoose-fixtures");
// var FixturePrep = require("node-mongoose-fixtures");
// var fixtures = new FixturePrep();

console.log('TEST after lading pow ');

var studentController = require('../controllers/students.controller.js');
var Student = require('../models/student.model');

// var studentFixtures = require('./fixtures/students');

mongoose.connect('mongodb://yusifibrahimov:6701995y@ds037244.mongolab.com:37244/student_db');
// var Schema = mongoose.Schema;	

// var studentSchema = new Schema ({
// 	firstname: String,
// 	lastname: String,
// 	email: String,
// 	studentId: Number
// });




describe.only('Testing Student model', function () {

	// beforeEach(function(done) {
		
	// 	console.log('TEST before fixtures loaded ');
	// 	fixtures.load({
	// 	    Student: {
	// 	        user1: { name: 'Yusif' },
	// 	        user2: { name: 'Anar' }
	// 	    }
	// 	});
	// 	done();
	// });

  afterEach(function () {
    console.log('After each test!');
  });

 beforeEach(function () {
    console.log('Before each test!');
  });
	describe('student registration', function() {



		it ('should save succesuflly - controller way', function() {

			// setup 
			var inputRequest = httpMocks.createRequest({
				method: 'POST',
        		url: '/api/students',
        		body: {
					firstName: 'Yusif',
					lastName: 'Ibrahimov',
					email: 'yusifi@gmail.com'
				}
			});

			var inputResponse = httpMocks.createResponse();

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
			var actual = JSON.parse( inputResponse._getData() );
			assert.deepEqual(actual, expected, 'The student is not equal');	

			Student.find({ firstName: 'Yusif' }, function (err, student) {
				should.not.exist(err);
				assert.deepEqual(student, expected);		

			})
			
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
					email: 'yusif@igmailcom'
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


		it ('Should get all the students succesuflly', function() {

			var inputRequest = {
				body: {

				}
			};
		});	



	});


	describe('View students', function(){

		it ('should get successfully - controller way', function(done) {

			// setup 
			var inputRequest = httpMocks.createRequest({
				method: 'GET',
        		url: '/api/students',
        		body: {
					firstName: 'Yusif',
				lastName: 'Ibrahimov',
				email: 'yusifi@gmail.com',
				}
			});

			var inputResponse = httpMocks.createResponse();

			var next = function (err, data) {
				if (err) {
					assert.fail('Error occured in viewing', err);
				}
			};

			//expectation
			var expected = {
				firstName: 'Yusif',
				lastName: 'Ibrahimov',
				email: 'yusifi@gmail.com',
				studentId: 10003
			};

			// execution
			studentController.view(inputRequest, inputResponse, next);

			// validation
			var actual = JSON.parse( inputResponse._getData() );
			assert.deepEqual(actual, expected, 'The student is not equal');	

			Student.find({ firstName: 'Yusif' }, function (err, student) {
				should.not.exist(err);
				assert.deepEqual(student, expected);		

			})
			
			// terndown / destoy
			done();
		});	

	});
	
});


app.listen(3000, function(){
	console.log('server started on port 3000');
});