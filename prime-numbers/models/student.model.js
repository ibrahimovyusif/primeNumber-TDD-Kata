'use strict';


var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
console.log('TEST 55 model stuent loading');
/**
 * Job Schema
 */
var studentSchema = new Schema({
	firstname: {
		type: String
	},
	lastname: {
		type: String
	},
	email: {
		type: String
	},
	studentId: {
		type: Number
	}
});

var Student = mongoose.model('Student', studentSchema);

// make it available 
module.exports = Student;