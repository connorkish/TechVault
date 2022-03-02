// JavaScript Document 
// Project: Tech Vault 
// Team Members: Josh Wagner, Connor Kish, Nick Trout
// File: account-details-validation.js
// Last Updated: 3/2/22
// Last Updated By: Josh Wagner

// Constants to represent each form input field
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const age = document.getElementById("age");
const street = document.getElementById("street-address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");

// Constants to represent elements that display feedback about submission errors for each input field
const fNameFeedback = document.getElementById("fname-feedback");
const lNameFeedback = document.getElementById("lname-feedback");
const emailFeedback = document.getElementById("email-feedback");
const phoneFeedback = document.getElementById("phone-feedback");
const ageFeedback = document.getElementById("age-feedback");
const streetFeedback = document.getElementById("street-feedback");
const cityFeedback = document.getElementById("city-feedback");
const stateFeedback = document.getElementById("state-feedback");
const zipFeedback = document.getElementById("zip-feedback");

// Constant to represent an element that displays submission results
const result = document.getElementById("form-result");

// Array Constants
const validField = []; // Used to track if uesr input in each field is valid
const fields = [fName, lName, email, phone, age, street, city, state, zip] // Contains each inputfield
const fieldFeedback = [fNameFeedback, lNameFeedback, emailFeedback, phoneFeedback, ageFeedback, streetFeedback, cityFeedback, stateFeedback, zipFeedback] // Contains each feedback element

// Regular Expression Constants
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 					// Represents a valid email address



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
	checkPhone(3);			// validate password field
	checkAge(4);			// Validate confirm passworld field
	checkStreet(5);			// Validate confirm passworld field
	checkCity(6);			// Validate confirm passworld field
	checkState(7);			// Validate confirm passworld field
	checkZip(8);			// Validate confirm passworld field
	validateSubmission();	// Determine if all fields are valid
	setFocus();				// Sets focus on first field with an error
}

// Validates the first name field
function checkFName(validIndex) {

	// Tests if the field is empty
	if (fName.value.length == 0 || fName.value === "") {
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
	if (lName.value.length == 0 || lName.value === "") {
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
	if (email.value.length == 0 || email.value === "") {
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

// Validates the phone number field
function checkPhone(validIndex) {

	// Tests if the field contains numbers
	if (phone.value.length == 0 || phone.value === ""){
		phone.style.borderColor="lightblue";
		phone.style.borderwidth="3px";
		phoneFeedback.innerHTML = ""; // Displays feedback
		validField[validIndex] = true;
		document.getElementById("phone-pass").style.visibility="hidden";
		document.getElementById("phone-fail").style.visibility="hidden";
	} 

	// Tests if the field contains numbers
	else if (/[a-z]/.test(phone.value)){
		displayFieldError(phone,3); 									 // Changes CSS to indicate field is invalid
		phoneFeedback.innerHTML = "Phone Number Cannot Contain Letters"; // Displays feedback
		validField[validIndex] = false; 								 // Records the field is invalid
	} 

	else if (/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phone.value)){
		
		displayFieldValid(phone,3); 	// Changes CSS to indicate field is valid
		phoneFeedback.innerHTML = ""; 	// Displays feedback
		validField[validIndex] = true; 	// Records the field is valid
	} 

	else {
		displayFieldError(phone,3); 										// Changes CSS to indicate field is invalid
		phoneFeedback.innerHTML = "Please match the 123-456-7890 format"; 	// Removes feedback
		validField[validIndex] = false; 									// Records the field is invalid
	}
}

// Validates the age field
function checkAge(validIndex) {

	// Tests if the field is empty
	if (age.value.length == 0 || age.value === "") {
		displayFieldError(age,4); 						// Changes CSS to indicate field is invalid
		ageFeedback.innerHTML = "Age Cannot Be Empty"; 	// Displays feedback
		validField[validIndex] = false; 					// Records the field is invalid
	} 

	// Tests if the age inputted is valid
	else if ( /^[0-9]*$/.test(age.value)){

		// Test if the age is under 18
		if( age.value < 18) {
			displayFieldError(age,4); 							// Changes CSS to indicate field is invalid
			ageFeedback.innerHTML = "User Must Be 18 Or Older"; // Displays feedback
			validField[validIndex] = false; 					// Records the field is invalid
		}

		else {
			displayFieldValid(age,4); 	// Changes CSS to indicate field is valid
			ageFeedback.innerHTML = ""; 	// Removes feedback
			validField[validIndex] = true; 	// Records the field is valid
		} 
	}


	else {
		displayFieldError(age,4); 									// Changes CSS to indicate field is invalid
		ageFeedback.innerHTML = "Input Must Be Whole Numbers Only"; // Displays feedback
		validField[validIndex] = false; 							// Records the field is invalid
	}
}

// Validates the street address field
function checkStreet(validIndex) {

	// Tests if the field is empty
	if (street.value.length == 0 || street.value === "") {
		displayFieldError(street,5); 						// Changes CSS to indicate field is invalid
		streetFeedback.innerHTML = "Street Address Cannot Be Empty"; 	// Displays feedback
		validField[validIndex] = false; 					// Records the field is invalid
	} 

	// Tests if the street inputted is valid
	else if ( /^\s*\S+(?:\s+\S+){2}/.test(street.value)){
		displayFieldValid(street,5); 	// Changes CSS to indicate field is valid
		streetFeedback.innerHTML = ""; 	// Removes feedback
		validField[validIndex] = true; 	// Records the field is valid
	} 

	else {
		displayFieldError(street,5); 					// Changes CSS to indicate field is invalid
		streetFeedback.innerHTML = "Not A Valid Adress"; 	// Displays feedback
		validField[validIndex] = false; 				// Records the field is invalid
	}
}


// Validates the city field
function checkCity(validIndex) {

	// Tests if the field is empty
	if (city.value.length == 0 || city.value === "") {
		displayFieldError(city,6); 						// Changes CSS to indicate field is invalid
		cityFeedback.innerHTML = "City Cannot Be Empty"; 	// Displays feedback
		validField[validIndex] = false; 					// Records the field is invalid
	} 

	else {
		displayFieldValid(city,6); 	// Changes CSS to indicate field is valid
		cityFeedback.innerHTML = ""; 	// Removes feedback
		validField[validIndex] = true; 	// Records the field is valid
	} 

}

// Validates the state field
function checkState(validIndex) {

	// Tests if the field is empty
	if (state.selectedIndex == 0) {
		displayFieldError(state,7); 						// Changes CSS to indicate field is invalid
		stateFeedback.innerHTML = "State Must Be Selected"; 	// Displays feedback
		validField[validIndex] = false; 					// Records the field is invalid
	} 

	else {
		displayFieldValid(state,7); 	// Changes CSS to indicate field is valid
		stateFeedback.innerHTML = ""; 	// Removes feedback
		validField[validIndex] = true; 	// Records the field is valid
	} 

}

// Validates the zip code field
function checkZip(validIndex) {

	// Tests if the field is empty
	if (zip.value.length == 0 || zip.value === "") {
		displayFieldError(zip,8); 						// Changes CSS to indicate field is invalid
		zipFeedback.innerHTML = "Zip Cannot Be Empty"; 	// Displays feedback
		validField[validIndex] = false; 					// Records the field is invalid
	} 

	else if (zip.value.length < 5){
		displayFieldError(zip,8); 								// Changes CSS to indicate field is invalid
		zipFeedback.innerHTML = "Zip Must Be 5 Numbers Long"; 	// Displays feedback
		validField[validIndex] = false; 						// Records the field is invalid
	} 

	else if(/^[0-9]*$/.test(zip.value)){
		displayFieldValid(zip,8); 	// Changes CSS to indicate field is valid
		zipFeedback.innerHTML = ""; 	// Removes feedback
		validField[validIndex] = true; 	// Records the field is valid
	} 
	

	else {
		displayFieldError(zip,8); 								// Changes CSS to indicate field is invalid
		zipFeedback.innerHTML = "Zip Must Be Numbers Only"; 	// Displays feedback
		validField[validIndex] = false; 						// Records the field is invalid
	} 

}

// Determines if all fields are valid and displays results
function validateSubmission() {	
	
	//Local variable to indicate if all fields are valid
	let validSubmission = new Boolean(true);

	// Loop that checks the validity for each field and updates local variable if a field is invalid
	for (var i = 0; i < 9; i++) {
		if (validField[i] == false) {
			validSubmission = false;
		}
	}

	// Tests if all fields were found to be valid
	if (validSubmission) {
		result.innerHTML="SUCCESS!";	// Displays that the submission is successful
		result.style.color = "#2d9117";	// Makes the text color of the message green
	} 
	else {
		result.innerHTML = "ERROR!"		// Displays that the submission has errors
		result.style.color = "#4A0203"; // Makes the text color of the message red
	}

}


// Sets focus to the first field with an error
function setFocus() {
	// Local variable to determine the index number of the first field with an error
	var firstError;

	// Loop to test if there is an error and marks the index
	for (var i = 8; i > -1; i--) {
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


/* 
 * This function takes the values the user enters into the form and saves them into  
 *    a JSON object. It then creates a constant and sets it to the values of the 
 *    JSON object in the form of a String. Finally it displays that String in an 
 *    alert box.
 * 
 * NOTE: This function is called via the following path:
 *    <button type="submit" onClick="checkInputs()"> -> checkInputs() ->  
 *    validateSubmission() -> displayUserSubmission()
 
function displayUserSubmission() {

	// JSON object containing the values the user submits to the create account form
	const userSubmissionJSON = {
		"firstName": fName.value, 
		"lastName": lName.value, 
		"email": email.value,
		"password": pass1.value,
		"passwordConfirm": pass2.value,
	};

	// Constant that is set to a formatted String of the JSON object's values
	const outputJSON = userSubmissionJSON.firstName + "\n" 
					 + userSubmissionJSON.lastName + "\n" 
					 + userSubmissionJSON.email + "\n"
					 + userSubmissionJSON.password + "\n"
					 + userSubmissionJSON.passwordConfirm + "\n"

	// Displays an alert box with the values the user submitted
	window.alert(outputJSON);
}

function accountUpdateData() {

	// JSON object containing the values the user submits to the create account form
	const accountUpdateJSON = {
		"firstName": fName.value, 
		"lastName": lName.value, 
		"email": email.value,
		"password": pass1.value,
		"passwordConfirm": pass2.value,
	};

	// Constant that is set to a formatted String of the JSON object's values
	const outputJSON = userSubmissionJSON.firstName + "\n" 
					 + userSubmissionJSON.lastName + "\n" 
					 + userSubmissionJSON.email + "\n"
					 + userSubmissionJSON.password + "\n"
					 + userSubmissionJSON.passwordConfirm + "\n"

	// Displays an alert box with the values the user submitted
	window.alert(outputJSON);
}*/