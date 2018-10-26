/*================================================
    Author: Rosalina Lash
    
==================================================*/	
		
	
	//This resets the radios buttons. I had to separate them into 3 sections//
	//The code wouldn't work if I did all of the buttons at once. Not sure why//
    document.getElementById('clear-button').addEventListener('click', function () {
      ["radio-a", "radio-b", "radio-c", "radio-d","radio-e", "radio-f", "radio-g", "radio-h", "radio-i"].forEach(function(id) {
        document.getElementById(id).checked = false;
      });
      return false;
    })

	 document.getElementById('clear-button').addEventListener('click', function () {
      ["radio-j", "radio-k", "radio-l", "radio-m","radio-n", "radio-o", "radio-p", "radio-q", "radio-r"].forEach(function(id) {
        document.getElementById(id).checked = false;
      });
      return false;
    })
	
	document.getElementById('clear-button').addEventListener('click', function () {
      ["radio-s", "radio-t", "radio-u", "radio-v","radio-w", "radio-x", "radio-y", "radio-z", "radio-1", "radio-2"].forEach(function(id) {
        document.getElementById(id).checked = false;
      });
      return false;
    })

	//Beginning of Get Receipt Function//

function getReceipt() {
	var text1 = "<h3>Get in my belly...</h3>"; // Naming Variables// 
	var runningTotal = 0; //running total will add the values together//
	var sizeTotal = 0; 
	
	//Pizza Size Array//
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	
	///Pizza Size Section///
	if (selectedSize === "Personal Pizza") { //Three equal signs indicates both the value and type are equal. Just for my knowledge//
		sizeTotal = 6;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 16;
	} else if (selectedSize === "Medium Pizza") { 
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;	
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCheese(runningTotal,text1); //to grab the next array i.e. cheese//
};

	//Cheese Array price increase for EXTRA CHEESE only//	
function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			var selectedCheese = cheeseArray[i].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Extra Cheese") { //If statement to add total//
		cheeseTotal = 3;
};
	runningTotal = (runningTotal + cheeseTotal);
	console.log(selectedCheese+" = $"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCrust(runningTotal,text1); //
};	
	//Crust Array price increase for CHEESE STUFF CRUST only//
function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Cheese Stuffed Crust") { //If statement to add total//
		crustTotal = 3;
};
	
	runningTotal = (runningTotal + crustTotal);
	console.log(selectedCrust+" = $"+crustTotal+".00");
	console.log("crust text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); //to grab the next array i.e. meat to continue adding the variables//
};	


	// Meat and Veggies are first item free then +1 additional. This will set it up to only add price after second check//
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) { //This is where if the meat count is more than 1 then +1//
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0; 
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getVeggie(runningTotal,text1);
};

function getVeggie(runningTotal,text1) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggie");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			selectedVeggie.push(veggieArray[j].value);
			console.log("selected veggie item: ("+veggieArray[j].value+")");
			text1 = text1+veggieArray[j].value+"<br>";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("totalPrice").innerHTML = "<br><h3>Total: $"+runningTotal+".00"+"</h3>";
	getSauce(runningTotal, text1)
};
function getSauce(runningTotal,text1) {
	var sauceTotal =0;
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
			text1 = text1+sauceArray+"<br>";
		}
	}
	
	if (selectedSauce === "marinara") { 
		sauceTotal = 0;
}; 
	
	runningTotal = (runningTotal + sauceTotal);
	console.log(selectedSauce+" = $"+sauceTotal+".00");
	console.log("sauce text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	
	document.getElementById("showText").innerHTML=text1; //This returns the item value in HTML//
	
};

	

	