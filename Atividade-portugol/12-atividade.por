programa
{
  inclua biblioteca Util
	funcao inicio()
	{
		inteiro numero, tentativa, contador
		logico acertou

		numero = Util.sorteia(1,10)
		acertou = falso
		contador = 0
		enquanto (acertou == falso e contador < 3) {
			escreva("Digite um número entre 1 e 10: ")
			leia(tentativa)
			se (tentativa == numero) {
				escreva("Parabéns, você acertou!\n")
				acertou = verdadeiro
			}
			senao {
				se (tentativa > numero) {
					escreva("O número é menor que ", tentativa, "\n")
				}
				senao {
					escreva("O número é maior que ", tentativa, "\n")
				}
				contador = contador + 1
				se (contador < 3) {
					escreva("Você tem mais ", 3 - contador, " tentativa(s)\n")
				}
				senao {
					escreva("Você perdeu o jogo. O número era ", numero, "\n")
				}
			}
		}
		
		escreva("Fim do jogo\n")
	}
}