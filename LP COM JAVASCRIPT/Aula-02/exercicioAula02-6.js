//6. Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.
let preco1, preco2, preco3
preco1 = 9
preco2 = 7
preco3 = 6

if (preco1 < preco2 && preco1 < preco3 ){
    console.log("preço 1  é mais barato")
}else if (preco2 < preco1 && preco2 < preco3){
    console.log("preço 2 é mais barato ")
}else if(preco3 < preco1 && preco3 < preco2){
    console.log(" preço 3 é mais barato ")   
}