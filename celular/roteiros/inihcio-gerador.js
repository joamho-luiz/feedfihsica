// Variáveis vindas de dados
import {tohpicos} from '../../geral/dados/dados.js'
import {canais} from '../../geral/dados/dados.js'
import {postes} from '../../geral/dados/dados.js'

for (let posiccamho in postes) {
    // Criação dos elementos    
    var section = document.createElement('section')
    var header = document.createElement('header')
    var tihtulo = document.createElement('p')
    var tohpico = document.createElement('p')
    var iframe = document.createElement('iframe')
    var nula = document.createElement('div')
    var textos = document.createElement('div')
    var nome = document.createElement('p')
    var span = document.createElement('span')
    var img = document.createElement('img')
    var descrição = document.createElement('p')
    var botomhes = document.createElement('div')
    var a = document.createElement('a')
    var foto = document.createElement('img')
    var curtir = document.createElement('div')
    var comentar = document.createElement('div')
    var compartilhar = document.createElement('div')

    // Classe para alguns elementos
    tihtulo.className = 'tihtulo'
    tohpico.className = 'tohpico'
    nula.className = 'nula'
    textos.className = 'textos'
    nome.className = 'nome'
    descrição.className = 'descrição'
    botomhes.className = 'botomhes'
    foto.className = 'foto'
    curtir.className = 'curtir'
    comentar.className = 'comentar'
    compartilhar.className = 'compartilhar'

    // Outros atributos

        // Iframe
        // iframe.setAttribute('allowfullscreen')
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
        iframe.setAttribute('frameborder', '0')
        tihtulo.innerHTML = 'Feed Física'
        img.src = '../geral/imagens/verificado.png'

        // Botões
        curtir.setAttribute('onclick', 'clickCurtir()')
        comentar.setAttribute('onclick', 'clickComentar()')
        compartilhar.setAttribute('onclick', 'clickCompartilhar()')

        // Dados para alguns elementos
        iframe.src = postes[posiccamho][3]
        tohpico.innerHTML = tohpicos[postes[posiccamho][0]][0]
        tohpico.style.backgroundColor = tohpicos[postes[posiccamho][0]][2]
        nome.innerHTML = '@' + canais[postes[posiccamho][1]][0]
        descrição.innerHTML = postes[posiccamho][2]
        foto.src = '../geral/imagens/'+ canais[postes[posiccamho][1]][2]
        a.href = canais[postes[posiccamho][1]][3]
    
    // Hierarquização dos elementos
    section.appendChild(header)
    header.appendChild(tihtulo)
    header.appendChild(tohpico)
    section.appendChild(iframe)
    section.appendChild(textos)
    section.appendChild(botomhes)
    section.appendChild(nula)
    textos.appendChild(nome)
    textos.appendChild(descrição)
    nome.appendChild(span)
    nome.appendChild(img)
    botomhes.appendChild(a)
    botomhes.appendChild(curtir)
    botomhes.appendChild(comentar)
    botomhes.appendChild(compartilhar)
    a.appendChild(foto)

    // Adição da seção
    document.querySelector('#bd').appendChild(section)
}