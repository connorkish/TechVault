// JavaScript Document

const products = [
	 {
	  "ProductName": "Intel Core i3-8350k",
	  "Product ID": 100300,
	  "Description": "4 Cores - 4 Threads - 91 Watts\nBase Clock Speed - 4.0 GHz\nIntel UHD Graphics 630\nDDR4 Support\nSocket - LGA 1151",
	  "Category": "CPU",
	  "Manufacturer": "Intel",
	  "Quantity": 10,
	  "Price": 250,
	  "Weight": 1.5,
	  "Image": "images/products/cpu.png"
	 },
	 {
	  "ProductName": "Intel Core i5-10400",
	  "ProductID": 100500,
	  "Description": "6 Cores - 12 Threads - 65 Watts\nBase Clock Speed - 2.9 GHz\nTurbo Boost up to 4.3 GHz\nIntel UHD Graphics 630\nDDR4 Support\nSocket - LGA 1200",
	  "Category": "CPU",
	  "Manufacturer": "Intel",
	  "Quantity": 12,
	  "Price": 150,
	  "Weight": 1.5,
	  "Image": "images/products/cpu.png"
	 },
	 {
	  "ProductName": "Intel Core i7-10700",
	  "ProductID": 100700,
	  "Description": "8 Cores - 16 Threads - 65 Watts\nBase Clock Speed - 2.9 GHz\nTurbo Boost up to 4.8 GHz\nIntel UHD Graphics 630\nDDR4 Support\nSocket - LGA 1200",
	  "Category": "CPU",
	  "Manufacturer": "Intel",
	  "Quantity": 5,
	  "Price": 300,
	  "Weight": 1.7,
	  "Image": "images/products/cpu.png"
	 },	 
	 {
	  "ProductName": "Intel Core i9-12900k",
	  "ProductID": 100900,
	  "Description": "16 Cores - 24 Threads - 125-241 Watts\nBase Clock Speed - 3.2 GHz\nOverclock up to 5.1 GHz\nIntel UHD Graphics 770\nDDR4 Support\nSocket - LGA 1700",
	  "Category": "CPU",
	  "Manufacturer": "Intel",
	  "Quantity": 25,
	  "Price": 610,
	  "Weight": 2.3,
	  "Image": "images/products/cpu.png"
	 },
	 {
	  "ProductName": "AMD Ryzen 5 5600X",
	  "ProductID": 100560,
	  "Description": "6 Cores - 12 Threads - 65 Watts\nBase Clock Speed - 3.7 GHz\nOverclock up to 4.6 GHz\nSocket - AM4",
	  "Category": "CPU",
	  "Manufacturer": "AMD",
	  "Quantity": 8,
	  "Price": 230,
	  "Weight": 1.6,
	  "Image": "images/products/cpu.png"
	 },
	 {
	  "ProductName": "AMD Ryzen 9 5950X",
	  "ProductID": 100590,
	  "Description": "16 Cores - 32 Threads - 105 Watts\nBase Clock Speed - 3.4 GHz\nOverclock up to 4.9 Ghz\nSocket - AM4",
	  "Category": "CPU",
	  "Manufacturer": "AMD",
	  "Quantity": 5,
	  "Price": 520,
	  "Weight": 2.2,
	  "Image": "images/products/cpu.png"		 
	 }]


function loadResults() {
	var output;										// Local Variable to hold search result html

	$.each(products,function(index,object){				// Iterates through products
																			
			output =  '<div class="product">';
			output += '<div class="product-image"><img src="' + object.Image + '"></div>';
			output += '<p class="result-name">NAME: ' + object.ProductName + '</p>';
			output += '<p>ID: ' + object.ProductID + '</p>';
			output += '<p>CAT: ' + object.Category + '</p>';
			output += '<p>MANF: ' + object.Manufacturer + '</p>';
			output += '<p>QTY: x' + object.Quantity + '</p>';
			output += '<p>Price: $' + object.Price + '</p>';
			output += '<p>WEIGHT: ' + object.Weight + 'oz</p>';
			output += '<button class="btn btn-primary" id="add-to-cart">Add To Cart</button>';
			output += '</div>';									

			$("#content-container").append(output); // Adds the new html to the page
		}
	)}

$(document).ready(loadResults);