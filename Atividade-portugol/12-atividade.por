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
			escreva("Digite um n�mero entre 1 e 10: ")
			leia(tentativa)
			se (tentativa == numero) {
				escreva("Parab�ns, voc� acertou!\n")
				acertou = verdadeiro
			}
			senao {
				se (tentativa > numero) {
					escreva("O n�mero � menor que ", tentativa, "\n")
				}
				senao {
					escreva("O n�mero � maior que ", tentativa, "\n")
				}
				contador = contador + 1
				se (contador < 3) {
					escreva("Voc� tem mais ", 3 - contador, " tentativa(s)\n")
				}
				senao {
					escreva("Voc� perdeu o jogo. O n�mero era ", numero, "\n")
				}
			}
		}
		
		escreva("Fim do jogo\n")
	}
}