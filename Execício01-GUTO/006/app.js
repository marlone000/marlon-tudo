/*
Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês
*/

let valor = parseFloat(prompt("quanto você ganha por hora?"))

let hora = parseFloat(prompt("quantas horas você trabalha?"))

let salário = (valor * hora * 30 )

alert("seu salário mensal é: " + salário)