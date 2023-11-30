programa {
  funcao inicio() {
    real altura, peso 
    escreva("Digite a altura da pessoa (em metros): ")
    leia(altura)
    peso = (72.7 * altura) - 58
    escreva("O peso ideal para uma pessoa com ", altura, "m de altura é ", peso, "kg.")
  }
}
