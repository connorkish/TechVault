// JavaScript Document 
// Project: Tech Vault 
// Team Members: Josh Wagner, Connor Kish, Nick Trout
// File: product-management.js
// Last Updated: 3/23/22
// Last Updated By: Josh Wagner


const 
	// Form
	form = $("#product-details-form"),

	// Main action buttons
	newProduct = $("#new-product"),
  	editProduct = $("#edit-product"),
  	deleteProduct = $("#delete-product"),

  	// Form Fields
  	id = $("#ProductID"),
	manf = $("#Manufacturer"),
	name = $("#ProductName"),
	desc = $("#ProductDescription"),
    cat = $("#Category"),
    qty = $("#Quantity"),
    price = $("#Price"),
    weight = $("#Weight"),

	// The container for the form buttons
  	formactions = $("#form-actions"),

	// JSON Representing Store's Products 	
	data = [
	    {
	        "ProductName": "Intel Core i3-8350k",
	        "ProductID": 100300,
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
	        "Image": "images/products/memory.png"
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
	        "Image": "images/products/memory.png"
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
	        "Image": "images/products/memory.png"
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
	        "Image": "images/products/memory.png"
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
	        "Image": "images/products/storage.png"
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
	        "Image": "images/products/storage.png"
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
	        "Image": "images/products/storage.png"
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
	        "Image": "images/products/storage.png"
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
	        "Image": "images/products/power.png"
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
	        "Image": "images/products/power.png"
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
	        "Image": "images/products/power.png"
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
	        "Image": "images/products/power.png"
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
	        "Image": "images/products/case.png"
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
	        "Image": "images/products/case.png"
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
	        "Image": "images/products/case.png"
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
	        "Image": "images/products/case.png"
	    }
    ];


var 
	// Searches placed in the the form fields
	idQuery,
	manfQuery,
	nameQuery,
	descQuery,
    catQuery,
    qtyQuery,
    priceQuery,
    weightQuery,

    // Values of a loaded product before being modified
    oldID,
	oldManf,
	oldName,
	oldDesc,
	oldCat,
	oldQty,
	oldPrice,
	OldWeight,

	// Regular Expressions to test search values against
	idRegEx = new RegExp(""),					
	manfRegEx = new RegExp(""),
	nameRegEx = new RegExp(""),
	descRegEx = new RegExp(""),
	catRegEx = new RegExp(""),
	qtyRegEx = new RegExp(""),
	priceRegEx = new RegExp(""),
	weightRegEx = new RegExp(""),

	// Stores a message describing a submission error
	errorFeedback,

	// Arrays
	fields = [id, manf, name, desc, cat, qty, price, weight],
	queries = [idQuery, manfQuery, nameQuery, descQuery, catQuery, qtyQuery, priceQuery, weightQuery],
	regExs = [idRegEx, manfRegEx, nameRegEx, descRegEx, catRegEx, qtyRegEx, priceRegEx, weightRegEx];



// On Load Event to disable the form
$(document).ready(disableForm());

// On Click Events for the main action buttons
$(document).ready(function(){
	newProduct.click(newProductAction);
	editProduct.click(updateProductAction);
	deleteProduct.click(deleteProductAction);
});

// Hanldes when the New Product Button is pressed
function newProductAction(){
	newProduct.removeClass();
	newProduct.addClass("btn active");
	editProduct.removeClass();
	editProduct.addClass("btn btn-primary");
	deleteProduct.removeClass();
	deleteProduct.addClass("btn btn-primary");
	enableForm();
	manualClearFields();
	
	formactions.html("");
	formactions.html('<button class="btn btn-primary" id="save">Save</button>' 
					+'<button type="reset" class="btn btn-primary" id="reset">Reset</button>'
					+'<button class="btn btn-primary" id="cancel">Cancel</button>');
	$("#save").click(validateNewProduct);
	$("#cancel").click(cancelAction);
	$("#reset").click(function(){$("#search-results-area").html("");});	
	disableSearchFields();
}

// Handles when the Update Product Button is pressed
function updateProductAction() {
	newProduct.removeClass();
	newProduct.addClass("btn btn-primary");
	editProduct.removeClass();
	editProduct.addClass("btn active");
	deleteProduct.removeClass();
	deleteProduct.addClass("btn btn-primary");
	enableForm();
	manualClearFields();
	formactions.html("");
	formactions.html('<button type="submit" class="btn btn-primary" id="update">Update</button>'
					+'<button type="reset" class="btn btn-primary" id="reset">Reset</button>'
					+'<button type="submit" class="btn btn-primary" id="cancel">Cancel</button>');
	$("#update").click(validateUpdate);
	$("#cancel").click(cancelAction);
	$("#reset").click(function(){updateProductAction});
	enableSearchFields();
	$("#search-results-area").html("");
}

// Handles when the Delete Product Button is pressed
function deleteProductAction() {
	newProduct.removeClass();
	newProduct.addClass("btn btn-primary");
	editProduct.removeClass();
	editProduct.addClass("btn btn-primary");
	deleteProduct.removeClass();
	deleteProduct.addClass("btn active");
	enableForm();
	manualClearFields();
	formactions.html("");
	formactions.html('<button class="btn btn-primary" id="delete">Delete</button>'
					+'<button type="reset" class="btn btn-primary" id="reset">Reset</button>'
					+'<button class="btn btn-primary" id="cancel">Cancel</button>');
	$("#delete").click(deleteProduct);
	$("#cancel").click(cancelAction);
	$("#reset").click(function(){$("#search-results-area").html("");});
	enableSearchFields();

}

// Manually clear fields
function manualClearFields(){
	$("#search-results-area").html("");
	id.val("");
	manf.val("");
	name.val("");
	desc.val("");
    cat.val("");
    qty.val("");
    price.val("");
    weight.val("");
}

// Disables the form
function disableForm() {
	id.prop("disabled", true);
	manf.prop("disabled", true);
	name.prop("disabled", true);
	desc.prop("disabled", true);
    cat.prop("disabled", true);
    qty.prop("disabled", true);
    price.prop("disabled", true);
    weight.prop("disabled", true);
}

// Enables the form
function enableForm() {
	//$("#product-details-form").prop()
	id.prop("disabled", false);
	manf.prop("disabled", false);
	name.prop("disabled", false);
	desc.prop("disabled", false);
    cat.prop("disabled", false);
    qty.prop("disabled", false);
    price.prop("disabled", false);
    weight.prop("disabled", false);
}

/*
// Handles when the update button is pressed under the update product option 
function updateProduct() {
	form.trigger("reset");
}*/

// Handles when the delete button is pressed under the delete product option
function removeProduct() {
	form.trigger("reset");
}


// Handles when the cancel button is pressed
function cancelAction() {
	newProduct.removeClass();
	newProduct.addClass("btn btn-primary");
	editProduct.removeClass();
	editProduct.addClass("btn btn-primary");
	deleteProduct.removeClass();
	deleteProduct.addClass("btn btn-primary");
	disableForm();
	formactions.html("");
	$("#search-results-area").html("");
	form.trigger("reset");
}

// Enables the fields to search for products
function enableSearchFields(){
	var i = 0;	
	$.each(fields,function(i){
		fields[i].on();
		generateSearch(i);
		i++;
	})
}

function disableSearchFields(){
	var i = 0;	
	$.each(fields,function(i){
		fields[i].off();
		i++;
	})
}

// Searches products using the Product ID field
function generateSearch(index){
	fields[index].keyup(function(){				// Runs when key is released ID search field
		
		if(fields[index] == ""){
			queries[index] = false;
		}
		else
		{
			queries[index] = fields[index].val();				// Sets the value of of idQuery
		}
		regExs[index]= new RegExp(queries[index], 'i');
		$("#search-results-area").html("");	
		loadResults();					
		})
}

// Searches products
function loadResults() {
	$.each(data,function(index,object){

		if (regExs[0].test(object.ProductID) && 
			regExs[1].test(object.Manufacturer) && 
			regExs[2].test(object.ProductName) && 
			regExs[3].test(object.Description) && 
			regExs[4].test(object.Category) && 
			regExs[5].test(object.Quantity) && 
			regExs[6].test(object.Price) && 
			regExs[7].test(object.Weight)){

			var output;	
			output = '<div class="search-result" onClick="loadProduct(' + object.ProductID + ')">';
			output += '<div class="product-image"><img src="' + object.Image + '"></div>';
			output += '<p class="result-name">NAME: ' + object.ProductName + '</p>';
			output += '<p>ID: ' + object.ProductID + '</p>';
			output += '<p>CAT: ' + object.Category + '</p>';
			output += '<p>MANF: ' + object.Manufacturer + '</p>';
			output += '<p>QTY: x' + object.Quantity + '</p>';
			output += '<p>Price: $' + object.Price + '</p>';
			output += '<p>WEIGHT: ' + object.Weight + 'oz</p>';
			output += '</div>';									

			$("#search-results-area").append(output);
		}
	})


	var emptyFields = "";

	$.each(fields, function(index,object){
		emptyFields += object.val();
	})

	if (emptyFields.length == 0){
		$("#search-results-area").html("");
	}
}

// Loads the product details into the form field
function loadProduct(jsonID){
	var idValue,
		manfValue,
		nameValue,
		descValue,
		catValue,
		qtyValue,
		priceValue,
		weightValue;

	for(var i = 0; i < data.length; i++){
		if(data[i].ProductID == jsonID){
			idValue = data[i].ProductID;
			manfValue = data[i].Manufacturer;
			nameValue = data[i].ProductName;
			descValue = data[i].Description;
			catValue = data[i].Category;
			qtyValue = data[i].Quantity;
			priceValue = data[i].Price;
			weightValue = data[i].Weight;
		}
	}

	id.val(idValue);
	manf.val(manfValue) ;
	name.val(nameValue);
	desc.val(descValue);
    cat.val(catValue);
    qty.val(qtyValue) ;
    price.val(priceValue) ;
    weight.val(weightValue) ;

	
    saveCurrentValues();
    $("#search-results-area").html("");
    disableSearchFields();
}

function validateFields(){
	errorFeedback = "ERROR!\n"
	var numbersOnly = new RegExp('^[0-9]*$');

	if(id.val() == ""){
		errorFeedback += "\n\nProduct ID: Field cannot be empty";
	}
	else if (!numbersOnly.test(id.val())){
		errorFeedback += "\n\nProduct ID: Field may only contain numbers";
	}

	if(manf.val() == ""){
		errorFeedback += "\n\nManufacturer: Field cannot be empty";
	}

	if(name.val() == ""){
		errorFeedback += "\n\nProduct Name: Field cannot be empty";
	}

	if(cat.val() == ""){
		errorFeedback += "\n\nCategory: Field cannot be empty";
	}

	if(qty.val() == ""){
		errorFeedback += "\n\nQuantity: Field cannot be empty";
	}
	else if (!numbersOnly.test(qty.val())){
		errorFeedback += "\n\nQuantity: Field may only contain numbers";
	}

	if(price.val() == ""){
		errorFeedback += "\n\nPrice: Field cannot be empty";
	}
	else if (!numbersOnly.test(price.val())){
		errorFeedback += "\n\nPrice: Field may only contain numbers";
	}

	if (!numbersOnly.test(weight.val())){
		errorFeedback += "\n\nWeight: Field may only contain numbers";
	}
}

function validateNewProduct(){
	var existingProduct = false;
	
	for(var i = 0; i < data.length; i++){
		if(data[i].ProductID == id.val()){
			existingProduct = true;
		}
	}
	
	if (existingProduct){
		errorFeedback += "\n\nProduct ID: ID already exists";
	}

	validateFields();

	if(errorFeedback == "ERROR!\n"){
		alert("Success");
		addNewProduct();
		newProductAction();
	}
	else
	{
		saveCurrentValues();
		alert(errorFeedback);
		newProductAction();
		loadOldValues();
	}
}


function addNewProduct(){

	var catImage;
	if(cat.val() == "CPU"){
		catImage = "images/products/cpu.png";
	}
	else if (cat.val() == "Motherboard"){
		catImage = "images/prdoucts/motherboard.png";
	}
	else if (cat.val() == "Memory"){
		catImage = "images/prdoucts/memory.png";
	}
	else if (cat.val() == "Storage"){
		catImage = "images/prdoucts/storage.png";
	}
	else if (cat.val() == "Power Supply"){
		catImage = "images/prdoucts/power.png";
	}
	else if (cat.val() == "Cases"){
		catImage = "images/prdoucts/case.png";
	}
	else {
		catImage = "images/prdoucts/new.png";
	}
	// CODE DOESN'T SEEM TO ACTUALLY ADD TO DATA JSON
	data.push({"ProductName": name.val(),
			        "ProductID": id.val(),
			        "Description": desc.val(),
			        "Category": cat.val(),
			        "Manufacturer": manf.val(),
			        "Quantity": qty.val(),
			        "Price": price.val(),
			        "Weight": weight.val(),
			        "Image": catImage});
}

function validateUpdate(){
	
	if( oldID == id.val() &&
		oldManf == manf.val() &&
		oldName == name.val() &&
		oldDesc == desc.val() &&
		oldCat == cat.val() &&
		oldQty == qty.val() &&
		oldPrice == price.val() &&
		OldWeight == weight.val()){

		alert("No Chanages have been made");
		updateProductAction();
		loadOldValues();

	}
	else 
	{
		validateFields();
		if(errorFeedback == "ERROR!\n"){
			alert("Success");
			updateProductAction();
		}
		else
		{	
			saveCurrentValues();
			alert(errorFeedback);
			updateProductAction();
			loadOldValues();
			disableSearchFields();
			
		}
	}
 
}
function saveCurrentValues(){
	oldID = id.val();
	oldManf = manf.val();
	oldName = name.val();
	oldDesc = desc.val();
	oldCat = cat.val();
	oldQty = qty.val();
	oldPrice = price.val();
	OldWeight = weight.val();
}
function loadOldValues(){
	id.val(oldID);
	manf.val(oldManf);
	name.val(oldName);
	desc.val(oldDesc);
	cat.val(oldCat);
	qty.val(oldQty);
	price.val(oldPrice);
	weight.val(OldWeight);
}
function updateProduct(){

}

function deleteExistingProduct(){

}