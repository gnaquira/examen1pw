let btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", function() {
	let temperatura = document.getElementById("valortemp").value;
	let unidad = document.querySelector('input[name="gradotemp"]:checked').value;

	if (unidad == "celsius") {
		let tempFahrenheit = (temperatura * 9/5) + 32;
		alert("La temperatura calculada es " + tempFahrenheit.toFixed(2) + " °F");
	} else if (unidad == "fahrenheit") {
		let tempCelsius = (temperatura - 32) * 5/9;
		alert("La temperatura calculada es " + tempCelsius.toFixed(2) + " °C");
	}
});
