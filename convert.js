/**
 * Created by rebecca on 10/4/16.
 */

var value=null;

function convertFtoC(tempF){

}

function convertCtoF(tempC){

}

function convert(degC, degF){

	value = ("degC = "+degC+", degF = "+degF);

}

function getValue() {
	return value;
}

function displayResult(element){
	resultElement = document.getElementById(element);
	resultElement.innerHTML = getValue();
}
