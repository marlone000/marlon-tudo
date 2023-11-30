/*
Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.C = 5 * ((F-32) / 9).
*/

let fahrenheit = parseFloat(prompt("temperatura em fahrenheit "))

let Celsius = ( 5 * ((fahrenheit-32) / 9))

alert("a temperatura em celsius é: " + Celsius)