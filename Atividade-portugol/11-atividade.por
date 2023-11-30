programa
{
  funcao inicio()
  {
    real nota

    faca
    {
      escreva("Digite uma nota entre 0 e 10: ")
      leia(nota)

      se(nota < 0 ou nota > 10)
        escreva("Valor inválido. ")
    } enquanto(nota < 0 ou nota > 10)

    escreva("Nota válida: ", nota)
  }
}