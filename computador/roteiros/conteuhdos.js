import {canais} from '../../geral/dados/dados.js'

for (let posiccamho in canais) {
    // Criação dos elementos    
    var conteuhdo = document.createElement("a")
    var conteuhdoImagem = document.createElement("div")
    var conteuhdoTexto = document.createElement("div")
    var conteuhdoNome = document.createElement("p")
    var conteuhdoVerificado = document.createElement("div")
    var conteuhdoOrigem = document.createElement("p")

    // Classe para alguns elementos
    conteuhdo.className = "conteuhdo"
    conteuhdoImagem.className = "conteuhdo-imagem"
    conteuhdoTexto.className = "conteuhdo-texto"
    conteuhdoNome.className = "conteuhdo-nome"
    conteuhdoVerificado.className = "conteuhdo-verificado"
    conteuhdoOrigem.className = "conteuhdo-origem"

    // Outros atributos
    conteuhdoImagem.style.backgroundImage = "url('../geral/imagens/" + canais[posiccamho][2] + "')"
    conteuhdoNome.innerHTML = canais[posiccamho][0]
    conteuhdoOrigem.innerHTML = canais[posiccamho][1]
    conteuhdo.href = canais[posiccamho][3]
    conteuhdo.target = "_blank"

    // Hierarquização dos elementos
    conteuhdoTexto.appendChild(conteuhdoNome)
    conteuhdoTexto.appendChild(conteuhdoVerificado)
    conteuhdoTexto.appendChild(conteuhdoOrigem)
    conteuhdo.appendChild(conteuhdoImagem)
    conteuhdo.appendChild(conteuhdoTexto)
    
    // Adição
    document.querySelector('.conteuhdos').appendChild(conteuhdo)
}

