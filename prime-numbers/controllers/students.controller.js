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




exports.view =  function (req, res, next) {
	var student = req.body;

	// validate here


	// generate student id
	var studentId = generateNewStudentId();
	student.studentId = studentId;

	// save student 
	return res.json(student);
}




function generateNewStudentId() {
	return lastStudentIdStatic = lastStudentIdStatic + 1;
}


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

