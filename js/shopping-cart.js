const myProducts = [
	    {
	        "ProductName": "Intel Core i3-8350k",
	        "ProductID": 100300,
	        "Description": "4 Cores - 4 Threads - 91 Watts\nBase Clock Speed - 4.0 GHz\nIntel UHD Graphics 630\nDDR4 Support\nSocket - LGA 1151",
	        "Category": "CPU",
	        "Manufacturer": "Intel",
	        "Quantity": 10,
	        "Price": 250,
	        "Weight": 1.5,
	        "Image": "images/products/cpu/cpu1.png"
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
	        "Image": "images/products/cpu/cpu2.png"
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
	        "Image": "images/products/cpu/cpu3.png"
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
	        "Image": "images/products/cpu/cpu4.png"
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
	        "Image": "images/products/cpu/cpu5.png"
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
	        "Image": "images/products/cpu/cpu6.png"
	    },
	    {
	        "ProductName": "MSI MAG B550 Tomahawk",
	        "ProductID": 200550,
	        "Description": "ATX Motherboard\nSupports AMD Ryzen 5000 \/ 4000 G \/ 3000 Series - AMD B550 Chipset\n4 DDR4 Slots - Max Ram 128GB - Dual Channel Memory Support\n1 PCIe 4.0 x 16 Slot - 1 PCIe 3.0 x 16 Slot - 2 PCIe 3.0 x 1 Slots\n6 SATA Ports - 2 M.2 Slots (Key M)\nCPU Socket - AM4",
	        "Category": "Motherboard",
	        "Manufacturer": "MSI",
	        "Quantity": 15,
	        "Price": 175,
	        "Weight": 24,
	        "Image": "images/products/motherboard/mb1.png"
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
	        "Image": "images/products/motherboard/mb2.png"
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
	        "Image": "images/products/motherboard/mb3.png"
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
	        "Image": "images/products/motherboard/mb4.png"
	    },
	    {
	        "ProductName": "Corsair Vengeance RGB Pro 32GB DDR4 SDRAM",
	        "ProductID": 300100,
	        "Description": "DDR4 Memory\nCapacity - 32GB (2 x 16GB)\nSpeed - 3600",
	        "Category": "Memory",
	        "Manufacturer": "Corsair",
	        "Quantity": 12,
	        "Price": 130,
	        "Weight": 1,
	        "Image": "images/products/memory.png"
	    },
	    {
	        "ProductName": "Corsair Vengeance RGB Pro 64GB DDR4 SDRAM",
	        "ProductID": 300200,
	        "Description": "DDR4 Memory\nCapacity - 64GB (4 x 16GB)\nSpeed - 3600",
	        "Category": "Memory",
	        "Manufacturer": "Corsair",
	        "Quantity": 5,
	        "Price": 275,
	        "Weight": 2,
	        "Image": "images/products/memory/memory3.jpg"
	    },
	    {
	        "ProductName": "G.SKILL Ripjaws V Series 16GB DDR4 SDRAM",
	        "ProductID": 300300,
	        "Description": "DDR4 Memory\nCapacity - 16GB (2 x 8GB)\nSpeed - 3200",
	        "Category": "Memory",
	        "Manufacturer": "G.SKILL",
	        "Quantity": 6,
	        "Price": 64,
	        "Weight": 0.8,
	        "Image": "images/products/memory/memory2.jpg"
	    },
	    {
	        "ProductName": "Oloy 32GB DDR4 SDRAM",
	        "ProductID": 300400,
	        "Description": "DDR4 Memory\nCapacity - 32GB (2 x 16GB)\nSpeed - 3600",
	        "Category": "Memory",
	        "Manufacturer": "Oloy",
	        "Quantity": 15,
	        "Price": 140,
	        "Weight": 0.9,
	        "Image": "images/products/memory/memory1.jpg"
	    },
	    {
	        "ProductName": "Samsung 870 EVO Series 2.5\" 500GB SATA III SSD",
	        "ProductID": 400100,
	        "Description": "Internal Solid State Drive (SSD)\nInterface - SATA III\nCapacity - 500GB\nRead\/Write Speed - 560\/530MB\/s",
	        "Category": "Storage",
	        "Manufacturer": "Samsung",
	        "Quantity": 25,
	        "Price": 65,
	        "Weight": 3,
	        "Image": "images/products/storage/storage3.jpg"
	    },
	    {
	        "ProductName": "KingSpec 2.5\" 120GB SATA III SSD",
	        "ProductID": 400200,
	        "Description": "Internal Solid State Drive (SSD)\nInterface - SATA III\nCapacity - 120GB\nRead\/Write Speed - 560\/500MB\/s",
	        "Category": "Storage",
	        "Manufacturer": "KingSpec",
	        "Quantity": 20,
	        "Price": 25,
	        "Weight": 1.5,
	        "Image": "images/products/storage/storage2.jpg"
	    },
	    {
	        "ProductName": "Samsung 980 M.2 2280 1TB NVMe SSD",
	        "ProductID": 400300,
	        "Description": "Internal Solid State Drive (SSD)\nInterface - PCIe 3.0 x 4 - NVMe 1.4\nCapacity - 1TB\nRead\/Write Speed - 3,500\/3,000MB\/s",
	        "Category": "Storage",
	        "Manufacturer": "Samsung",
	        "Quantity": 22,
	        "Price": 102,
	        "Weight": 1.7,
	        "Image": "images/products/storage/storage1.jpg"
	    },
	    {
	        "ProductName": "Silicon Power M.2 2280 256GB NVMe SSD",
	        "ProductID": 400400,
	        "Description": "Internal Solid State Drive (SSD)\nInterface - PCIe 3.0 X 4 - NVMe 1.3\nCapacity - 256GB\nRead\/Write Speed - 2,200\/1,600MB\/s",
	        "Category": "Storage",
	        "Manufacturer": "Silicon Power",
	        "Quantity": 30,
	        "Price": 32,
	        "Weight": 1.7,
	        "Image": "images/products/storage/storage4.jpg"
	    },
	    {
	        "ProductName": "Silicon Power M.2 2280 1TB NVMe SSD",
	        "ProductID": 400500,
	        "Description": "Internal Solid State Drive (SSD)\nInterface - PCIe 3.0 x 4 - NVMe 1.3\nCapacity - 1TB\nRead\/Write Speed - 2,200\/1,600MB\/s",
	        "Category": "Storage",
	        "Manufacturer": "Silicon Power",
	        "Quantity": 20,
	        "Price": 75,
	        "Weight": 1.3,
	        "Image": "images/products/storage/storage5.jpg"
	    },
	    {
	        "ProductName": "Seagate BarraCuda 3.5\" 2TB 7200 RPM HDD",
	        "ProductID": 400600,
	        "Description": "Internal Hard Disk Drive (HDD)\nInterface - SATA III\nCapacity - 2TB\nHard Disk Speed - 7200 RPM",
	        "Category": "Storage",
	        "Manufacturer": "Seagate",
	        "Quantity": 5,
	        "Price": 48,
	        "Weight": 25.6,
	        "Image": "images/products/storage.png"
	    },
	    {
	        "ProductName": "Rosewill 1050W ATX Full Modular Power Supply",
	        "ProductID": 500100,
	        "Description": "Max Power - 1050 Watts\nPower Connector - 20+4Pin\nModular Cables -\n1 x 24 Pin (20+4)\n2 x 8 Pin (4+4)\n8 x 8 Pin (6+2)\n16 x SATA\n4 x 4 Pin Peripheral\n1 x Floppy",
	        "Category": "Power Supply",
	        "Manufacturer": "Rosewill",
	        "Quantity": 10,
	        "Price": 125,
	        "Weight": 117.6,
	        "Image": "images/products/power.png"
	    },
	    {
	        "ProductName": "Rosewill Hive Series 650W ATX Full Modular Power Supply",
	        "ProductID": 500200,
	        "Description": "Max Power - 650 Watts\nPower Connector - 20+4Pin\nModular Cables -\n1 x 24 Pin (20+4)\n1 x 8 Pin (4+4)\n4 x 8 Pin (6+2)\n8 x SATA\n4 x 4-Pin Peripheral\n1 x Floppy",
	        "Category": "Power Supply",
	        "Manufacturer": "Rosewill",
	        "Quantity": 15,
	        "Price": 65,
	        "Weight": 88,
	        "Image": "images/products/power/power3.jpg"
	    },
	    {
	        "ProductName": "Corsair SF450 450W Micro ATX Full Modular Power Supply",
	        "ProductID": 500300,
	        "Description": "Max Power - 450 Watts\nPower Connector - 20+4Pin\nModular Cables -\n1 x 24 Pin (20+4)\n1 x 8 Pin (4+4)\n2 x 8 Pin (6+2)\n4 x SATA\n4 x 4-Pin Peripheral",
	        "Category": "Power Supply",
	        "Manufacturer": "Corsair",
	        "Quantity": 30,
	        "Price": 80,
	        "Weight": 30.4,
	        "Image": "images/products/power/power4.jpg"
	    },
	    {
	        "ProductName": "Corsair SF600 600W Micro ATX Full Modular Power Supply",
	        "ProductID": 500400,
	        "Description": "Max Power - 600 Watts\nPower Connector - 20+4Pin\nModular Cables -\n1 x 24 Pin (20+4)\n1 x 8 Pin (4+4)\n2 x 8 Pin (6+2)\n4 x SATA\n4 x 4-Pin Peripheral",
	        "Category": "Power Supply",
	        "Manufacturer": "Corsair",
	        "Quantity": 15,
	        "Price": 100,
	        "Weight": 31.2,
	        "Image": "images/products/power/power2.jpg"
	    },
	    {
	        "ProductName": "Rosewill Glacier Series 850W ATX Single 12V Rail",
	        "ProductID": 500500,
	        "Description": "Max Power - 850 Watts\nPower Connector - 20+4Pin\nConnectors -\n1 x 24 pin (20+4)\n1 x 8 pin (4+4)\n4 x 8 pin (6+2)\n8 x SATA\n6 x 4 Pin Peripheral\n2 x Floppy",
	        "Category": "Power Supply",
	        "Manufacturer": "Rosewill",
	        "Quantity": 5,
	        "Price": 75,
	        "Weight": 88.48,
	        "Image": "images/products/power/power1.jpg"
	    },
	    {
	        "ProductName": "Corsair 4000D Mid-Tower ATX Case",
	        "ProductID": 600100,
	        "Description": "Removable High Airflow Front Panel\nCable Management Trays\nFits up to 6 x 120mm or 4 x 140mm Fans\nFits up to 2 x 2.5\" SSD and 2 x 3.5 HDD\nVertical GPU Mount",
	        "Category": "Cases",
	        "Manufacturer": "Corsair",
	        "Quantity": 10,
	        "Price": 100,
	        "Weight": 275.2,
	        "Image": "images/products/case.png"
	    },
	    {
	        "ProductName": "be quiet! Pure Base 500DX Mid-Tower ATX Case",
	        "ProductID": 600200,
	        "Description": "Removable High Airflow Front Panel\nFits up to 3 x 120mm and 3 x 140mm Fans\nFits up to 5 x 2.5\" SSD",
	        "Category": "Cases",
	        "Manufacturer": "be quiet!",
	        "Quantity": 22,
	        "Price": 110,
	        "Weight": 270.1,
	        "Image": "images/products/case/case4.jpg"
	    },
	    {
	        "ProductName": "NZXT H510 Flow Mid-Tower ATX Case",
	        "ProductID": 600300,
	        "Description": "Removable Airflow Front Panel\nCable Management Trays\nFits up to 1 x 120mm and 3 x 140mm Fans\nFits up to 2 x 2.5\" SSD and 3 x 3.5\" HDD",
	        "Category": "Cases",
	        "Manufacturer": "NZXT",
	        "Quantity": 12,
	        "Price": 95,
	        "Weight": 280.5,
	        "Image": "images/products/case/case3.jpg"
	    },
	    {
	        "ProductName": "Cooler Master MasterBox Q300L Micro-ATX Case",
	        "ProductID": 600400,
	        "Description": "Removable Magnetic Dust Filters\nCable Management Space\nFits up to 6 x 120mm or 2 x 140mm and 4 x 120mm Fans\nFits up to 2 x 2.5\" SSD and 1 3.5\" HDD",
	        "Category": "Cases",
	        "Manufacturer": "Cooler Master",
	        "Quantity": 18,
	        "Price": 50,
	        "Weight": 16.9,
	        "Image": "images/products/case/case2.jpg"
	    },
	    {
	        "ProductName": "Corsair Carbide 88R Micro-ATX Case",
	        "ProductID": 600500,
	        "Description": "Cable Routing Channels and Holes\nFits up to 5 x 120mm Fans\nFits up to 2 3.5 HDD",
	        "Category": "Cases",
	        "Manufacturer": "Corsair",
	        "Quantity": 8,
	        "Price": 60,
	        "Weight": 126.2,
	        "Image": "images/products/case/case1.jpg"
	    }
    ];	


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

const cartIcon = $("#cart"),
	  subTotal = $("#subtotal");

var subtotalCost = 0.00,
	cartQty = 0;


function loadProductPageCart(){																			// Loads cart html for sidebar format on products page

	var output;																							// Local Variable to hold html

	$.each(cart,function(index,object){																	// Iterates through products array

		output =	'<div class="cart-item" id="' + object.ProductID + '">';							// Creates html to add to the cart sidebar
		output +=		'<div class="remove"><span>x</span></div>';
		output +=		'<img class="cart-item-image" src="' + object.Image + '">';
		output +=		'<p class="cart-item-name">' + object.ProductName + '</p>';
		output +=		'<p>$<span class="price">' + object.ProductPrice + '</span>.00</p>';
		output +=		'<input type="number" value="' + object.Qty + '" min="1">';
		output +=	'</div>';

		$("#cart-sidebar-items").append(output); 														// Adds the new html to the cart sidbar

		subtotalCost += object.Price;																	// Updates the value of the cart subtotal
		$("#" + object.ProductID).find(".remove").click({param1: object.ProductID}, removeCartItem);	// Adds click event to remove the product from the cart sidebar
		$("#" + object.ProductID).find("input").change(updateCart);										// Adds change event to update the cart when the qty is changed																			
	})

	cartQty++;																							// Increases the cart quantity variable by 1
	updateCartQty();																					// Calls function to update the cart quantity
	updateCart();																						// Calls function to update the cart
}

function loadShoppingCart(){																			// Loads cart html in shopping cart format on shoppingcart page

	var output;																							// Local Variable to hold html

	$.each(cart,function(index,object){																	// Iterates through products array

		output =	'<div class="cart-item" id="' + object.ProductID + '">';							// Creates html to add to the cart
		output +=		'<img class="cart-item-image" src="' + object.Image + '">';
		output +=		'<p class="cart-item-name">' + object.ProductName + '</p>';
		output +=		'<p class="price-format">$<span class="price">' + object.ProductPrice + '</span>.00</p>';
		output +=		'<input type="number" value="' + object.Qty + '" min="1" class="input-qty">';
		output +=		'<button class="btn btn-primary remove">Remove</button>';
		output +=	'</div>';

		$("#shopping-cart").append(output); 														
		
		subtotalCost += object.Price;																	// Updates the value of the cart subtotal
		$("#" + object.ProductID).find(".remove").click({param1: object.ProductID}, removeCartItem);	// Adds click event to remove the product from the cart sidebar
		$("#" + object.ProductID).find("input").change(updateCart);										// Adds change event to update the cart when the qty is changed																			
	})

	cartQty++;																							// Increases the cart quantity variable by 1
	updateCartQty();																					// Calls function to update the cart quantity
	updateCart();																	
}

function addToCart(event) {

	var output;																									// Local Variable to hold html

	if($("#" + event.data.param1).length == 0){																	// Checks if the product is not in the cart
		
		$.each(myProducts,function(index,object){																	// Iterates through products
			
			if(event.data.param1 == object.ProductID) {															// Checks if the current product matches the product being added

				output =	'<div class="cart-item" id="' + object.ProductID + '">';							// Creates html to add to the cart sidebar
				output +=		'<div class="remove"><span>x</span></div>';
				output +=		'<img class="cart-item-image" src="' + object.Image + '">';
				output +=		'<p class="cart-item-name">' + object.ProductName + '</p>';
				output +=		'<p>$<span class="price">' + object.Price + '</span>.00</p>';
				output +=		'<input type="number" value="1" min="1">';
				output +=	'</div>';

				$("#cart-sidebar-items").append(output); 														// Adds the new html to the cart sidbar

				subtotalCost += object.Price;																	// Updates the value of the cart subtotal
				$("#" + object.ProductID).find(".remove").click({param1: object.ProductID}, removeCartItem);	// Adds click event to remove the product from the cart sidebar
				$("#" + object.ProductID).find("input").change(updateCart);										// Adds change event to update the cart when the qty is changed
			}																
		})
	}
	else{																										// Else, the item is already in the cart

		var itemQty = parseInt($("#" + event.data.param1).find("input").val());									// Determines the current quantity
		$("#" + event.data.param1).find("input").val(itemQty + 1);												// Increments the quantity by 1
	}
	
	cartQty++;																									// Increases the cart quantity variable by 1
	updateCartQty();																							// Calls function to update the cart quantity
	updateCart();																								// Calls function to update the cart
}


function updateCart(){

	subtotalCost = 0;														// Resets variables
	cartQty = 0;

	var newCart = [];														// Variable to hold new cart JSON data

	$(".cart-item").each(function(){										// Iterates through each item in the cart sidebar

		var id = $(this).attr("id");										// Varaibles representing data needed to add to cart JSON
		var qty = parseInt($(this).find("input").val());
		var price = $(this).find(".price").text();
		var image = $(this).find(".cart-item-image").attr("src");
		var name = $(this).find(".cart-item-name").val();

		subtotalCost += (qty * price);										// Sets cart subtoal
		cartQty += qty;														// Sets cart quantity

		newCart.push({														// Adds to the new cart JSON array
			"ProductID": id, 
			"Qty": qty, 
			"ProductPrice": price,
			"Image": image,
			"ProductName": name
		}); 

	});
	
	cart = newCart;															// Updates cart to the new cart

	subTotal.html("Subtotal: $" + subtotalCost + ".00");								// Updates cart sidebar's subtotal display
	updateCartQty();														// Calls function to update the cart icon

}

function updateCartQty(){
	if(cartQty == 0){									// If the cart is empty, hide the icon
		$("#cart-num").css({"visibility": "hidden"});
	}
	else{												// Else there are items in the cart, show the icon, and udpate the value
		$("#cart-num").css({"visibility": "visible"});
		$("#cart-num").html(cartQty);
	}
}

function removeCartItem(event){
	$("#" + event.data.param1).remove();
	updateCart();
}

function ProductPageCart() {
	loadProductPageCart();
	updateCart();
}

function ShoppingCart() {
	loadShoppingCart();
	updateCart();
}
