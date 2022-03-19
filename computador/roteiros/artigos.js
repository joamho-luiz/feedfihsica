import {tohpicos} from '../../geral/dados/dados.js'
import {canais} from '../../geral/dados/dados.js'
import {postes} from '../../geral/dados/dados.js'


for (let posiccamho in postes) {
    // Criação dos elementos    
    var artigo = document.createElement('article')
    var artigoImagem = document.createElement('div')
    var artigoConteuhdo = document.createElement('div')
    var artigoSeguir = document.createElement('a')
    var artigoNome = document.createElement('p')
    var artigoTohpico = document.createElement('p')
    var artigoDescriccamho = document.createElement('p')
    var artigoEspaccoVihdeo = document.createElement('div')
    var artigoVihdeo = document.createElement('iframe')
    var artigoBotomhes = document.createElement('div')
    var artigoB1 = document.createElement('div')
    var artigoB2 = document.createElement('div')
    var artigoB3 = document.createElement('div')

    // Classe para alguns elementos
    artigo.className = 'artigo'
    artigoImagem.className = 'artigo-imagem'
    artigoConteuhdo.className = 'artigo-conteuhdo'
    artigoSeguir.className = 'artigo-seguir'
    artigoNome.className = 'artigo-nome'
    artigoTohpico.className = 'artigo-tohpico'
    artigoDescriccamho.className = 'artigo-descriccamho'
    artigoEspaccoVihdeo.className = "artigo-espacco-vihdeo"
    artigoVihdeo.className = 'artigo-vihdeo'
    artigoBotomhes.className = 'artigo-botomhes'
    artigoB1.className = 'artigo-b1'
    artigoB2.className = 'artigo-b2'
    artigoB3.className = 'artigo-b3'

    artigoB1.id = 'artigo-b1' + posiccamho

    // Outros atributos
    artigoImagem.style.backgroundImage = "url('../geral/imagens/" + canais[postes[posiccamho][1]][2] + "')"
    artigoSeguir.innerHTML = "Seguir"
    artigoNome.innerHTML = canais[postes[posiccamho][1]][0]
    artigoDescriccamho.innerHTML = postes[posiccamho][2]
    artigoTohpico.style.backgroundColor = tohpicos[postes[posiccamho][0]][2] + 'aa'
    artigoTohpico.innerHTML = tohpicos[postes[posiccamho][0]][0]
   
    artigoB1.setAttribute('onclick', "clickCurtir('pc', " + posiccamho + ")")
    artigoB2.setAttribute('onclick', "clickIndisponihvel()")
    artigoB3.setAttribute('onclick', "clickCompartilhar('https://www.youtube.com/watch?v=" + postes[posiccamho][3] + "')")
    artigoSeguir.setAttribute('onclick', "clickIndisponihvel()")

    // Iframe
        artigoVihdeo.setAttribute('frameborder', '0')
        artigoVihdeo.setAttribute('allow', 'fullscreen')
        artigoVihdeo.src = 'https://www.youtube.com/embed/' + postes[posiccamho][3] + '&fs=1&modestbranding=1&rel=0&showinfo=0'
   
    // Hierarquização dos elementos
    artigoBotomhes.appendChild(artigoB1)
    artigoBotomhes.appendChild(artigoB2)
    artigoBotomhes.appendChild(artigoB3)
    artigoEspaccoVihdeo.appendChild(artigoVihdeo)
    artigoEspaccoVihdeo.appendChild(artigoBotomhes)
    artigoConteuhdo.appendChild(artigoSeguir)
    artigoConteuhdo.appendChild(artigoNome)
    artigoConteuhdo.appendChild(artigoTohpico)
    artigoConteuhdo.appendChild(artigoDescriccamho)
    artigoConteuhdo.appendChild(artigoEspaccoVihdeo)
    artigo.appendChild(artigoImagem)
    artigo.appendChild(artigoConteuhdo)

    // Adição
    document.querySelector('#seccamho').appendChild(artigo)
}

