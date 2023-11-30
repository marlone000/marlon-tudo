let idade = 5
document.write("Sua idade: " + idade )
// se a idade for maior ou igual a 18 mostrar uma imagem de carro, se não escrever que volte mais tarde

/* 
se [teste] então
      [resposta verdadeira]
senão
      [resposta falsa]
fim se

*/
if(idade >= 18){
document.write("<h1>🚓🚗</h1>")
}else{
document.write ("<br>volte no momento certo, daqui a " + (18 - idade ))
}
// se média for maior ou igual a 5, mostar aprovado, senão mostrar reprovado
document.write("<hr>")
let media = 7
if(media >= 5 ){
    document.write("aprovado")
}else{
    document.write("reprovado")
}

document.write("<hr>")
let turno = "N"
if(turno == "M"){
document.write("<h1>Bom ☁</h1>")
}else if(turno == "V"){
    document.write("<h1>Boa ☀ </h1>")
}else if(turno == "N"){
    document.write("Boa 🌙 </h1>")
}else{
    document.write("opção inválida")
}
// se turno for igual a "M" mostar a mensagem "bom dia", se turno for "V" mostar "boa tarde",ou se turno for "N" mostar a mensagem "boa noite", se não for nenhuma mostrar "Opção inválida"


document.write("<hr>")
let ususario = "marlon"
let senha = 123

if(usuario == "admin" && senha == 123){
document.write("Acesso ao sistema liberado 🔓")
}else{
    document.write("BLOQUEADO! 🔒")
}
// se usuario for "admin" e senha "123",mostrar "acesso ao sistema liberado", se o admin e senha não forem os mesmos mostrar "BLOQUEADO!"

document.write("<hr>")

let estudante = " maikin do grau"
let media_nova = 7
let faltas = 14

if(media_nova >= 5 && faltas <= 15){
document.write("P A R A B É N S " + estudante + "PASSOU 🎉 ")
}else{
document.write("A vida é isso né " + estudante + ", dias de luta pq a glória chega nunca. 😪")
}
// se o estudante tiver media maior ou igual a 5 e faltas menor ou igual a 15 ele passou mostrar mensagem parabens passou, se as faltas forem maiores ou iguais a 15 e media <= a 5 mostrar a mensagem reprovado.

document.write("<hr>")
let personagem = "MarloneDuCreu"
let raca = "HUMAN"
let classe = "Ilusionista"
let vida = 316

let inimigo = ("i like runes")
let vida_inimigo = 360

document.write("<h3>" + personagem + "<br>" + raca + "<br>" + classe + "<br>" + vida + "</h3>")
document.write(inimigo + vida_inimigo)

let d6_personagem = 60
let d6_inimigo = 57
if(d6_personagem > d6_inimigo){
    document.write("<br> A chama vitória é sua 🔥")
}else{
    document.write("<br> A hora de todo mundo chega 💀")
}
