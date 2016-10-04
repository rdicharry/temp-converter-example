/**
 * Created by rebecca on 10/4/16.
 */

var value=null;

function convertFtoC(tempF){

}

function convertCtoF(tempC){

}

function convert(element){

	var celsius = convertTemps.degC.value;
	var fahrenheit = convertTemps.degF.value;

	if(celsius != ""){
		value = convertCtoF(celsius)
	} else {
		value = convertFtoC(fahrenheit);
	}

	value = ("degC = "+celsius+", degF = "+fahrenheit + ", result = "+value);

	displayResult(element)

}

function getValue() {
	return value;
}

function displayResult(element){
	var resultElement = document.getElementById(element);
	resultElement.innerHTML = getValue();
}
