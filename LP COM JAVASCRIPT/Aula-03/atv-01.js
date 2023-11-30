// Array 

let frutas = ["Laranja", "Abacaxi", "Morango"]
//              0          1          2

//Exibindo array inteiro
console.dir(frutas)

//Exibindo uma posição do array
console.log(frutas[2])

//Alterando o valor de uma posição do array
frutas[1] = "Pêra"
console.dir(frutas)

//Adicionar um novo elemento do início do array
frutas.unshift("Romã")
console.dir(frutas)
//Adicionar um novo elemento no final do array
frutas.push("Pitanga")
console.dir(frutas)
//Ordenar o array em ordem crescente
frutas.sort()
console.dir(frutas)
//Ordenar o array em ordem decrescente
frutas.sort().reverse()
console.dir(frutas)
//Remover o primeiro item do array
frutas.shift()
console.dir(frutas)
//Remover o último item do array
frutas.pop()
console.dir(frutas)
