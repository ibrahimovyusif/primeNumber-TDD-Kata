'use strict';


var lastStudentIdStatic = 10000;

exports.register =  function (req, res, next) {
	var student = req.body;

	// validate here


	// generate student id
	var studentId = generateNewStudentId();
	student.studentId = studentId;

	// save student 
	var isValid = emailValidation(student.email);
	if (!isValid) {
		var error = new Error('invalid email format');
		error.errorCode = 10;
		return next(error);
	}

	return res.json(student);
}


function generateNewStudentId() {
	return lastStudentIdStatic = lastStudentIdStatic + 1;
}


// exports.validateEmail =  function (req, res, next) {
// 	var student = req.body;
// 	//console.log(student.email);
// 	// validate here

// 	if(emailValidation(student.email)){
// 		res.json(student.email);	
// 	} else{
// 		res.json('Not valid');
// 	}

// 	// generate student id


// 	// save student 

// }

function emailValidation(email){

	var myRE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	var tokan = myRE.test(email);
	//console.log(tokan);
	if(tokan){
		console.log("email is valid");
		return true;
	} else{
		//console.log("email is valid");
		return false;
	}
}

