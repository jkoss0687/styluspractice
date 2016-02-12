// var ftemp = 65;
// var cel = 100;

// var celsius = ftemp -32*(5/9);
// console.log(celsius + " Temp converted to Celsius");

// var fah = cel +32*(9/5);
// console.log(fah + " Temp converted to Fahrenheit");

// var ftemp = prompt ("What is todays temperature");
// var ctemp = ftemp -32*(5/9);
// document.write("The calculation from Fahrenheit to celsius is " + ctemp); 



var button = document.getElementById("submit");
var body = document.getElementById("result");

button.addEventListener("click", function(e){
	var userTemp = document.getElementById("temp").value;
	var userUnit = document.getElementById("unit").value;
	body.innerText= convertTemp(userTemp, userUnit);	
})

function fahrenheitToCelsius(temp){
	return ((temp -32)* (5/9));
}

function celsiusToFahernheit(temp){
	return ((temp *9/5) + 32);
}

function convertTemp(temp, unit){
	if (unit ==="F") {
		return fahrenheitToCelsius(temp);
	}else {
		return celsiusToFahernheit(temp);
	}

}

// console.log(convertTemp(0, "C") );