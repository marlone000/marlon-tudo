programa {
  funcao inicio() {
      inteiro num1, num2, opcao
      real resultado
    escreva("Digite o primeiro n�mero: ")
    leia(num1)
    escreva("Digite o segundo n�mero: ")
    leia(num2)
    escreva("Qual opera��o deseja realizar?\n1 - Soma\n2 - Subtra��o\n3 - Multiplica��o\n4 - Divis�o\n")
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
      escreva(resultado, " � um n�mero par.\n")
    } senao 
      escreva(resultado, " � um n�mero �mpar.\n")
    }

    se (num1 >= 0) {
      escreva(resultado, " � um n�mero positivo.\n")
    } senao 
      escreva(resultado, " � um n�mero negativo.\n")
   
   escreva(resultado)
    se (resultado == inteiro (resultado)) {
      escreva(" O n�mero � inteiro.\n")
    }
     senao  { 
      escreva(" O n�mero � decimal.\n")
     }
 }
}