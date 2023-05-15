const botaoTema = document.getElementById("botao-tema")
const corpoTema = document.querySelector("body")
const imgBotao = document.querySelector(".imagem-botao")

botaoTema.addEventListener("click", () => {
    const temaEscuro = corpoTema.classList.contains('modo-escuro')

    corpoTema.classList.toggle('modo-escuro')

    if (temaEscuro) {
        imgBotao.setAttribute("src", "./src/imagens/sun.png")
    } else {
        imgBotao.setAttribute("src", "./src/imagens/lua.png")
    }

})//dispara a açao do modo escuro