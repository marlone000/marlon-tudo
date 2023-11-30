programa {
  funcao inicio() {
      inteiro num1, num2, opcao
      real resultado
    escreva("Digite o primeiro número: ")
    leia(num1)
    escreva("Digite o segundo número: ")
    leia(num2)
    escreva("Qual operação deseja realizar?\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n")
    leia(opcao)
    escolha(opcao) {
      caso 1:
        resultado = num1 + num2
      caso 2:
        resultado = num1 - num2
      caso 3:
        resultado = num1 * num2
      caso 4:
        resultado = num1 / num2
        se (num1 % 2 == 0) {
      escreva(resultado, " é um número par.\n")
    } senao 
      escreva(resultado, " é um número ímpar.\n")
    }

    se (num1 >= 0) {
      escreva(resultado, " é um número positivo.\n")
    } senao 
      escreva(resultado, " é um número negativo.\n")
   
   escreva(resultado)
    se (resultado == inteiro (resultado)) {
      escreva(" O número é inteiro.\n")
    }
     senao  { 
      escreva(" O número é decimal.\n")
     }
 }
}