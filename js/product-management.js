// JavaScript Document 
// Project: Tech Vault 
// Team Members: Josh Wagner, Connor Kish, Nick Trout
// File: product-management.js
// Last Updated: 3/13/22
// Last Updated By: Connor Kish

var productID,
	manufacturer,
	productname,
	description,
    category,
    quantity,
    price,
    weight;

// Variable to represent a JSON object to store account details
var productDetails = {
	"productID":"",
	"manufacturer":"",
	"productname":"",
	"description": "",
	"category": "",
	"quantity": "",
	"price": "",
	"weight": ""
};

const newProduct = document.getElementById("new-product");
const editProduct = document.getElementById("edit-product");
const deleteProduct = document.getElementById("delete-product");
const formactions = document.getElementById("form-actions");

function disableActionButtons() {
	const newProduct = document.getElementById("new-product").disabled = true;
	const editProduct = document.getElementById("edit-product").disabled = true;
	const deleteProduct = document.getElementById("delete-product").disabled = true;
}

function enableActionButtons() {
	const newProduct = document.getElementById("new-product").disabled = false;
	const editProduct = document.getElementById("edit-product").disabled = false;
	const deleteProduct = document.getElementById("delete-product").disabled = false;
}

function disableForm() {
	document.getElementById("ProductID").disabled = true;
	document.getElementById("Manufacturer").disabled = true;
	document.getElementById("ProductName").disabled = true;
	document.getElementById("ProductDescription").disabled = true;
	document.getElementById("Category").disabled = true;
	document.getElementById("Quantity").disabled = true;
	document.getElementById("Price").disabled = true;
	document.getElementById("Weight").disabled = true;
}

function enableForm() {
	document.getElementById("ProductID").disabled = false;
	document.getElementById("Manufacturer").disabled = false;
	document.getElementById("ProductName").disabled = false;
	document.getElementById("ProductDescription").disabled = false;
	document.getElementById("Category").disabled = false;
	document.getElementById("Quantity").disabled = false;
	document.getElementById("Price").disabled = false;
	document.getElementById("Weight").disabled = false;
}

function newProductAction() {
	disableActionButtons();
	enableForm();
	formactions.innerHTML = "";
	formactions.innerHTML = '<button type="submit" class="btn btn-primary" id="save" onClick="confirmSave()">Save</button>' +
							'<button type="submit" class="btn btn-primary" id="cancel" onClick="cancelAction()">Cancel</button>';
	
}

function updateProductAction() {
	disableActionButtons();
	enableForm();
	formactions.innerHTML = "";
	formactions.innerHTML = '<button type="submit" class="btn btn-primary" id="update" onClick="confirmUpdate()">Update</button>' +
							'<button type="submit" class="btn btn-primary" id="cancel" onClick="cancelAction()">Cancel</button>';
	
}

function deleteProductAction() {
	disableActionButtons();
	enableForm();
	formactions.innerHTML = "";
	formactions.innerHTML = '<button type="submit" class="btn btn-primary" id="delete" onClick="confirmDelete()">Delete</button>' +
							'<button type="submit" class="btn btn-primary" id="cancel" onClick="cancelAction()">Cancel</button>';
	
}

function confirmSave() {
	formactions.reset();
	enableActionButtons();
	formactions.innerHTML = "";
}

function confirmUpdate() {
	formactions.reset();
	enableActionButtons();
	formactions.innerHTML = "";
}

function confirmDelete() {
	formactions.reset();
	enableActionButtons();
	formactions.innerHTML = "";
}

function cancelAction() {
	formactions.reset();
	enableActionButtons();
	formactions.innerHTML = "";
	
}