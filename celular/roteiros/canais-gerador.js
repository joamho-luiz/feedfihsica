// Variáveis vindas de dados
import {canais} from '../../geral/dados/dados.js'

for (let posiccamho in canais) {
    // Criação dos elementos    
    var article  = document.createElement('article')
    var foto = document.createElement('div')
    var img = document.createElement('img')
    var texto = document.createElement('div')
    var a = document.createElement('a')
    var p = document.createElement('p')

    // Classe para alguns elementos
    foto.className = 'foto'
    texto.className = 'texto'

    // Outros atributos
    img.src = "../../geral/imagens/curiosamente.jpg"
    a.innerHTML = canais[posiccamho][0]
    p.innerHTML = canais[posiccamho][1]
    foto.style.backgroundImage = "url('../geral/imagens/" + canais[posiccamho][2] + "')"
    a.href = canais[posiccamho][3]

    // Hierarquização dos elementos
    article.appendChild(foto)
    article.appendChild(texto)
    foto.appendChild(img)
    texto.appendChild(a)
    texto.appendChild(p)

    // Adição da seção
    document.querySelector('#seccamho').appendChild(article)
}
