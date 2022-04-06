// JavaScript Document

const products = [
	 	    {
	        "ProductName": "MSI MAG B550 Tomahawk",
	        "ProductID": 200550,
	        "Description": "ATX Motherboard\nSupports AMD Ryzen 5000 \/ 4000 G \/ 3000 Series - AMD B550 Chipset\n4 DDR4 Slots - Max Ram 128GB - Dual Channel Memory Support\n1 PCIe 4.0 x 16 Slot - 1 PCIe 3.0 x 16 Slot - 2 PCIe 3.0 x 1 Slots\n6 SATA Ports - 2 M.2 Slots (Key M)\nCPU Socket - AM4",
	        "Category": "Motherboard",
	        "Manufacturer": "MSI",
	        "Quantity": 15,
	        "Price": 175,
	        "Weight": 24,
	        "Image": "images/products/motherboard.png"
	    },
	    {
	        "ProductName": "Gigabyte B550M DS3H",
	        "ProductID": 200650,
	        "Description": "Micro-ATX Motherboard\nSupports AMD Ryzen 5000 Series - AMD B550 Chipset\n4 DDR4 Slots - Max Ram 128GB - Dual Channel Memory Support\n1 PCIe 4.0 x 16 Slot - 1 PCIe 3.0 x 16 Slot - 1 PCIe 3.0 x 1 Slot\n4 SATA Ports - 2 M.2 Slots (Key M)\nCPU Socket - AM4",
	        "Category": "Motherboard",
	        "Manufacturer": "Gigabyte",
	        "Quantity": 3,
	        "Price": 100,
	        "Weight": 26,
	        "Image": "images/products/motherboard.png"
	    },
	    {
	        "ProductName": "MSI MPG Z490 Gaming Plus",
	        "ProductID": 200490,
	        "Description": "Micro-ATX Motherboard\nSupports Intel 10th \/ 11th Gen - Intel Z490 Chipset\n4 DDR4 Slots - Max Ram 128GB - Dual Channel Memory Support\n2 PCIe 3.0 x 16 Slots - 3 PCIe 3.0 x 1 Slots\n6 SATA Ports - 2 M.2 Slots\nCPU Socket - LGA 1200",
	        "Category": "Motherboard",
	        "Manufacturer": "MSI",
	        "Quantity": 8,
	        "Price": 140,
	        "Weight": 22,
	        "Image": "images/products/motherboard.png"
	    },
	    {
	        "ProductName": "MSI PRO Z690-A",
	        "ProductID": 200690,
	        "Description": "ATX Motherboard\nSupports Intel 12th Gen - Intel Z690 Chipset\n4 DDR4 Slots - Max Ram 128GB - Dual Channel Memory Support\n1 PCIe 5.0 x 16 Slot - 2 PCIe 3.0 x 16 Slots - 1 PCIe 3.0 x 1 Slot\n6 SATA Ports - 4 M.2 Slots",
	        "Category": "Motherboard",
	        "Manufacturer": "MSI",
	        "Quantity": 10,
	        "Price": 220,
	        "Weight": 25,
	        "Image": "images/products/motherboard.png"
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

