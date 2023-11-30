let nome 
let idade

nome = prompt("informe seu nome")
idade = parseFloat(prompt("informe sua idade"))

if(idade >=18 ){
    alert( " Olá " + nome + " você pode dirigir ")
}else {
     alert(nome + " volte em alguns anos ")    
}
