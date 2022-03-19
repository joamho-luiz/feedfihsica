// Variáveis vindas de dados
import {tohpicos} from '../../geral/dados/dados.js'
import {canais} from '../../geral/dados/dados.js'
import {postes} from '../../geral/dados/dados.js'

var primeiro = true
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
    
    if (primeiro) {
        section.id = 'primeiro-poste'
        primeiro = false 
    }

    curtir.id = 'curtir' + posiccamho

    // Outros atributos

        // Iframe
        iframe.setAttribute('frameborder', '0')
        iframe.setAttribute('allow', 'fullscreen')
        iframe.src = 'https://www.youtube.com/embed/' + postes[posiccamho][3] + '&fs=1&modestbranding=1&rel=0&showinfo=0'   

        // Botões
        curtir.setAttribute('onclick', "clickCurtir('celular', " + posiccamho + ")")
        comentar.setAttribute('onclick', "clickIndisponihvel()")
        compartilhar.setAttribute('onclick', "clickCompartilhar('https://www.youtube.com/watch?v=" + postes[posiccamho][3] + "')")

        // Demais elementos  
        tihtulo.innerHTML = 'Feed Física'
        img.src = '../geral/imagens/verificado.png'
        tohpico.style.backgroundColor = tohpicos[postes[posiccamho][0]][2]
        nome.innerHTML = '@' + canais[postes[posiccamho][1]][0]
        descrição.innerHTML = postes[posiccamho][2]
        foto.src = '../geral/imagens/'+ canais[postes[posiccamho][1]][2]
        a.href = canais[postes[posiccamho][1]][3]

        var textinho = tohpicos[postes[posiccamho][0]][0]
        if (textinho.length > 40 ){
            tohpico.innerHTML = textinho.slice(0,40) + '...'
        }else{
            tohpico.innerHTML = textinho.slice(0,40)
    }
    
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