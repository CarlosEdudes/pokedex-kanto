/*
    O que precisamos fazer? - Quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro.

    -Objetivo 1- Quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua.
        -passo 1- Pegar no JS o elemento HTML correspondente ao botão de troca de tema
        -passo 2- Dar um jeito de pegar no JS o elemento HTML corresponde ao body
        -passo 3- Dar um jeito de identificar o clique do usuário no botão de troca de tema
        -passo 4- Adicionar a classe modo-escuro no body
        -passo 5- Trocar a imagem do botão de alterar tema pra lua

    -Objetivo 2- Quando clicar no botão de troca de tema, caso o body já tenha a classe modo escuro, remover a classe pra mudar pro modo claro e mudar a imgem pro sol
        -passo 6- Remover a classe do modo-escuro do body
        -passo 7- Trocar a imagem do botão de alterar tema pra sol
*/

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body")
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {

        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png");

    } else {

        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png");
    }
});