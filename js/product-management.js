// JavaScript Document 
// Project: Tech Vault 
// Team Members: Josh Wagner, Connor Kish, Nick Trout
// File: product-management.js
// Last Updated: 3/13/22
// Last Updated By: Connor Kish

var productID,
	description,
    category,
    quantity,
    price,
    weight;

// Variable to represent a JSON object to store account details
var productDetails = {
	"productID":"",
	"description": "",
	"category": "",
	"quantity": "",
	"price": "",
	"weight": ""
};

function editProductData() {
	
}

function disableSearch() {
	alert("search disabled");
	document.getElementById("product-search").disabled = true;
}