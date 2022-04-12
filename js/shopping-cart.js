var cart = [ {
	        "ProductID": 200650,
	        "Qty": 2,
	        "ProductPrice": 100,
	        "Image": "images/products/motherboard/mb2.png",
	        "ProductName": "Gigabyte B550M DS3H"
	    },
	    {
	        "ProductID": 200490,
			"Qty": 1,
			"ProductPrice": 140,
	        "Image": "images/products/motherboard/mb3.png",
	        "ProductName": "MSI MPG Z490 Gaming Plus"  
	    },
	    {
	        "ProductID": 600300,
	        "Qty": 1,
	        "ProductPrice": 95,
	        "Image": "images/products/case.png",
			"ProductName": "NZXT H510 Flow Mid-Tower ATX Case"
	    },
	    {
	        
	        "ProductID": 500200,
	        "Qty": 3,
	        "ProductPrice": 650,
	        "Image": "images/products/power.png",
			"ProductName": "Rosewill Hive Series 650W ATX Full Modular Power Supply"
	    }];

const cartIcon = $("#cart"),
	  subTotal = $("#subtotal");

var subtotalCost = 0.00,
	cartQty = 0;


$(document).ready(function(){
	loadCart();									// Calls function to load items in the cart
	updateCart();
});

function loadCart(){

	var output;																							// Local Variable to hold html

	$.each(cart,function(index,object){																	// Iterates through products

		output =	'<div class="cart-item" id="' + object.ProductID + '">';							// Creates html to add to the cart sidebar
		output +=		'<img class="cart-item-image" src="' + object.Image + '">';
		output +=		'<p class="cart-item-name">' + object.ProductName + '</p>';
		output +=		'<p class="price-format">$<span class="price">' + object.ProductPrice + '</span>.00</p>';
		output +=		'<input type="number" value="' + object.Qty + '" min="1" class="input-qty">';
		output +=		'<button class="btn btn-primary" id="remove">Remove</button>';
		output +=	'</div>';

		$("#shopping-cart").append(output); 														
		
		subtotalCost += object.Price;																	// Updates the value of the cart subtotal
		$("#" + object.ProductID).find("#remove").click({param1: object.ProductID}, removeCartItem);	// Adds click event to remove the product from the cart sidebar
		$("#" + object.ProductID).find("input").change(updateCart);										// Adds change event to update the cart when the qty is changed																			
	})

	cartQty++;																							// Increases the cart quantity variable by 1
	updateCartQty();																					// Calls function to update the cart quantity
	updateCart();																	
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