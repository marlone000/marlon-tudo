let preco1, preco2, preco3

preco1 = parseFloat(prompt("Informe um preço"))
preco2 = parseFloat(prompt("Informe um preço"))
preco3 = parseFloat(prompt("Informe um preço"))

if(preco1 < preco2 ) {
    if(preco1 < preco3) {
        alert( " preço 1 é o menor " + preco1 )
    }
}
if(preco2 < preco1 ) {
    if(preco2 < preco3) {
        alert( " preço 2 é o menor " + preco2 )
    }
}
if(preco3 < preco2 ) {
    if(preco3 < preco1) {
        alert( " preço 3 é o menor " + preco3 )
    }
}
/*algoritimo é tortura :)*/