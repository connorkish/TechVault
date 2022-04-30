// JavaScript Document 
// Project: Tech Vault 
// Team Members: Josh Wagner, Connor Kish, Nick Trout
// File: create-account.js
// Last Updated: 3/9/22
// Last Updated By: Josh Wagner    


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
	cartQty = 0;

	$.each(cart,function(index,object){	

		subtotal += object.ProductPrice * object.Qty;
		cartQty += object.Qty;					
																		
	})

	updateTotals();

	if(cartQty == 0){									
		$("#cart-num").css({"visibility": "hidden"});
	}
	else{												
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
	var validationPass = true;
	
	$("#form-result-top").html("");


	if (sFName.val().length == 0){
		validationPass = false;
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
		validationPass = false;
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
		validationPass = false;
		$("#ship-street-fail").css({"visibility": "visible"});
		$("#ship-street-feedback").html("Street Cannot Be Empty");
		$("#ship-street-pass").css({"visibility": "hidden"});
	}
	else if( /\w+(\s\w+){2,}/.test(sStreet.val())){
		$("#ship-street-fail").css({"visibility": "hidden"});
		$("#ship-street-feedback").html("");
		$("#ship-street-pass").css({"visibility": "visible"});
	}
	else{
		validationPass = false;
		$("#ship-street-fail").css({"visibility": "visible"});
		$("#ship-street-feedback").html("Invalid Street");
		$("#ship-street-pass").css({"visibility": "hidden"});
	}


	if (sCity.val().length == 0){
		validationPass = false;
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
		validationPass = false;
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
		validationPass = false;
		$("#ship-zip-fail").css({"visibility": "visible"});
		$("#ship-zip-feedback").html("Zip Cannot Be Empty");
		$("#ship-zip-pass").css({"visibility": "hidden"});
	}
	else if (sZip.val().length < 5){
		validationPass = false;
		$("#ship-zip-fail").css({"visibility": "visible"});
		$("#ship-zip-feedback").html("Zip Code Must Be 5 Numbers Long");
		$("#ship-zip-pass").css({"visibility": "hidden"});
	}
	else if (/^[0-9]*$/.test(sZip.val())){
		$("#ship-zip-fail").css({"visibility": "hidden"});
		$("#ship-zip-feedback").html("");
		$("#ship-zip-pass").css({"visibility": "visible"});
	}
	else{
		validationPass = false;
		$("#ship-zip-fail").css({"visibility": "visible"});
		$("#ship-zip-feedback").html("Zip Code Must Be Numbers Only");
		$("#ship-zip-pass").css({"visibility": "hidden"});
	}


	if ($("#ship-carrier option:selected").val() == ""){
		validationPass = false;
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
		validationPass = false;
		$("#ship-option-fail").css({"visibility": "visible"});
		$("#ship-option-feedback").html("Option Must Be Selected");
		$("#ship-option-pass").css({"visibility": "hidden"});
	}
	else{
		$("#ship-option-fail").css({"visibility": "hidden"});
		$("#ship-option-feedback").html("");
		$("#ship-option-pass").css({"visibility": "visible"});
	}

	var cardNumVal = "";

	for( var i = 0; i < bCardNum.val().length; i++){
		if (/\d/.test(bCardNum.val().charAt(i))){
			cardNumVal += bCardNum.val().charAt(i)
		}
	}

	if (bCardNum.val().length == 0){
		validationPass = false;
		$("#card-number-fail").css({"visibility": "visible"});
		$("#card-number-feedback").html("Card Number Cannot Be Empty");
		$("#card-number-pass").css({"visibility": "hidden"});
	} else if (cardNumVal.length != 16){
		validationPass = false;
		$("#card-number-fail").css({"visibility": "visible"});
		$("#card-number-feedback").html("Card Number Must be 16 Numbers");
		$("#card-number-pass").css({"visibility": "hidden"});
	}
	else{
		$("#card-number-fail").css({"visibility": "hidden"});
		$("#card-number-feedback").html("");
		$("#card-number-pass").css({"visibility": "visible"});
	}


	if (bCVV.val().length == 0){
		validationPass = false;
		$("#card-cvv-fail").css({"visibility": "visible"});
		$("#card-cvv-feedback").html("CVV Number Cannot Be Empty");
		$("#card-cvv-pass").css({"visibility": "hidden"});
	}
	else if (bCVV.val().length < 3){
		validationPass = false;
		$("#card-cvv-fail").css({"visibility": "visible"});
		$("#card-cvv-feedback").html("CVV Number Must be 3 - 4 Numbers");
		$("#card-cvv-pass").css({"visibility": "hidden"});
	}
	else if (/^[0-9]*$/.test(bCVV.val())){
		$("#card-cvv-fail").css({"visibility": "hidden"});
		$("#card-cvv-feedback").html("");
		$("#card-cvv-pass").css({"visibility": "visible"});
	}
	else {
		validationPass = false;
		$("#card-cvv-fail").css({"visibility": "visible"});
		$("#card-cvv-feedback").html("CVV Number May Only Contain Numbers");
		$("#card-cvv-pass").css({"visibility": "hidden"});
	}


	


	if (bExp.val().length == 0){
		validationPass = false;
		$("#card-exp-fail").css({"visibility": "visible"});
		$("#card-exp-feedback").html("Expiration Date Cannot Be Empty");
		$("#card-exp-pass").css({"visibility": "hidden"});
	}
	else{

		var today = new Date();
		var exp = new Date(bExp.val());

		if(today.getTime() > exp.getTime()){
			validationPass = false;
			$("#card-exp-fail").css({"visibility": "visible"});
			$("#card-exp-feedback").html("Expiration Date Must Be After This Month");
			$("#card-exp-pass").css({"visibility": "hidden"});
		}
		else{
			$("#card-exp-fail").css({"visibility": "hidden"});
			$("#card-exp-feedback").html("");
			$("#card-exp-pass").css({"visibility": "visible"});
		}
	}




  	if(billAsShip){

  		if (bFName.val().length == 0){
			validationPass = false;
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
			validationPass = false;
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
			validationPass = false;
			$("#bill-street-fail").css({"visibility": "visible"});
			$("#bill-street-feedback").html("Street Cannot Be Empty");
			$("#bill-street-pass").css({"visibility": "hidden"});
		}
		else if( /\w+(\s\w+){2,}/.test(bStreet.val())){
			$("#bill-street-fail").css({"visibility": "hidden"});
			$("#bill-street-feedback").html("");
			$("#bill-street-pass").css({"visibility": "visible"});
		}
		else{
			validationPass = false;
			$("#bill-street-fail").css({"visibility": "visible"});
			$("#bill-street-feedback").html("Invalid Street");
			$("#bill-street-pass").css({"visibility": "hidden"});
		}


		if (bCity.val().length == 0){
			validationPass = false;
			$("#bill-city-fail").css({"visibility": "visible"});
			$("#bill-city-feedback").html("City Cannot Be Empty");
			$("#bill-city-pass").css({"visibility": "hidden"});
		}
		else{
			$("#bill-city-fail").css({"visibility": "hidden"});
			$("#bill-city-feedback").html("");
			$("#bill-city-pass").css({"visibility": "visible"});
		}


		if ($("#bill-state option:selected").val() == ""){
			validationPass = false;
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
			validationPass = false;
			$("#bill-zip-fail").css({"visibility": "visible"});
			$("#bill-zip-feedback").html("Zip Cannot Be Empty");
			$("#bill-zip-pass").css({"visibility": "hidden"});
		}
		else if (bZip.val().length < 5){
			validationPass = false;
			$("#bill-zip-fail").css({"visibility": "visible"});
			$("#bill-zip-feedback").html("Zip Cannot Be Empty");
			$("#bill-zip-pass").css({"visibility": "hidden"});
		}
		else if (/^[0-9]*$/.test(sZip.val())){
			$("#bill-zip-fail").css({"visibility": "hidden"});
			$("#bill-zip-feedback").html("");
			$("#bill-zip-pass").css({"visibility": "visible"});
		}
		else{
			validationPass = false;
			$("#bill-zip-fail").css({"visibility": "visible"});
			$("#bill-zip-feedback").html("Zip Must Be Numbers Only");
			$("#bill-zip-pass").css({"visibility": "hidden"});
		}

  	}


  	if (validationPass){
		submitOrder();
	}
	else{
		$("#form-result-top").html("Oops Check Your Infomation and Try Again");
		$("#form-result-bottom").html("Submission Error");
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
					"Shipping": {														
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
					"Shipping": {	
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

	cart = [];
	loadCart();
	console.log(order);
}