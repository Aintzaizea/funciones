//Ejercicio 1: Saludo personalizado

function saludar (nombre) {
    return `Hola ${nombre}`
};

console.log (saludar("Haizea"));
console.log (saludar("Aintzane")); //comillas para string

//Función de flecha
const saludo = nombre => `Hola ${nombre}`
console.log(saludo("Aintzane"))

//Ejercicio 2: Suma de dos números

function suma (num1, num2) {
    return num1 + num2
};

console.log (suma(3,4));
console.log (suma(8,9));

//Función de flecha
const sumar = (a,b) => a + b
console.log(sumar(42,64));
console.log(sumar(60,479));

//Ejercicio 3: Números pares
function esPar(num) {
    if (num % 2 === 0 ) {
        return true
    } else {
        return false
    }
};
 console.log(esPar(6));
 console.log(esPar(29));

//Ejercicio 4: Mayor de tres números 
function mayorDeTres (a, b, c) {
    return mayorDeTres;
};

console.log (Math.max((3, 6, 9)));
console.log (Math.max((99, 266, 774)));

//Ejercicio 5: Conversión de grados Celsius a Fahrenheit

function celsiusAFahrenheit (celsius) {
    return gradosF = (celsius * 9/5) + 32
}

console.log(celsiusAFahrenheit(25));
console.log(celsiusAFahrenheit(4));


