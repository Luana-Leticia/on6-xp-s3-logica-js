const query = require("synchronous-user-input");

function celsiusParaFahrenheit(temperaturaCelsius){
    return ((1.8 * temperaturaCelsius) + 32);
}

function obterTemperaturaCelsius(){
    const temperaturaEmCelsius = Number(query("Por favor, digite a temperatura em Celsius: "));
    const temperaturaEmFahrenheit = celsiusParaFahrenheit(temperaturaEmCelsius);
    console.log(`Temperatura em Fahrenheit: ${temperaturaEmCelsius} °C equivale a ${temperaturaEmFahrenheit.toFixed(2)} °F.`);
}

console.log("CONVERSÃO DE TEMPERATURA (°C -> °F)");
obterTemperaturaCelsius();