// JavaScript Document 
// Project: Tech Vault 
// Team Members: Josh Wagner, Connor Kish, Nick Trout
// File: create-account.js
// Last Updated: 3/9/22
// Last Updated By: Josh Wagner    

// Constant to represent an element that displays submission results
const result = document.getElementById("form-result");

// Constants to represent each form input field
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const email = document.getElementById("email");
const pass1 = document.getElementById("password1");
const pass2 = document.getElementById("password2");

// Constants to represent elements that display feedback about submission errors for each input field
const fNameFeedback = document.getElementById("fname-feedback");
const lNameFeedback = document.getElementById("lname-feedback");
const emailFeedback = document.getElementById("email-feedback");
const pass1Feedback = document.getElementById("password1-feedback");
const pass2Feedback = document.getElementById("password2-feedback");

// Array Constants
const validField = []; // Used to track if uesr input in each field is valid
const fields = [fName, lName, email, pass1, pass2] // Contains each inputfield
const fieldFeedback = [fNameFeedback, lNameFeedback, emailFeedback, pass1Feedback, pass2Feedback] // Contains each feedback element

// Regular Expression Constants
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 					// Represents a valid email address
const validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; 	// Represents a valid password


// Function to highlight an input field when onFocus()
function selectField(id) {
	fields[id].style.borderWidth="5px";				 // Increase border size
	fields[id].classList.remove("unselected-field"); // Remove class to remove css
	fields[id].classList.add("selected-field");		 // Add class to apply css
}

// Function to remove highlighted features when onBlur()
function unselectField(id) {
	fields[id].style.borderWidth="3px";				// Hides border
	fields[id].classList.remove("selected-field");	// Remove class to remove css
	fields[id].classList.add("unselected-field");	// Adds class to apply css
}

// Function that calls other functions to validate user inputs
function checkInputs(){
	checkFName(0);			// Validate first name field
	checkLName(1);			// Validate last name field
	checkEmail(2);			// Validate email field
	checkPass1(3);			// validate password field
	checkPass2(4);			// Validate confirm passworld field
	validateSubmission();	// Determine if all fields are valid
	setFocus();				// Sets focus on first field with an error
}

// Validates the first name field
function checkFName(validIndex) {

	// Tests if the field is empty
	if (fName.value.lengh == 0 || fName.value === "") {
		displayFieldError(fName,0); 							// Changes CSS to indicate field is invalid
		fNameFeedback.innerHTML = "First Name Cannot Be Empty"; // Displays feedback
		validField[validIndex] = false; 						// Records the field is invalid
	} 

	// Tests if the field contains numbers
	else if (/[0-9]/.test(fName.value)){
		displayFieldError(fName,0); 									// Changes CSS to indicate field is invalid
		fNameFeedback.innerHTML = "First Name Cannot Contain Numbers"; 	// Displays feedback
		validField[validIndex] = false; 								// Records the field is invalid
	} 

	else {
		displayFieldValid(fName,0); 	// Changes CSS to indicate field is valid
		fNameFeedback.innerHTML = ""; 	// Removes feedback
		validField[validIndex] = true; 	// Records the field is valid
	}
}

// Validates the last name field
function checkLName(validIndex) {

	// Tests if the field is empty
	if (lName.value.lengh == 0 || lName.value === "") {
		displayFieldError(lName,1); 							// Changes CSS to indicate field is invalid
		lNameFeedback.innerHTML = "Last Name Cannot Be Empty"; 	// Displays feedback
		validField[validIndex] = false;							// Records the field is invalid
	} 

	// Tests if the field contains numbers
	else if (/[0-9]/.test(lName.value)){
		displayFieldError(lName,1); 									// Changes CSS to indicate field is invalid
		lNameFeedback.innerHTML = "Last Name Cannot Contain Numbers"; 	// Displays feedback
		validField[validIndex] = false; 								// Records the field is invalid
	} 

	else {
		displayFieldValid(lName,1); 	// Changes CSS to indicate field is valid
		lNameFeedback.innerHTML = ""; 	// Removes feedback
		validField[validIndex] = true; 	// Records the field is valid
	}
}

// Validates the email field
function checkEmail(validIndex) {

	// Tests if the field is empty
	if (email.value.lengh == 0 || email.value === "") {
		displayFieldError(email,2); 						// Changes CSS to indicate field is invalid
		emailFeedback.innerHTML = "Email Cannot Be Empty"; 	// Displays feedback
		validField[validIndex] = false; 					// Records the field is invalid
	} 

	// Tests if the email inputted is valid
	else if (validEmail.test(email.value)){
		displayFieldValid(email,2); 	// Changes CSS to indicate field is valid
		emailFeedback.innerHTML = ""; 	// Removes feedback
		validField[validIndex] = true; 	// Records the field is valid
	} 

	else {
		displayFieldError(email,2); 					// Changes CSS to indicate field is invalid
		emailFeedback.innerHTML = "Not A Valid Email"; 	// Displays feedback
		validField[validIndex] = false; 				// Records the field is invalid
	}
}

// Validates the password field
function checkPass1(validIndex) {

	// Tests if the field is empty
	if (pass1.value.lengh == 0 || pass1.value === "") {
		displayFieldError(pass1,3); 							// Changes CSS to indicate field is invalid
		pass1Feedback.innerHTML = "Password Cannot Be Empty"; 	// Displays feedback
		validField[validIndex] = false; 						// Records the field is invalid
	} 

	// Tests if the password inputted is valid
	else if (validPass.test(pass1.value)){
		displayFieldValid(pass1,3); 	// Changes CSS to indicate field is valid
		pass1Feedback.innerHTML = ""; 	// Removes feedback
		validField[validIndex] = true; 	// Records the field is valid
	} 

	else {
		displayFieldError(pass1,3); 					// Changes CSS to indicate field is invalid
		pass1Feedback.innerHTML = "Invalid Password"; 	// Displays feedback
		validField[validIndex] = false; 				// Records the field is invalid
	}
}

// Validates the confirm password field
function checkPass2(validIndex) {

	// Tests if the field is empty
	if (pass2.value.lengh == 0 || pass2.value === "") {
		displayFieldError(pass2, 4); 										// Changes CSS to indicate field is invalid
		pass2Feedback.innerHTML = "Password Confirmation Cannot Be Empty"; 	// Displays feedback
		validField[validIndex] = false; 									// Records the field is invalid
	} 

	// Tests if the input in both password fields match
	else if (pass1.value != pass2.value) {
		displayFieldError(pass2, 4); 						// Changes CSS to indicate field is invalid
		pass2Feedback.innerHTML = "Passwords Do Not Match"; // Displays feedback
		validField[validIndex] = false; 					// Records the field is invalid
	} 

	else {
		displayFieldValid(pass2,4); 	// Changes CSS to indicate field is valid
		pass2Feedback.innerHTML = ""; 	// Removes feedback
		validField[validIndex] = true; 	// Records the field is valid
	}
}


// Determines if all fields are valid and displays results
function validateSubmission() {
	//Local variable to indicate if all fields are valid
	let validSubmission = new Boolean(true);

	// Loop that checks the validity for each field and updates local variable if a field is invalid
	for (var i = 0; i < 5; i++) {
		if (validField[i] == false) {
			validSubmission = false;
		}
	}

	// Tests if all fields were found to be valid
	if (validSubmission) {
		result.innerHTML="SUCCESS!";	// Displays that the submission is successful
		result.style.color = "#60cf21";	// Makes the text color of the message green
	} 
	else {
		result.innerHTML = "ERROR!"		// Displays that the submission has errors
		result.style.color = "#ff0000"; // Makes the text color of the message red
	}

}

// Sets focus to the first field with an error
function setFocus() {
	// Local variable to determine the index number of the first field with an error
	var firstError;

	// Loop to test if there is an error and marks the index
	for (var i = 4; i > -1; i--) {
		if (!validField[i]) {
			firstError = i;
		}
	}

	// Tests if there is an error field index and sets the focus to that field
	if (firstError != null){
		fields[firstError].focus();
	}
}

// Alters input field to indicate there is an error
function displayFieldError(field, iconArrayPosition){
	field.style.borderWidth="3px";		// Add border
	field.style.borderColor="#ff0000";	// Change border color to red
	
	var icon1 = document.getElementsByClassName("fa-circle-xmark")[iconArrayPosition]; // Local variable for invalid icon
	icon1.style.visibility="visible";												   // Display invalid icon
	
	var icon2 = document.getElementsByClassName("fa-circle-check")[iconArrayPosition]; // Local variable for valid icon
	icon2.style.visibility="hidden";												   // Hide valid icon
}

// Alters input field to indicate the input for the field is valid
function displayFieldValid(field, iconArrayPosition){
	field.style.borderWidth="3px";		// Add border
	field.style.borderColor="#2d9117";	// Change border color to green
	
	var icon1 = document.getElementsByClassName("fa-circle-xmark")[iconArrayPosition]; // Local variable for invalid icon
	icon1.style.visibility="hidden";												   // Hide invalid icon
	
	var icon2 = document.getElementsByClassName("fa-circle-check")[iconArrayPosition]; // Local variable for valid icon
	icon2.style.visibility="visible";												   // Display valid icon
}

// Removes all stylization to form to return it to its orignal state
function resetFields() {
	// Removes submission result text
	result.innerHTML = "";

	// Loops through all fields
	for(var i = 0; i<5; i++) {
		fields[i].style.borderWidth="0px";												 // Removes border
		fields[i].style.borderColor="lightblue";										 // Sets default border color
		fieldFeedback[i].innerHTML="";													 // Removes feedback
		document.getElementsByClassName("fa-circle-check")[i].style.visibility="hidden"; // Removes valid icon
		document.getElementsByClassName("fa-circle-xmark")[i].style.visibility="hidden"; // Removes invalid icon
	}
}