/*comentário
de várias 
linhas*/
//comentário de uma linha

/*variáveis - espaço reservado na memória 
que eu dou um nome. Esse nome:
- significativo
- não ter acento
- não ter caracteres especiais/símbolos
- começar com uma letra ou _
*/

//declaração de variável
var nome = " marlon "
let idade = 37 // vamos usar assim 
//[???]qual a diferença entre var e let?
//[???]quando foi criado o javascript e por quem?

altura = 1.60
let fumante = false
//tipos de dados
console.log(typeof nome) // string
console.log(typeof idade) // number
console.log(typeof altura) // number
console.log(typeof fumante) // boolean
//o JS é francamente tipado, isso significa que não precisamos informar o tip da variável em sua declaração.
// o tipo da variável é definido pelo seu conteúdo

// Entrada de dados 
nome = prompt("informe seu nome")
console.log(nome)
let satisfacao = confirm("Está gostando do javascript?")
console.log(satisfacao)

// saída de dados 
alert( " Seja bem vindo ou bem vinda " + nome )
console.log(" Você tem " + idade + " anos " )
document.write("<h2>Bora!!!</h2>")
document.write("<img src='images.jpg'>")

//Operadores
//Operadores Aritimrtícos
console.log("40+5=" + (40+5)) // adição 
console.log(40-5)
console.log(40*5)
console.log(40/5)
console.log(10%2) // módulo, resto da divisão

console.log("João" + "Paulo")// concatenar
let n1 = parseFloat(prompt("informe um número"))
console.log(n1 + 15)

// operador de atribuição (=)
n1 = 100

// Operadores relacionais
console.log("100 > 20 = " + (100 > 20)) // maior
console.log(100 < 20) // menor
console.log(100 == 20) // igualdade
console.log(100 != 100) // diferente
console.log(100 >= 100) // maior ou igual
console.log(100 <= 100) // menor ou igual

 // Operadores lógicos
 // && - E : todas as espressões precisam ser verdadeiras para o resultado ser verdadeiro
 console.log(10 > 3 && 10 > 15) // true
 console.log(10 > 3 && 10 > 15 && 10>2) // false

 // || - OU : apens uma expressão prcisa ser verdadeira para o resultado ser verdadeiro.Ele só será falso se todas as expressões forem falso
 console.log(10>3 || 10>5) // true
 console.log(10>30 || 10>50) // false
 console.log(10>15 || 10>100) // true

 // ! - NÃO - inverte o resultado, o que for verdadeiro ele transforma em falso e o que for falso transforma em verdadeiro
 console.log(!(10>3)) // false
 console.log(!(10<30)) // verdadeiro
