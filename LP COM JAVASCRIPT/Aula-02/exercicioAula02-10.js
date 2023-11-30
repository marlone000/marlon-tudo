/*  Você está programando um sistema para uma empresa de recursos humanos. De acordo com o tempo de experiência do candidato você deve informar ao recrutador o nível do candidato. Considere:
a.    Menor que 2 anos → Júnior
b.    Entre 2 e 5 anos → Pleno
c.    Acima de 5 anos → Sênior */

let anos = 7

if (anos < 2) {
    console.log("Júnior")
} else if (anos >= 2 && anos <= 5) {
    console.log("Pleno")
} else if (anos > 5) {
    console.log("Sênior")
} 
