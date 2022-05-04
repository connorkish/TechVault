// JavaScript Document 
// Project: Tech Vault 
// Team Members: Josh Wagner, Connor Kish, Nick Trout
// File: product-management.js
// Last Updated: 3/29/22
// Last Updated By: Josh Wagner


// JSON Representing Store's Products 
var data = [
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

// Constants
const 
	// Form containing input fields
	form = $("#product-details-form"),

	// Main action buttons
	newProduct = $("#new-product"),
  	editProduct = $("#edit-product"),
  	deleteProduct = $("#delete-product"),

  	// Input fields
  	id = $("#ProductID"),
	manf = $("#Manufacturer"),
	name = $("#ProductName"),
	desc = $("#ProductDescription"),
    cat = $("#Category"),
    qty = $("#Quantity"),
    price = $("#Price"),
    weight = $("#Weight"),

	// The container for the buttons that appear under the form
  	formactions = $("#form-actions");

// Variables
var 

	// Holds the values entered into an input field
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

	// Describes if the page is being used to delete a product
	deleteOption,

	// Array of input fields
	fields = [id, manf, name, desc, cat, qty, price, weight],

	// Array of quries
	queries = [idQuery, manfQuery, nameQuery, descQuery, catQuery, qtyQuery, priceQuery, weightQuery],
	
	// Array of regular expressions
	regExs = [idRegEx, manfRegEx, nameRegEx, descRegEx, catRegEx, qtyRegEx, priceRegEx, weightRegEx];



// OnLoad event to disable the form
$(document).ready(disableForm());


// OnLoad event to clear input fields
$(document).ready(manualClearFields);


// OnClick events for the main action buttons
$(document).ready(function(){
	newProduct.click(newProductAction);
	editProduct.click(updateProductAction);
	deleteProduct.click(deleteProductAction);
});


// Hanldes when the New Product Button is pressed
function newProductAction(){

	// Formats the main buttons
	newProduct.removeClass();					// Removes all classes from new product button
	newProduct.addClass("btn active");			// Adds active classes to new product button
	editProduct.removeClass();					// Removes all classes from update product button
	editProduct.addClass("btn btn-primary");	// Adds default classes to update product button 
	deleteProduct.removeClass();				// Removes all classes from delete product button
	deleteProduct.addClass("btn btn-primary");	// Adds default classes to delete product button

	// Formats the form
	enableForm();								// Calls function to enable form
	manualClearFields();						// Calls function to clear contents of input fields	
	enhancedReset();							// Calls function to reset form search
	disableSearchFields();						// Calls function to remove query searches from input fields
	formactions.html("");						// Clears buttons that may be below the form

	// Addds buttons below the form related to the new product option
	formactions.html(							
		'<button class="btn btn-primary" id="save">Save</button>' 					// Save Button	
		+'<button type="reset" class="btn btn-primary" id="reset">Reset</button>'	// Reset Button
		+'<button class="btn btn-primary" id="cancel">Cancel</button>'				// Cancel Button
	);

	// Adds OnClick events to new buttons
	$("#save").click(saveNewProduct);		// Calls function to validate the entry of a new product
	$("#cancel").click(cancelAction);		// Calls function to cancel the entry

	deleteOption = false;					// Sets global variable to say the delete option is not being used
}


// Handles when the Update Product Button is pressed
function updateProductAction() {

	// Formats the main buttons
	newProduct.removeClass();					// Removes all classes from new product button
	newProduct.addClass("btn btn-primary");		// Adds default classes to new product button
	editProduct.removeClass();					// Removes all classes from update product button
	editProduct.addClass("btn active");			// Adds active classes to update product button
	deleteProduct.removeClass();				// Removes all classes from delete product button
	deleteProduct.addClass("btn btn-primary");	// Adds default classes to delete product button


	// Formats the form
	enableForm();								// Calls function to enable form
	manualClearFields();						// Calls function to clear contents of input fields
	enableSearchFields();						// Calls function to add query searches to input fields
	enhancedReset();							// Calls function to reset form search
	formactions.html("");						// Clears buttons that may be below the form

	// Addds buttons below the form related to the new product option
	formactions.html(
		'<button type="submit" class="btn btn-primary" id="update">Update</button>'	// Update Button
		+'<button type="reset" class="btn btn-primary" id="reset">Reset</button>'	// Reset Button
		+'<button type="submit" class="btn btn-primary" id="cancel">Cancel</button>'// Cancel Button
	);

	// Adds OnClick events to new buttons
	$("#update").click(validateUpdate);			// Calls function to validate the entry of product update
	$("#cancel").click(cancelAction);			// Calls function to cancel the entry
	$("#reset").click(enhancedReset);			

	$("#update").prop("disabled", true);		// Disables update button
	deleteOption = false;						// Sets global variable to say the delete option is not being used
}


// Handles when the Delete Product Button is pressed
function deleteProductAction() {

	// Formats the main buttons
	newProduct.removeClass();					// Removes all classes from new product button
	newProduct.addClass("btn btn-primary");		// Adds default classes to new product button
	editProduct.removeClass();					// Removes all classes from update product button
	editProduct.addClass("btn btn-primary");	// Adds default classes to update product button
	deleteProduct.removeClass();				// Removes all classes from delete product button
	deleteProduct.addClass("btn active");		// Adds active classes to delete product button

	// Formats the form
	enableForm();								// Calls function to enable form
	manualClearFields();						// Calls function to clear contents of input fields
	enableSearchFields();						// Calls function to add query searches to input fields
	enhancedReset();							// Calls function to reset form search
	formactions.html("");						// Clears buttons that may be below the form

	// Addds buttons below the form related to the new product option
	formactions.html(
		'<button class="btn btn-primary" id="delete">Delete</button>'				// Delete Button
		+'<button type="reset" class="btn btn-primary" id="reset">Reset</button>'	// Reset Button
		+'<button class="btn btn-primary" id="cancel">Cancel</button>'				// Cancel Button
	);

	// Adds OnClick events to new buttons
	$("#delete").click(removeProduct);			// Calls function to remove product
	$("#cancel").click(cancelAction);			// Calls function to cancel the entry
	$("#reset").click(enhancedReset);			// Calls function to reset form beyond normal

	deleteOption = true;						// Sets global variable to say the delete option is being used
	$("#delete").prop("disabled", true); 		// Disables delete buttond
}


// Manually clear fields and search results
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
	id.prop("disabled", false);
	manf.prop("disabled", false);
	name.prop("disabled", false);
	desc.prop("disabled", false);
    cat.prop("disabled", false);
    qty.prop("disabled", false);
    price.prop("disabled", false);
    weight.prop("disabled", false);
}


// Handles additional actions when the reset button is pressed
function enhancedReset(){

	var i = 0;							// Local control variable
	
	$.each(regExs,function(i){			// Iterates through regExs to reset reqular expression search
		regExs[i] = new RegExp("");		// Clears the regular expression
		i++;							// Increments control variable
	});

	$("#search-results-area").html("");	// Clears search results below form

	enableSearchFields();				// Enables serach for input fields
	enableForm();						// Enables form

	$("#update").prop("disabled", true);// Disables update button
	$("#delete").prop("disabled", true);// Disables delete buttond
}


// Handles when the cancel button is pressed to return the page to the default state 
function cancelAction() {

	// Formats the main buttons
	newProduct.removeClass();					// Removes all classes from new product button
	newProduct.addClass("btn btn-primary");		// Adds default classes to new product button
	editProduct.removeClass();					// Removes all classes from update product button
	editProduct.addClass("btn btn-primary");	// Adds default classes to update product button
	deleteProduct.removeClass();				// Removes all classes from delete product button
	deleteProduct.addClass("btn btn-primary");	// Adds default classes to delete product button

	disableForm();								// Calls function to disable the form
	formactions.html("");						// Clears buttons below the form
	$("#search-results-area").html("");			// Clears search results below the form
	form.trigger("reset");						// Resets the form
}


// Enables the fields to search for products
function enableSearchFields(){
	var i = 0;					// Local control variable
	$.each(fields,function(i){	// Iterates through input fields to enable reqular expression search
		fields[i].on();			// Enables event handler for input field
		generateSearch(i);		// Calls function to apply search functionality
		i++;					// Increments control variable
	})
}


function disableSearchFields(){
	var i = 0;					// Local control variable
	$.each(fields,function(i){	// Iterates through input fields to disable reqular expression search
		fields[i].off();		// Disables event handler for input field
		i++;					// Increments control variable
	})
}


// Applies search functionality
function generateSearch(index){
	fields[index].keyup(function(){						// Applies event handler when key is released in associated input field
				
		if(fields[index] == ""){						// Tests if the input field is empty
			queries[index] = false;						// If true, sets related query to false
		}
		else  											// Else, there is a value in the input field
		{
			queries[index] = fields[index].val();		// Sets the associated query variable to the value of the input field
		}
		regExs[index]= new RegExp(queries[index], 'i'); // Creates an associated regular expression with query variable
		$("#search-results-area").html("");				// Clears the previous search results
		loadResults();									// Calls function to search products
	})
}

// Searches products and displays results
function loadResults() {
	var output;										// Local Variable to hold search result html

	$.each(data,function(index,object){				// Iterates through products

		// Tests each product's attributes against the related search fields
		if (regExs[0].test(object.ProductID) && 	// Tests product ID
			regExs[1].test(object.Manufacturer) && 	// Tests manufacturer 
			regExs[2].test(object.ProductName) && 	// Tests product name
			regExs[3].test(object.Description) && 	// Tests description
			regExs[4].test(object.Category) && 		// Tests category
			regExs[5].test(object.Quantity) && 		// Tests quantity
			regExs[6].test(object.Price) && 		// Tests price
			regExs[7].test(object.Weight)){			// Tests Weight
																			
			// If product matches all tests, generate search result card	
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

			$("#search-results-area").append(output); // Adds the new html to the page
		}
	})

	// Prevents all products from being displayed when there are no values
	var emptyFields = "";							// Local variable to hold the value of all input fields
	$.each(fields, function(index,object){			// Iterates through all input fields
		emptyFields += object.val();				// Adds the value of the input field to the local variable
	})
	if (emptyFields.length == 0){					// Tests if the local variable is empty
		$("#search-results-area").html("");			// If true, clear the search results area
	}
}


// Loads the product details into the form field when a search result is clicked
function loadProduct(jsonID){

	// Local variables to hold the values of a product
	var idValue,
		manfValue,
		nameValue,
		descValue,
		catValue,
		qtyValue,
		priceValue,
		weightValue;

	// For loop that finds the product with a matching id and sets the local variables
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

	// Loads the product values into the input fields
	id.val(idValue);
	manf.val(manfValue) ;
	name.val(nameValue);
	desc.val(descValue);
    cat.val(catValue);
    qty.val(qtyValue) ;
    price.val(priceValue) ;
    weight.val(weightValue) ;
	
    saveCurrentValues();				  		// Calls function to temporarily save values
    $("#search-results-area").html("");	  		// Clears the search results displayed
    disableSearchFields();				  		// Calls function to disable search functionality
   
    if(deleteOption){							// Tests if the loaded product is on the delete product option
    	$("#delete").prop("disabled", false); 	// Enables delete buttond
    	disableForm(); 							// If true, disables the form 
    }
    else{										// Else, the loaded product is on the upddate product option
    	$("#update").prop("disabled", false); 	// Enables update buttond
    }
}


// Handles general validation for input fields
function validateFields(){

	// Local variable to hold regular expression that tests that the input is only numbers
	var numbersOnly = new RegExp('^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$');

	// Local Variable to hold regular expression that tests that the input is only integers
	var intsOnly = new RegExp('^[0-9]*$')


	if(id.val() == ""){															// Tests if product iD field is empty
		errorFeedback += "\n\nProduct ID: Field cannot be empty";				// Adds to error message
	}
	else if (!numbersOnly.test(id.val())){										// Tests if product iD contains letters
		errorFeedback += "\n\nProduct ID: Field may only contain numbers";		// Adds to error message
	}

	if(manf.val() == ""){														// Tests if manufactuer field is empty
		errorFeedback += "\n\nManufacturer: Field cannot be empty";				// Adds to error message
	}

	if(name.val() == ""){														// Tests if product name field is empty
		errorFeedback += "\n\nProduct Name: Field cannot be empty";				// Adds to error message
	}

	if(cat.val() == ""){														// Tests if category field is empty
		errorFeedback += "\n\nCategory: Field cannot be empty";					// Adds to error message
	}

	if(qty.val() == ""){														// Tests if quantity field is empty
		errorFeedback += "\n\nQuantity: Field cannot be empty";					// Adds to error message
	}
	else if (!intsOnly.test(qty.val())){										// Tests if quantity field contains non integers
		errorFeedback += "\n\nQuantity: Field may only contain whole numbers";	// Adds to error message
	}

	if(price.val() == ""){														// Tests if price field is empty
		errorFeedback += "\n\nPrice: Field cannot be empty";					// Adds to error message
	}
	else if (!numbersOnly.test(price.val())){									// Tests if the price contains letters
		errorFeedback += "\n\nPrice: Field may only contain numbers";			// Adds to error message
	}

	if(weight.val() == ""){}													// Tests if weight is blank to distinguish from else if
	else if (!numbersOnly.test(weight.val())){									// Tests if weight contains letters
		errorFeedback += "\n\nWeight: Field may only contain numbers";			// Adds to error message
	}
}


// Handles when the save button is pressed under new product option
function saveNewProduct(){

	errorFeedback = "ERROR!"				// Sets global variable to default state
	var existingProduct = false;			// Local variable set to false 
	
	for(var i = 0; i < data.length; i++){	// For loop to iterate through products
		if(data[i].ProductID == id.val()){	// Tests if product id entered exists
			existingProduct = true;			// If true, sets local variable to true
		}
	}
	
	if (existingProduct){					// If product exists an error is added to the error message
		errorFeedback += "\n\nProduct ID: ID already exists";
	}

	validateFields();						// Calls function to do general input field validation

	if(errorFeedback == "ERROR!")			// Tests if the error message is set to the default
	{										// If true, there were no validation errors
		alert("Success");					// Display success message
		addNewProduct();					// Calls function to add the product to the json data array
		newProductAction();					// Calls function to reload the new product option
	}
	else  									// Else, there was a validation error
	{
		saveCurrentValues();				// Calls function to save the current values in the input fields
		alert(errorFeedback);				// Displays error message
		newProductAction();					// Calls function to reload the new product option
		loadOldValues();					// Calls function to reload the saved values into the input fields
	}
}


// Handles adding product to json data array
function addNewProduct(){

	var catImage;										// Local variable to hold html

	if(cat.val() == "CPU"){								// Tests if entered category is CPU
		catImage = "images/products/cpu.png";			// Sets local variable to assoicated html image path
	}
	else if (cat.val() == "Motherboard"){				// Tests if entered category is Motherboard
		catImage = "images/products/motherboard.png";	// Sets local variable to assoicated html image path
	}
	else if (cat.val() == "Memory"){					// Tests if entered category is Memory
		catImage = "images/products/memory.png";		// Sets local variable to assoicated html image path
	}
	else if (cat.val() == "Storage"){					// Tests if entered category is Storage
		catImage = "images/products/storage.png";		// Sets local variable to assoicated html image path
	}
	else if (cat.val() == "Power Supply"){				// Tests if entered category is Power Supply
		catImage = "images/products/power.png";			// Sets local variable to assoicated html image path
	}
	else if (cat.val() == "Cases"){						// Tests if entered category is Cases
		catImage = "images/products/case.png";			// Sets local variable to assoicated html image path
	}
	else {												// Otherwise the entered category does not match an existing category
		catImage = "images/products/new.png";			// Sets local variable to assoicated html image path
	}
	
	data.push({"ProductName": name.val(),				// Creates a new json data object in array with input field values and local varaible
			        "ProductID": id.val(),
			        "Description": desc.val(),
			        "Category": cat.val(),
			        "Manufacturer": manf.val(),
			        "Quantity": qty.val(),
			        "Price": price.val(),
			        "Weight": weight.val(),
			        "Image": catImage});
}


// Handles when the update button is pressed 
function validateUpdate(){
	
	// Tests the values of the input fields against the values saved when the product was loaded
	if( oldID == id.val() &&
		oldManf == manf.val() &&
		oldName == name.val() &&
		oldDesc == desc.val() &&
		oldCat == cat.val() &&
		oldQty == qty.val() &&
		oldPrice == price.val() &&
		OldWeight == weight.val()){				// If the values are the same, nothing has been updated

		alert("No Chanages have been made");	// Displays the error
		updateProductAction();					// Calls function to reload the updated product action
		loadOldValues();						// Calls function to load the saved values of the product being edited
		$("#update").prop("disabled", false);	// Enables update button 
	}
	else 										// Else, there has been a change made
	{
		errorFeedback = "ERROR!"				// Sets global variable to default state
		validateFields();						// Calls function for general input field validation
		if(errorFeedback == "ERROR!")			// Tests if the the global variable is still in the default state
		{										// If true, the validateFields function found no errors
			alert("Success");					// Displays the success
			updateProduct();					// Calls function to update the product's json data
			updateProductAction();				// Calls function to reload update product option
		}
		else   									// Else, the validateFeilds function found an error
		{	
			saveCurrentValues();				// Calls function to save the current values
			alert(errorFeedback);				// Displays the error message
			updateProductAction();				// Calls function to reload the update product option
			loadOldValues();					// Calls function to load saved values to input fields
			disableSearchFields();				// Disables search results
			$("#update").prop("disabled", false);// Enables update button
		}
	}
}


// Saves current values in input fields to global variables
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


// Loads saved values in global variables to input fields
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


// Handles the update of a product's json data
function updateProduct(){
	var catImage;										// Local variable to hold html

	if(cat.val() == "CPU"){								// Tests if entered category is CPU
		catImage = "images/products/cpu.png";			// Sets local variable to assoicated html image path
	}
	else if (cat.val() == "Motherboard"){				// Tests if entered category is Motherboard
		catImage = "images/products/motherboard.png";	// Sets local variable to assoicated html image path
	}
	else if (cat.val() == "Memory"){					// Tests if entered category is Memory
		catImage = "images/products/memory.png";		// Sets local variable to assoicated html image path
	}
	else if (cat.val() == "Storage"){					// Tests if entered category is Storage
		catImage = "images/products/storage.png";		// Sets local variable to assoicated html image path
	}
	else if (cat.val() == "Power Supply"){				// Tests if entered category is Power Supply
		catImage = "images/products/power.png";			// Sets local variable to assoicated html image path
	}
	else if (cat.val() == "Cases"){						// Tests if entered category is Cases
		catImage = "images/products/case.png";			// Sets local variable to assoicated html image path
	}
	else {												// Otherwise the entered category does not match an existing category
		catImage = "images/products/new.png";			// Sets local variable to assoicated html image path
	}

	for(var i = 0; i < data.length; i++){				// For loop to iterate through json data of products
		if(data[i].ProductID == oldID)					// Tests if product matches the loaded product
			{		 									// If true, updates the product to the values of the input fields and local variable
			data[i].ProductID = id.val();
			data[i].Manufacturer = manf.val();
			data[i].ProductName = name.val();
			data[i].Description = desc.val();
			data[i].Category = cat.val();
			data[i].Quantity = qty.val();
			data[i].Price = price.val();
			data[i].Weight = weight.val();
			data[i].Image = catImage;
		}
	}
}


// Handles when the delete button is pressed under the delete product option
function removeProduct(){
	var beforeProduct, afterproduct, productIndex;					// Local varaibles

	// Prompts the user to confirm they want to delete the product
  	if (confirm("Are you sure you want to delete this product?")) {	// If they select ok, delete product

  		for(var i = 0; i < data.length; i++){						// For loop to iterate through json data of products
			if(data[i].ProductID == oldID){							// Tests if product matches the loaded product	
				productIndex = i;									// Records the product's array index
			}
  		}

  		if(productIndex == 0){										// Tests if the product is the first json object in the array
  			data.shift();											// If true, deletes the first product in the array
  		} else if(productIndex == (data.length - 1)){				// Else, tests if the product is the last json object in the array
  			data.pop();												// If true, deletes the last product in the array
  		} else{														// Else, the product is somewhere else in the array

  			beforeProduct = new Array();							// Creates a new array to hold json data before the product
  			
  			for(var i =0; i < productIndex; i++){					// Iterates through all products up to the selected product
  				beforeProduct.push(data[i]);						// Adds the product to the new array
  			}

  			afterproduct = new Array();								// Creates a second new array to hold json data after the product

  			for(var i = data.length - 1; i > productIndex; i--){	// Iterates through all producducts after the selected product
  				afterproduct.unshift(data[i]);						// Adds the product to the second new array
  			}

			for(var i = 0; i < afterproduct.length; i++){			// Iterates through all products in the second new array
				beforeProduct.push(afterproduct[i]);				// Adds each product in the second new array to the first new array
			}
			
			data = beforeProduct;									// Sets the orignal array of json data objects to the new data array
  		}									
  	} 

	deleteProductAction();											// Reloads the delete product option
}