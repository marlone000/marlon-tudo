//8. Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.
let seg, ter, qua, qui, sex ,sab, dom, diaS
seg = 2
ter = 3
qua = 4
qui = 5
sex = 6 
sab = 7
dom = 1
diaS = 7
if(diaS == dom){
    console.log("1-Domingo")
}else if (diaS == seg){
    console.log("2-Segunda")
}else if (diaS == ter ){
    console.log("3-terça")
    }else if (diaS == qua ){
    console.log("4-Quarta")
}else if (diaS == qui){
    console.log("5-quinta")
}else if (diaS == sex ){
    console.log("6-Sexta")
    }else if (diaS == sab ){
    console.log("7-Sábado")
}else{
    console.log(" Opção inválida")
}
