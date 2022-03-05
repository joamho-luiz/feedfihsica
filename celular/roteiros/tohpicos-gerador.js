// Variáveis vindas de dados
import {tohpicos} from '../../geral/dados/dados.js'

var vetorAtual = 0

function gerarTohpico() {
    // Criação dos elementos    
    var article = document.createElement('article')
    var h3 = document.createElement('h3')
    var div = document.createElement('div')

    // Atributos
    h3.innerHTML = tohpicos[vetorAtual][1]

    // Parágrafos
    if (tohpicos[vetorAtual][1] == 'Iniciação à Física') {
        var p1 = document.createElement('p')
        p1.innerHTML = tohpicos[vetorAtual][1]
        div.appendChild(p1)
        vetorAtual + 1
    }

    // Hierarquização dos elementos
    article.appendChild(h3)
    article.appendChild(div)

    // Adição da seção
    document.querySelector('#tohpicos').appendChild(article)
}