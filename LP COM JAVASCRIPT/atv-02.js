let personagem = [
    "Nome",
    "Classe",
    "Raça",
    "Equipamento",
    100,//vida
    50//força
]

console.log("==== FICHA DE PERSONAGEM ====")
console.log("Lazaro: " + personagem[0])
console.log("Demonio guerreiro Superior: " + personagem[1])
console.log("Vampiro: " + personagem[2])
console.log("Lamina do caos: " + personagem[3])
console.log("Vida: " + personagem[4])
console.log("Força: " + personagem[5])

console.log("CAPÍTULO 01 - O INÍCIO")
console.log("Você acaba de chegar na cidade e foi logo procurar uma taverna para poder beber e comer!")
console.log("Você ouve uma burburinho sobre um dragão vermelho assolando a cidade. Você ai vê a chance de fazer dinheiro usando o desespero das pessoas e prometendo o que você nunca cumpre: Matar o Dragão.")
console.log("Você tenta se aproximar para ouvir melhor. Role o dado e faça um teste para ver se você consegue")
let dado = Math.floor(Math.random() * (6 - 1 + 1)) + 1
if(dado > 5){
    console.log("SUCESSO!!! Você consegue ouvir a conversa e descobre que o drgão dorme em cima de uma pilha de ouro.")
}else{
    console.log("FALHA!!! Você só consegue ouvir o seu próprio arroto, você tropeça e cai de cara no chão, perca 2 de vida")
    personagem[4] = personagem[4] - 2
    console.log("Vida: " + personagem[4])
}