var myProducts; 
var cart; 

const cartIcon = $("#cart"),
	  subTotal = $("#subtotal");

var subtotalCost = 0.00,
	cartQty = 0;

$(document).ready(function(){
	console.log("test");
	loadCartJSON();
	
});

// READ ALL TO GET ALL PRODUCTS AND LOAD TO PAGE


function loadCartJSON(){
	$.ajax({
		url: "http://localhost:3000/ReadCart?",
		crossDomain: true,
		datatype: 'json',
		type: 'GET'
	})
	.done(function (json){
		cart = json;
		console.log(json);		
		loadProductPageCart();
		loadShoppingCart();
		cartQty++;
		updateCartQty();
		updateCart();
		loadMyProductsJSON();
	})
}

function loadMyProductsJSON(){
	$.ajax({
		url: "http://localhost:3000/ReadProducts?",
		crossDomain: true,
		datatype: 'json',
		type: 'GET'
	})
	.done(function (json){
		myProducts = json;
		console.log(json);
	})
}

function loadProductPageCart(){																			// Loads cart html for sidebar format on products page

	var output;																							// Local Variable to hold html

	$.each(cart,function(index,object){																	// Iterates through products array

		output =	'<div class="cart-item" id="' + object._id + '">';							// Creates html to add to the cart sidebar
		output +=		'<div class="remove"><span>x</span></div>';
		output +=		'<img class="cart-item-image" src="' + object.Image + '">';
		output +=		'<p class="cart-item-name">' + object.ProductName + '</p>';
		output +=		'<p>$<span class="price">' + object.Price + '</span>.00</p>';
		output +=		'<input type="number" value="' + object.Qty + '" min="1">';
		output +=	'</div>';

		$("#cart-sidebar-items").append(output); 														// Adds the new html to the cart sidbar

		subtotalCost += object.Price;																	// Updates the value of the cart subtotal
		$("#" + object._id).find(".remove").click({param1: object._id}, removeCartItem);	// Adds click event to remove the product from the cart sidebar
		$("#" + object._id).find("input").change(updateCart);										// Adds change event to update the cart when the qty is changed
	})

}

function loadShoppingCart(){																			// Loads cart html in shopping cart format on shoppingcart page

	var output;																							// Local Variable to hold html

	$.each(cart,function(index,object){																	// Iterates through products array

		output =	'<div class="cart-item" id="' + object._id + '">';							// Creates html to add to the cart
		output +=		'<img class="cart-item-image" src="' + object.Image + '">';
		output +=		'<p class="cart-item-name">' + object.ProductName + '</p>';
		output +=		'<p class="price-format">$<span class="price">' + object.Price + '</span>.00</p>';
		output +=		'<input type="number" value="' + object.Qty + '" min="1" class="input-qty">';
		output +=		'<button class="btn btn-primary removeItem">Remove</button>';
		output +=	'</div>';

		$("#shopping-cart").append(output); 														
		
		subtotalCost += object.Price;																	// Updates the value of the cart subtotal
		$("#" + object._id).find(".removeItem").click({param1: object._id}, removeCartItem);	// Adds click event to remove the product from the cart sidebar
		$("#" + object._id).find("input").change(updateCart);										// Adds change event to update the cart when the qty is changed

	})																
}

function addToCart(event) {

	var output;																									// Local Variable to hold html

	if($("#" + event.data.param1).length == 0){																	// Checks if the product is not in the cart
		
		$.each(myProducts,function(index,object){																	// Iterates through products
			
			if(event.data.param1 == object._id) {															// Checks if the current product matches the product being added

				output =	'<div class="cart-item" id="' + object._id + '">';							// Creates html to add to the cart sidebar
				output +=		'<div class="remove"><span>x</span></div>';
				output +=		'<img class="cart-item-image" src="' + object.Image + '">';
				output +=		'<p class="cart-item-name">' + object.ProductName + '</p>';
				output +=		'<p>$<span class="price">' + object.Price + '</span>.00</p>';
				output +=		'<input type="number" value="1" min="1">';
				output +=	'</div>';

				$("#cart-sidebar-items").append(output); 														// Adds the new html to the cart sidbar

				subtotalCost += object.Price;																	// Updates the value of the cart subtotal
				$("#" + object._id).find(".remove").click({param1: object._id}, removeCartItem);	// Adds click event to remove the product from the cart sidebar
				$("#" + object._id).find("input").change(updateCart);										
				
				var query = "http://localhost:3000/Create";

				
				$.ajax({
					url: query,
					crossDomain: true,
					data: {
						_id : object._id,
						Qty : 1,
						Price : object.Price,
						Image : object.Image,
						ProductName : object.ProductName
					},
					datatype: 'json',
					type: 'POST'
				})
				.done(function (data){
					console.log(data);
				})
			}																
		})
	}
	else{																										// Else, the item is already in the cart
		
		var itemQty = parseInt($("#" + event.data.param1).find("input").val());									// Determines the current quantity
		$("#" + event.data.param1).find("input").val(itemQty + 1);												// Increments the quantity by 1
		
		$.each(myProducts,function(index,object){
			if(event.data.param1 == object._id) {
			
				var newQty = itemQty + 1;
				console.log(newQty);
				var query = "http://localhost:3000/Update?";
				
				query += "_id=" + object._id;
				query += "&Qty=" + newQty;
				query += "&Price=" + object.Price;
				query += "&Image=" + object.Image;
				query += "%ProductName=" + object.ProductName;
				
				$.ajax({
					url: query,
					crossDomain: true,
					datatype: 'json',
					type: 'GET'
				})
				.done(function (data){
					console.log(data);
				})
			}
		});
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

		var query = "http://localhost:3000/Update?";
		
		query += "_id=" + id;
		query += "&Qty=" + qty;
		query += "&Price=" + price;
		query += "&Image=" + image;
		query += "&ProductName=" + name;
		
		$.ajax({
			url: query,
			crossDomain: true,
			datatype: 'json',
			type: 'GET'
		})
		.done(function (data){
			console.log(data);
		})
		
		subtotalCost += (qty * price);										// Sets cart subtoal
		cartQty += qty;														// Sets cart quantity

		newCart.push({														// Adds to the new cart JSON array
			"ProductID": id, 
			"Qty": qty, 
			"Price": price,
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
	
	var query = "http://localhost:3000/Delete?";
		
		query += "_id=" + event.data.param1;
	
		console.log("Deleting: " + event.data.param1);
		
		$.ajax({
			url: query,
			crossDomain: true,
			datatype: 'json',
			type: 'GET'
		})
		.done(function (data){
			console.log(data);
		})
	
}
