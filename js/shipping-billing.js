// JavaScript Document 
// Project: Tech Vault 
// Team Members: Josh Wagner, Connor Kish, Nick Trout
// File: create-account.js
// Last Updated: 3/9/22
// Last Updated By: Josh Wagner    

/*
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

*/

// Input fields
const sFName = $("#ship-fname"),
	  sLName = $("#ship-lname"),
	  sStreet = $("#ship-street-address"),
	  sCity = $("#ship-city"),
	  sState = $("#ship-state"),
	  sZip = $("#ship-zip"),
	  sCarrier = $("#ship-carrier"),
	  sOption = $("#ship-option"),
	  bCardNum = $("#card-number"),
	  bCVV = $("#card-cvv"),
	  bExp = $("#card-exp"),
	  bSameShip = $("#same-ship"),
	  bFName = $("#bill-fname"),
	  bLName = $("#bill-lname"),
	  bStreet = $("#bill-street-address"),
	  bCity = $("#bill-city"),
	  bState = $("#bill-state"),
	  bZip = $("#bill-zip");

// Simulated Shopping cart
var cart = [{
	        "ProductID": 200650,
	        "Qty": 1,
	        "ProductPrice": 100,
	        "Image": "images/products/motherboard/mb2.png",
	        "ProductName": "Gigabyte B550M DS3H"
	    },
	    {
	        "ProductID": 100300,
	        "Qty": 1,
	        "ProductPrice": 250,
	        "Image": "images/products/cpu/cpu1.png",
	        "ProductName": "Intel Core i3-8350k" 
	    },
	    {
	        "ProductID": 500500,
	        "Qty": 1,
	        "ProductPrice": 75,
			"Image": "images/products/power.png",
	        "ProductName": "Rosewill Glacier Series 850W ATX Single 12V Rail" 
	    },
	     {
	     	"ProductID": 300300,
	     	"Qty": 3,
	     	"ProductPrice": 64,
	     	"Image": "images/products/memory.png",
	        "ProductName": "G.SKILL Ripjaws V Series 16GB DDR4 SDRAM"
	    },
	    {
	        "ProductID": 600100,
        	"Qty": 1,
        	"ProductPrice": 100,
			"Image": "images/products/case.png",
	        "ProductName": "Corsair 4000D Mid-Tower ATX Case"  
	    }

	    ];

var order;

var cartQty = 0,
	subtotal = 0.00,
 	tax = 0.00,
 	shipping = 0.00,
 	total = 0.00,
 	taxPercent = 0.06,
 	shipPercent = 0.04,
 	shipSpecial = 0.00,
 	billAsShip;


$(document).ready(

	loadCart(),
	updateShipping(),
	determineBillingAddressBox(),
	applyShippingToBilling()

);

function loadCart(){

	$.each(cart,function(index,object){	

		subtotal += object.ProductPrice * object.Qty;
		cartQty += object.Qty;					
																		
	})

	updateTotals();

	if(cartQty == 0){									// If the cart is empty, hide the icon
		$("#cart-num").css({"visibility": "hidden"});
	}
	else{												// Else there are items in the cart, show the icon, and udpate the value
		$("#cart-num").css({"visibility": "visible"});
		$("#cart-num").html(cartQty);
	}
}

function updateShipping(){

	if(sOption.val() == "Same Week Shipping +$15"){
		shipSpecial = 15.00;
	} 
	else if (sOption.val() == "Express Shipping +$25"){
		shipSpecial = 25.00;
	}
	else if (sOption.val() == "Same Day Shipping +$50"){
		shipSpecial = 50.00;
	}
	else{
		shipSpecial = 0.00;
	}

	updateTotals();
}

function determineBillingAddressBox(){
	if (bSameShip.is(":checked")){
			billAsShip = true;
		}
		else{
			billAsShip = false;
		}
}

function applyShippingToBilling(){

	if(billAsShip == true){

		bFName.val("");
		bFName.prop("disabled", true);
		$("#bill-fname-pass").css({"visibility": "hidden"});
		$("#bill-fname-fail").css({"visibility": "hidden"});
		$("#bill-fname-feedback").css({"visibility": "hidden"});

		bLName.val("");
		bLName.prop("disabled", true);
		$("#bill-lname-pass").css({"visibility": "hidden"});
		$("#bill-lname-fail").css({"visibility": "hidden"});
		$("#bill-lname-feedback").css({"visibility": "hidden"});

		bStreet.val("");
		bStreet.prop("disabled", true);
		$("#bill-street-pass").css({"visibility": "hidden"});
		$("#bill-street-fail").css({"visibility": "hidden"});
		$("#bill-street-feedback").css({"visibility": "hidden"});

		bCity.val("");
		bCity.prop("disabled", true);
		$("#bill-city-pass").css({"visibility": "hidden"});
		$("#bill-city-fail").css({"visibility": "hidden"});
		$("#bill-city-feedback").css({"visibility": "hidden"});

		bState.val("val1").change();
		bState.prop("disabled", true);
		$("#bill-state-pass").css({"visibility": "hidden"});
		$("#bill-state-fail").css({"visibility": "hidden"});
		$("#bill-state-feedback").css({"visibility": "hidden"});

		bZip.val("");
		bZip.prop("disabled", true);
		$("#bill-zip-pass").css({"visibility": "hidden"});
		$("#bill-zip-fail").css({"visibility": "hidden"});
		$("#bill-zip-feedback").css({"visibility": "hidden"});

		billAsShip = false;
	} 
	else {

		bFName.prop("disabled", false);
		$("#bill-fname-feedback").html("");
		$("#bill-fname-feedback").css({"visibility": "visible"});

		bLName.prop("disabled", false);
		$("#bill-lname-feedback").html("");
		$("#bill-lname-feedback").css({"visibility": "visible"});

		bStreet.prop("disabled", false);
		$("#bill-street-feedback").html("");
		$("#bill-street-feedback").css({"visibility": "visible"});

		bCity.prop("disabled", false);
		$("#bill-city-feedback").html("");
		$("#bill-city-feedback").css({"visibility": "visible"});

		bState.prop("disabled", false);
		$("#bill-state-feedback").html("");
		$("#bill-state-feedback").css({"visibility": "visible"});

		bZip.prop("disabled", false);
		$("#bill-zip-feedback").html("");
		$("#bill-zip-feedback").css({"visibility": "visible"});

		billAsShip = true;
	}
}

function updateTotals(){
	tax = subtotal * taxPercent;
	shipping = subtotal * shipPercent + shipSpecial;
	total = subtotal + tax + shipping;


	$("#subtotal-value").html("$" + subtotal.toFixed(2));
	$("#tax-value").html("$" + tax.toFixed(2));
	$("#ship-value").html("$" + shipping.toFixed(2));
	$("#total-value").html("$" + total.toFixed(2));
}


function validate(){
	$("#form-result-top").html("");

	if (sFName.val().length == 0){
		$("#form-result-top").html("Error");
		$("#form-result-bottom").html("Error");
		$("#ship-fname-fail").css({"visibility": "visible"});
		$("#ship-fname-feedback").html("First Name Cannot Be Empty");
		$("#ship-fname-pass").css({"visibility": "hidden"});
	}
	else{
		$("#ship-fname-fail").css({"visibility": "hidden"});
		$("#ship-fname-feedback").html("");
		$("#ship-fname-pass").css({"visibility": "visible"});
	}


	if (sLName.val().length == 0){
		$("#form-result-top").html("Error");
		$("#form-result-bottom").html("Error");
		$("#ship-lname-fail").css({"visibility": "visible"});
		$("#ship-lname-feedback").html("Last Name Cannot Be Empty");
		$("#ship-lname-pass").css({"visibility": "hidden"});
	}
	else{
		$("#ship-lname-fail").css({"visibility": "hidden"});
		$("#ship-lname-feedback").html("");
		$("#ship-lname-pass").css({"visibility": "visible"});
	}


	if (sStreet.val().length == 0){
		$("#form-result-top").html("Error");
		$("#form-result-bottom").html("Error");
		$("#ship-street-fail").css({"visibility": "visible"});
		$("#ship-street-feedback").html("Street Cannot Be Empty");
		$("#ship-street-pass").css({"visibility": "hidden"});
	}
	else{
		$("#ship-street-fail").css({"visibility": "hidden"});
		$("#ship-street-feedback").html("");
		$("#ship-street-pass").css({"visibility": "visible"});
	}


	if (sCity.val().length == 0){
		$("#form-result-top").html("Error");
		$("#form-result-bottom").html("Error");
		$("#ship-city-fail").css({"visibility": "visible"});
		$("#ship-city-feedback").html("City Cannot Be Empty");
		$("#ship-city-pass").css({"visibility": "hidden"});
	}
	else{
		$("#ship-city-fail").css({"visibility": "hidden"});
		$("#ship-city-feedback").html("");
		$("#ship-city-pass").css({"visibility": "visible"});
	}


	if ($("#ship-state option:selected").val() == ""){
		$("#form-result-top").html("Error");
		$("#form-result-bottom").html("Error");
		$("#ship-state-fail").css({"visibility": "visible"});
		$("#ship-state-feedback").html("State Must Be Selected");
		$("#ship-state-pass").css({"visibility": "hidden"});
	}
	else{
		$("#ship-state-fail").css({"visibility": "hidden"});
		$("#ship-state-feedback").html("");
		$("#ship-state-pass").css({"visibility": "visible"});
	}


	if (sZip.val().length == 0){
		$("#form-result-top").html("Error");
		$("#form-result-bottom").html("Error");
		$("#ship-zip-fail").css({"visibility": "visible"});
		$("#ship-zip-feedback").html("Zip Cannot Be Empty");
		$("#ship-zip-pass").css({"visibility": "hidden"});
	}
	else{
		$("#ship-zip-fail").css({"visibility": "hidden"});
		$("#ship-zip-feedback").html("");
		$("#ship-zip-pass").css({"visibility": "visible"});
	}


	if ($("#ship-carrier option:selected").val() == ""){
		$("#form-result-top").html("Error");
		$("#form-result-bottom").html("Error");
		$("#ship-carrier-fail").css({"visibility": "visible"});
		$("#ship-carrier-feedback").html("Carrier Must Be Selected");
		$("#ship-carrier-pass").css({"visibility": "hidden"});
	}
	else{
		$("#ship-carrier-fail").css({"visibility": "hidden"});
		$("#ship-carrier-feedback").html("");
		$("#ship-carrier-pass").css({"visibility": "visible"});
	}


	if ($("#ship-option option:selected").val() == ""){
		$("#form-result-top").html("Error");
		$("#form-result-bottom").html("Error");
		$("#ship-option-fail").css({"visibility": "visible"});
		$("#ship-option-feedback").html("Option Must Be Selected");
		$("#ship-option-pass").css({"visibility": "hidden"});
	}
	else{
		$("#ship-option-fail").css({"visibility": "hidden"});
		$("#ship-option-feedback").html("");
		$("#ship-option-pass").css({"visibility": "visible"});
	}


	if (bCardNum.val().length == 0){
		$("#form-result-top").html("Error");
		$("#form-result-bottom").html("Error");
		$("#card-number-fail").css({"visibility": "visible"});
		$("#card-number-feedback").html("Card Number Cannot Be Empty");
		$("#card-number-pass").css({"visibility": "hidden"});
	}
	else{
		$("#card-number-fail").css({"visibility": "hidden"});
		$("#card-number-feedback").html("");
		$("#card-number-pass").css({"visibility": "visible"});
	}


	if (bCVV.val().length == 0){
		$("#form-result-top").html("Error");
		$("#form-result-bottom").html("Error");
		$("#card-cvv-fail").css({"visibility": "visible"});
		$("#card-cvv-feedback").html("CVV Number Cannot Be Empty");
		$("#card-cvv-pass").css({"visibility": "hidden"});
	}
	else{
		$("#card-cvv-fail").css({"visibility": "hidden"});
		$("#card-cvv-feedback").html("");
		$("#card-cvv-pass").css({"visibility": "visible"});
	}


	if (bExp.val().length == 0){
		$("#form-result-top").html("Error");
		$("#form-result-bottom").html("Error");
		$("#card-exp-fail").css({"visibility": "visible"});
		$("#card-exp-feedback").html("CVV Number Cannot Be Empty");
		$("#card-exp-pass").css({"visibility": "hidden"});
	}
	else{
		$("#card-exp-fail").css({"visibility": "hidden"});
		$("#card-exp-feedback").html("");
		$("#card-exp-pass").css({"visibility": "visible"});
	}


  	if(billAsShip){

  		if (bFName.val().length == 0){
			$("#form-result-top").html("Error");
			$("#form-result-bottom").html("Error");
			$("#bill-fname-fail").css({"visibility": "visible"});
			$("#bill-fname-feedback").html("First Name Cannot Be Empty");
			$("#bill-fname-pass").css({"visibility": "hidden"});
		}
		else{
			$("#bill-fname-fail").css({"visibility": "hidden"});
			$("#bill-fname-feedback").html("");
			$("#bill-fname-pass").css({"visibility": "visible"});
		}


		if (bLName.val().length == 0){
			$("#form-result-top").html("Error");
			$("#form-result-bottom").html("Error");
			$("#bill-lname-fail").css({"visibility": "visible"});
			$("#bill-lname-feedback").html("Last Name Cannot Be Empty");
			$("#bill-lname-pass").css({"visibility": "hidden"});
		}
		else{
			$("#bill-lname-fail").css({"visibility": "hidden"});
			$("#bill-lname-feedback").html("");
			$("#bill-lname-pass").css({"visibility": "visible"});
		}


		if (bStreet.val().length == 0){
			$("#form-result-top").html("Error");
			$("#form-result-bottom").html("Error");
			$("#bill-street-fail").css({"visibility": "visible"});
			$("#bill-street-feedback").html("Street Cannot Be Empty");
			$("#bill-street-pass").css({"visibility": "hidden"});
		}
		else{
			$("#bill-street-fail").css({"visibility": "hidden"});
			$("#bill-street-feedback").html("");
			$("#bill-street-pass").css({"visibility": "visible"});
		}


		if (bCity.val().length == 0){
			$("#form-result-top").html("Error");
			$("#form-result-bottom").html("Error");
			$("#bill-city-fail").css({"visibility": "visible"});
			$("#bill-city-feedback").html("City Cannot Be Empty");
			$("#bill-city-pass").css({"visibility": "hidden"});
		}
		else{
			$("#ship-city-fail").css({"visibility": "hidden"});
			$("#bill-city-feedback").html("");
			$("#bill-city-pass").css({"visibility": "visible"});
		}


		if ($("#bill-state option:selected").val() == ""){
			$("#form-result-top").html("Error");
			$("#form-result-bottom").html("Error");
			$("#bill-state-fail").css({"visibility": "visible"});
			$("#bill-state-feedback").html("State Must Be Selected");
			$("#bill-state-pass").css({"visibility": "hidden"});
		}
		else{
			$("#bill-state-fail").css({"visibility": "hidden"});
			$("#bill-state-feedback").html("");
			$("#bill-state-pass").css({"visibility": "visible"});
		}


		if (bZip.val().length == 0){
			$("#form-result-top").html("Error");
			$("#form-result-bottom").html("Error");
			$("#bill-zip-fail").css({"visibility": "visible"});
			$("#bill-zip-feedback").html("Zip Cannot Be Empty");
			$("#bill-zip-pass").css({"visibility": "hidden"});
		}
		else{
			$("#bill-zip-fail").css({"visibility": "hidden"});
			$("#bill-zip-feedback").html("");
			$("#bill-zip-pass").css({"visibility": "visible"});
		}

  	}


  	if($("#form-result-top").text() == ""){
  		submitOrder();
  	}
}


function submitOrder(){
	$("#checkout-banner").html("");

	var success = "<h1 id='success'>Your Order Has Been Placed</h1>"

	$("#checkout-banner").html(success);
	$("#form-buttons").html("");

	sFName.prop("disabled", true);
	sLName.prop("disabled", true);
	sStreet.prop("disabled", true);
	sCity.prop("disabled", true);
	sState.prop("disabled", true);
	sZip.prop("disabled", true);
	sCarrier.prop("disabled", true);
	sOption.prop("disabled", true);
	bCardNum.prop("disabled", true);
	bCVV.prop("disabled", true);
	bExp.prop("disabled", true);
	bSameShip.prop("disabled", true);
	bFName.prop("disabled", true);
	bLName.prop("disabled", true);
	bStreet.prop("disabled", true);
	bCity.prop("disabled", true);
	bState.prop("disabled", true);
	bZip.prop("disabled", true);

	createOrderJSON();
}

function createOrderJSON(){
	if (bSameShip.is(":checked")){
		order = {
					"Cart": cart, 
					"Totals": {
						"Subtotal": subtotal,
						"Tax": tax,
						"shipping": shipping,
						"Total": total
					},
					"Shipping": {														// Adds to the new cart JSON array
						"FirstName": sFName.val(), 
						"LastName": sLName.val(), 
						"Street": sStreet.val(),
						"City": sCity.val(),
						"State": sState.val(),
						"Zip": sZip.val(),
						"Carrier": sCarrier.val(),
						"Option": sOption.val()
					},
					"Billing": {
						"CardNumber": bCardNum.val(),
						"CVVNumber": bCVV.val(),
						"ExpirationDate": bExp.val(),
						"FirstName": sFName.val(), 
						"LastName": sLName.val(), 
						"Street": sStreet.val(),
						"City": sCity.val(),
						"State": sState.val(),
						"Zip": sZip.val(),
					}
				}; 
	}
	else{
		order = {
					"Cart": cart, 
					"Totals": {
						"Subtotal": subtotal,
						"Tax": tax,
						"shipping": shipping,
						"Total": total
					},
					"Shipping": {														// Adds to the new cart JSON array
						"FirstName": sFName.val(), 
						"LastName": sLName.val(), 
						"Street": sStreet.val(),
						"City": sCity.val(),
						"State": sState.val(),
						"Zip": sZip.val(),
						"Carrier": sCarrier.val(),
						"Option": sOption.val()
					},
					"Billing": {
						"CardNumber": bCardNum.val(),
						"CVVNumber": bCVV.val(),
						"ExpirationDate": bExp.val(),
						"FirstName": bFName.val(), 
						"LastName": bLName.val(), 
						"Street": bStreet.val(),
						"City": bCity.val(),
						"State": bState.val(),
						"Zip": bZip.val(),
					}
				}; 
	}	

	console.log(order);
}