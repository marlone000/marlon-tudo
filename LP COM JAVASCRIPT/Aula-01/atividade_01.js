console.log("Lógica de Programação")
console.log("com Javascript")

// Variável
/*
3 formas de declarar uma variável
  1 forma sem Declarar 
  2 utilizando var
   *** utilizando let
   */
//  1 sem declarar
nome = "marlon"

// 2 utilizando var
var idade = 16

// 3 utilizando let
let email = "marlontristesad@gmail.com"

console.log(nome, idade, email)

//  constante
const escola = "Senac Americana"
// escola = "Senac Piracicaba"
console.log(escola)

// tipos dew dados
/*
String - texto
Number - int, float
Boolean - True / False 
function, undefined, null, object, sybol
*/

console.log("NOME => " + typeof nome)
console.log("IDADE => " + typeof idade)
console.log("EMAIl => " + typeof email) 
console.log("CONSTANTE => " + typeof console ) 
console.log("ESCOLA => " + typeof escola )
 
nome = "marlon"
let sobrenome = "paços"

console.log(" Nome completo: " + nome + " "  + sobrenome)