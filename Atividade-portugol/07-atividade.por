programa {
  funcao inicio() {
  inteiro idade

    escreva("Digite a idade: ")
    leia(idade)

    se(idade <= 13)
      escreva("Criança")
    senao se(idade <= 20)
      escreva("Adolescente")
    senao
      escreva("Adulto")  
  }
}
