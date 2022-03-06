// Variáveis vindas de dados
import {tohpicos} from '../../geral/dados/dados.js'

function gerarTohpico(principal) {
    var h3 = document.createElement('h3')
    h3.innerHTML = principal
    var div = document.createElement('div')

    for (let posiccamho in tohpicos) {
        if (tohpicos[posiccamho][1] == principal) {
            var p = document.createElement('p')
            p.innerHTML = tohpicos[posiccamho][0]
            div.appendChild(p)
            h3.style.backgroundColor = tohpicos[posiccamho][2]
        }
    }

    article.appendChild(h3)
    article.appendChild(div)
}

var article = document.createElement('article')

gerarTohpico('Iniciação à Física')
gerarTohpico('Dinâmica')
gerarTohpico('Cinemática')
gerarTohpico('Gravitação Universal')
gerarTohpico('Estática')
gerarTohpico('Leis de Conservação')

document.querySelector('#tohpicos').appendChild(article)
