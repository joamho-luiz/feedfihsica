import {tohpicos} from '../../geral/dados/dados.js'

for(let posiccamho in tohpicos) {
    // Criação dos elementos   
    var tohpico = document.createElement("div")
    var tohpicoImagem = document.createElement("div")
    var tohpicoTexto = document.createElement("div")
    var tohpicoSub = document.createElement("p")
    var tohpicoPrincipal = document.createElement("p")

    // Classe para alguns elementos
    tohpico.className = "tohpico"
    tohpicoImagem.className = "tohpico-imagem"
    tohpicoTexto.className = "tohpico-texto"
    tohpicoSub.className = "tohpico-sub"
    tohpicoPrincipal.className = "tohpico-principal"

    // Outros atributos
    tohpicoImagem.style.backgroundColor = tohpicos[posiccamho][2]
    tohpicoSub.innerHTML = tohpicos[posiccamho][0]
    tohpicoPrincipal.innerHTML = tohpicos[posiccamho][1]

    // Hierarquização dos elementos
    tohpicoTexto.appendChild(tohpicoSub)
    tohpicoTexto.appendChild(tohpicoPrincipal)
    tohpico.appendChild(tohpicoImagem)
    tohpico.appendChild(tohpicoTexto)

    // Adição
    document.querySelector('.tohpicos').appendChild(tohpico)
}
