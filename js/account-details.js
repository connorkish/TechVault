// JavaScript Document 
// Project: Tech Vault 
// Team Members: Josh Wagner, Connor Kish, Nick Trout
// File: account-details.js
// Last Updated: 3/9/22
// Last Updated By: Josh Wagner


// Variables to represent each form input field
var fName,
	lName,
    email,
    phone,
    age,
    street,
    city,
    state,
    zip;

// Variables to represent elements that display feedback about submission errors for each input field
var fNameFeedback,
    lNameFeedback,
    emailFeedback,
    phoneFeedback, 
    ageFeedback, 
    streetFeedback,
    cityFeedback,
    stateFeedback,
    zipFeedback;

// Variables to represent an element that displays submission results
var result;

// Array Variables
var validField, 	// Used to track if uesr input in each field is valid
    fields,			// Contains each inputfield
    fieldFeedback 	// Contains each feedback element

// Regular Expression Constant to represents a valid email address
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Constants to represent the elements that make up the content of the page
const accountDetailDisplay = document.getElementById("details");
const accoundDetailForm = document.getElementById("account-form");

// Variable to represent a JSON object to store account details
var accountDetails = {
	"firstName":"John",
	"lastName": "Doe",
	"email": "John@gmail.com",
	"phone": "",
	"address": "",
	"city": "",
	"state": "",
	"zip": "",
	"age": "",
};


// Displays the saved Account Details
function displayAccountDetails() {
	// Clears the HTML from the form
	accoundDetailForm.innerHTML = "";

	// Displays the Account Details without the , in Adress if there is no city saved
	if(accountDetails.city == "") {
			accountDetailDisplay.innerHTML = "<h2>Name: </h2><p>" + accountDetails.firstName + " " + accountDetails.lastName + "</p></br>"
		+ "<h2>Email: </h2><p>" + accountDetails.email + "</p></br>"
		+ "<h2>Phone: </h2><p>" + accountDetails.phone + "</p></br>"
		+ "<h2>Adress: </h2><p>" + accountDetails.address + " " + accountDetails.city + " " + accountDetails.state  + " " + accountDetails.zip + "</p></br>"
		+ "<h2>Age: </h2><p>" + accountDetails.age + "</p></br>"
		+ '<button class="btn btn-primary" id="edit-button" onClick="displayAccountDetailsForm()" >Edit Details</button>';
	} 
	// Displays the Account Details with the , in Address if there is a city saved
	else {
			accountDetailDisplay.innerHTML = "<h2>Name: </h2><p>" + accountDetails.firstName + " " + accountDetails.lastName + "</p></br>"
		+ "<h2>Email: </h2><p>" + accountDetails.email + "</p></br>"
		+ "<h2>Phone: </h2><p>" + accountDetails.phone + "</p></br>"
		+ "<h2>Adress: </h2><p>" + accountDetails.address + " " + accountDetails.city + ", " + accountDetails.state  + " " + accountDetails.zip + "</p></br>"
		+ "<h2>Age: </h2><p>" + accountDetails.age + "</p></br>"
		+ '<button class="btn btn-primary" id="edit-button" onClick="displayAccountDetailsForm()" >Edit Details</button>';
	}
}


// Displays a form to update Details 
function displayAccountDetailsForm() {
	// Clears the HTML from the Account Detail Display
	accountDetailDisplay.innerHTML = "";

	// Adds the HTML to the Form element
	accoundDetailForm.innerHTML = '<div id="row1">'
			+		 '<div class="form-group offset-md-0 offset-sm-0 offset-xl-0 " id="fname-container">'
			+			'<label for="fname">First Name</label>'
			+			'<input type="text" class="form-control" id="fname" placeholder="John" onfocus="selectField(0)" onblur="unselectField(0)">'
			+			'<i class="fa-solid fa-circle-check" id="fname-pass"></i>'
			+			'<i class="fa-solid fa-circle-xmark" id="fname-fail"></i>'
			+			'<small class="form-feedback" id="fname-feedback"></small>'
			+		'</div>'
			+		'<div class="form-group offset-md-0 offset-sm-0 offset-xl-0" id="lname-container">'
			+			'<label for="lname">Last Name</label>'
			+			'<input type="text" class="form-control" id="lname" placeholder="Smith" onfocus="selectField(1)" onblur="unselectField(1)">'
			+			'<i class="fa-solid fa-circle-check" id="lname-pass"></i>'
			+			'<i class="fa-solid fa-circle-xmark" id="lname-fail"></i>'
			+			'<small class="form-feedback" id="lname-feedback"></small>'
			+		'</div>'
			+	'</div>'
			+	'<div class="form-group offset-md-0 offset-xl-0" id="email-container">'
			+    	'<label for="email">Email Address</label>'
			+    	'<input type="email" class="form-control" id="email" placeholder="example@something.com" onfocus="selectField(2)" onblur="unselectField(2)">'
			+		'<i class="fa-solid fa-circle-check" id="email-pass"></i>'
			+		'<i class="fa-solid fa-circle-xmark" id="email-fail"></i>'
			+		'<small class="form-feedback" id="email-feedback"></small>'
			+  	'</div>'
			+	'<div id="row3">'
			+		'<div class="form-group offset-md-0 offset-xl-0" id="phone-container">'
			+			'<label for="phone">Phone Number<section id="optional"> (Optional)</section></label>'
			+			'<input type="tel" class="form-control" id="phone" placeholder="800-555-5555"  onfocus="selectField(3)" onblur="unselectField(3)">'
			+			'<i class="fa-solid fa-circle-check" id="phone-pass"></i>'
			+			'<i class="fa-solid fa-circle-xmark" id="phone-fail"></i>'
			+			'<small class="form-feedback" id="phone-feedback"></small>'
			+		'</div>'
			+		'<div class="form-group offset-md-0 offset-xl-0" id="age-container">'
			+			'<label for="age">Age</label>'
			+			'<input type="number" class="form-control" id="age" placeholder="99" onfocus="selectField(4)" onblur="unselectField(4)">'
			+			'<i class="fa-solid fa-circle-check" id="age-pass"></i>'
			+			'<i class="fa-solid fa-circle-xmark" id="age-fail"></i>'
			+			'<small class="form-feedback" id="age-feedback"></small>'
			+		'</div>'
			+	'</div>'
			+	'<div class="form-group offset-md-0 offset-xl-0" id="street-address-container">'
			+    	'<label for="street-address">Street Address</label>'
			+    	'<input type="text" class="form-control" id="street-address" placeholder="10 Cherry Lane" onfocus="selectField(5)" onblur="unselectField(5)">'
			+		'<i class="fa-solid fa-circle-check" id="street-pass"></i>'
			+		'<i class="fa-solid fa-circle-xmark" id="street-fail"></i>'
			+		'<small class="form-feedback" id="street-feedback"></small>'
			+  	'</div>'
			+	'<div id="row5">'
			+		'<div class="form-group offset-md-0 offset-xl-0" id="city-container">'
			+			'<label for="city">City</label>'
			+			'<input type="text" class="form-control" id="city" placeholder="York" onfocus="selectField(6)" onblur="unselectField(6)">'
			+			'<i class="fa-solid fa-circle-check" id="city-pass"></i>'
			+			'<i class="fa-solid fa-circle-xmark" id="city-fail"></i>'
			+			'<small class="form-feedback" id="city-feedback"></small>'
			+		'</div>'
			+		'<div class="form-group offset-md-0 offset-xl-0" id="state-container">'
			+			'<label for="state" >State</label>'
			+			'<select name="state" class="form-control" id="state" onfocus="selectField(7)" onblur="unselectField(7)">'
			+				'<option value="">- Select -</option>'
			+				'<option value="AL">AL</option>'
			+				'<option value="AK">AK</option>'
			+				'<option value="AZ">AZ</option>'
			+				'<option value="AR">AR</option>'
			+				'<option value="CA">CA</option>'
			+				'<option value="CO">CO</option>'
			+				'<option value="CT">CT</option>'
			+				'<option value="DE">DE</option>'
			+				'<option value="DC">DC</option>'
			+				'<option value="GA">GA</option>'
			+				'<option value="HI">HI</option>'
			+				'<option value="ID">ID</option>'
			+				'<option value="IL">IL</option>'
			+				'<option value="IN">IN</option>'
			+				'<option value="IA">IA</option>'
			+				'<option value="KS">KS</option>'
			+				'<option value="KY">KY</option>'
			+				'<option value="LA">LA</option>'
			+				'<option value="ME">ME</option>'
			+				'<option value="MD">MD</option>'
			+				'<option value="MA">MA</option>'
			+				'<option value="MI">MI</option>'
			+				'<option value="MN">MN</option>'
			+				'<option value="MS">MS</option>'
			+				'<option value="MO">MO</option>'
			+				'<option value="MT">MT</option>'
			+				'<option value="NE">NE</option>'
			+				'<option value="NV">NV</option>'
			+				'<option value="NH">NH</option>'
			+				'<option value="NJ">NJ</option>'
			+				'<option value="NM">NM</option>'
			+				'<option value="NY">NY</option>'
			+				'<option value="NC">NC</option>'
			+				'<option value="ND">ND</option>'
			+				'<option value="OH">OH</option>'
			+				'<option value="OK">OK</option>'
			+				'<option value="OR">OR</option>'
			+				'<option value="PA">PA</option>'
			+				'<option value="RI">RI</option>'
			+				'<option value="SC">SC</option>'
			+				'<option value="SD">SD</option>'
			+				'<option value="TN">TN</option>'
			+				'<option value="TX">TX</option>'
			+				'<option value="UT">UT</option>'
			+				'<option value="VT">VT</option>'
			+				'<option value="VA">VA</option>'
			+				'<option value="WA">WA</option>'
			+				'<option value="WV">WV</option>'
			+				'<option value="WI">WI</option>'
			+				'<option value="WY">WY</option>'
			+			'</select>'
			+			'<i class="fa-solid fa-circle-check" id="state-pass"></i>'
			+			'<i class="fa-solid fa-circle-xmark" id="state-fail"></i>'
			+			'<small class="form-feedback" id="state-feedback"></small>'
			+		'</div>'
			+		'<div class="form-group offset-md-0 offset-xl-0" id="zip-container">'
			+			'<label for="zip">Zip Code</label>'
			+			'<input type="text" class="form-control" id="zip" placeholder="12345" maxlength="5" onfocus="selectField(8)" onblur="unselectField(8)">'
			+			'<i class="fa-solid fa-circle-check" id="zip-pass"></i>'
			+			'<i class="fa-solid fa-circle-xmark" id="zip-fail"></i>'
			+			'<small class="form-feedback" id="zip-feedback"></small>'
			+		'</div>'
			+	  '</div>'
		    +	  '<div class="offset-md-0 offset-lg-0" id="form-buttons">'
			+	 	'<button type="submit" class="btn btn-primary" id="submit-button" onClick="checkInputs()" >Update Info</button>'
			+	 	'<h2 id="form-result"></h2>'
          	+	  '</div>';
    
    // Sets the form variables
    setVars();

    // Adds any saved values from the Account Details JSON to the related form fields
    loadFormValues();
}


// Sets the form variables
function setVars() {
	// Sets field variables
	fName = document.getElementById("fname");
	lName = document.getElementById("lname");
	email = document.getElementById("email");
	phone = document.getElementById("phone");
	age = document.getElementById("age");
	street = document.getElementById("street-address");
	city = document.getElementById("city");
	state = document.getElementById("state");
	zip = document.getElementById("zip");

	// Sets feedback variables
 	fNameFeedback = document.getElementById("fname-feedback");
 	lNameFeedback = document.getElementById("lname-feedback");
 	emailFeedback = document.getElementById("email-feedback");
 	phoneFeedback = document.getElementById("phone-feedback");
 	ageFeedback = document.getElementById("age-feedback");
 	streetFeedback = document.getElementById("street-feedback");
 	cityFeedback = document.getElementById("city-feedback");
 	stateFeedback = document.getElementById("state-feedback");
 	zipFeedback = document.getElementById("zip-feedback");

	// Sets result variable
	result = document.getElementById("form-result");

	// Sets Array variables
	validField = [];
	fields = [fName, lName, email, phone, age, street, city, state, zip];
	fieldFeedback = [fNameFeedback, lNameFeedback, emailFeedback, phoneFeedback, ageFeedback, streetFeedback, cityFeedback, stateFeedback, zipFeedback];
}


// Adds any saved values from the Account Details JSON to the related form fields
function loadFormValues() {
	fName.value = accountDetails.firstName;
	lName.value = accountDetails.lastName;
	email.value = accountDetails.email;
	phone.value = accountDetails.phone;
	age.value = accountDetails.age;
	street.value = accountDetails.address;
	city.value = accountDetails.city;
	state.value = accountDetails.state;
	zip.value = accountDetails.zip;
}


// Highlights an input field when onFocus()
function selectField(id) {
	fields[id].style.borderWidth="5px";				 // Increase border size
	fields[id].classList.remove("unselected-field"); // Remove class to remove css
	fields[id].classList.add("selected-field");		 // Add class to apply css
}


// Removes highlighted features when onBlur()
function unselectField(id) {
	fields[id].style.borderWidth="3px";				// Hides border
	fields[id].classList.remove("selected-field");	// Remove class to remove css
	fields[id].classList.add("unselected-field");	// Adds class to apply css
}


// Calls other functions to validate user inputs
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
		updateAccountDetails();
		displayAccountDetails();
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


// Function
function updateAccountDetails() {
	accountDetails.firstName = fName.value;
	accountDetails.lastName = lName.value;
	accountDetails.email = email.value;
	accountDetails.phone = phone.value;
	accountDetails.age = age.value;
	accountDetails.address = street.value;
	accountDetails.city = city.value;
	accountDetails.state = state.value;
	accountDetails.zip = zip.value;
}