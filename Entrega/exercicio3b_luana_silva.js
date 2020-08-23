const query = require("synchronous-user-input");

function fahrenheitParaCelsius(temperaturaFahrenheit){
    return (5 / 9) * (temperaturaFahrenheit - 32);
}

function obterTemperaturaFahrenheit(){
    const temperaturaEmFahrenheit = Number(query("Por favor, digite a temperatura em Fahrenheit: "));
    const temperaturaEmCelsius = fahrenheitParaCelsius(temperaturaEmFahrenheit);
    console.log(`Temperatura em Celsius: ${temperaturaEmFahrenheit} °F equivale a ${temperaturaEmCelsius.toFixed(2)} °C.`);
}

console.log("CONVERSÃO DE TEMPERATURA (°F -> °C)");
obterTemperaturaFahrenheit();