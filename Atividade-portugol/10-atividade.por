programa
{
  funcao inicio()
  {
    inteiro m
    real nota1, nota2, nota3, media
    cadeia nome
    para(m = 1; m <= 30; m++)
    {
      escreva("Digite o nome do aluno ", m, ": ")
      leia(nome)

      escreva("Digite a primeira nota do aluno ", m, ": ")
      leia(nota1)

      escreva("Digite a segunda nota do aluno ", m, ": ")
      leia(nota2)

      escreva("Digite a terceira nota do aluno ", m, ": ")
      leia(nota3)

      media = (nota1 + nota2 + nota3) / 3

      se(media >= 5)
        escreva(nome, " foi aprovado com média ", media)
      senao
        escreva(nome, " foi reprovado com média ", media)
    }
  }
}