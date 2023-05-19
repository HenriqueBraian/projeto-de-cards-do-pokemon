//pegar no js o elemento HTTML correspondente ao botão de troca de tema:

const bataoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body")
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//da um jeito de identificar o clique do usuario no botão de troca de tema:
//("click", () => {}) 

bataoAlterarTema.addEventListener("click", () => {

    const ModoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (ModoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png")

    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png")
    }

});

