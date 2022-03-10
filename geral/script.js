window.onload = function() {
    //
}

window.addEventListener('orientationchange', function(){ 
    if(window.innerWidth > window.innerHeight) {
        this.alert("O coneteúdo da página está desenhado para ser consumido na vertical")
    }
});

var curtida = []
function clickCurtir(origem, poste){
    if (origem == 'pc') {
        let identificador = '#artigo-b1' + poste
        if (curtida[poste] === undefined) {
            curtida[poste] = true
            document.querySelector(identificador).style.backgroundImage = "url('../geral/imagens/curtir-rosa.png')"
        } else if (curtida[poste] == true) {
            curtida[poste] = false
            document.querySelector(identificador).style.backgroundImage = "url('../geral/imagens/curtir-preto.png')"
        } else if (curtida[poste] == false) {
            curtida[poste] = true
            document.querySelector(identificador).style.backgroundImage = "url('../geral/imagens/curtir-rosa.png')"
        }
    } else if (origem == 'celular') {
        let identificador = '#curtir' + poste
        if (curtida[poste] === undefined) {
            curtida[poste] = true
            document.querySelector(identificador).style.backgroundImage = "url('../geral/imagens/curtir-rosa.png')"
        } else if (curtida[poste] == true) {
            curtida[poste] = false
            document.querySelector(identificador).style.backgroundImage = "url('../geral/imagens/curtir-cinza.png')"
        } else if (curtida[poste] == false) {
            curtida[poste] = true
            document.querySelector(identificador).style.backgroundImage = "url('../geral/imagens/curtir-rosa.png')"
        }
    }
}

async function clipboardCopy(enderecco) {
    await navigator.clipboard.writeText(enderecco);
}
function clickCompartilhar(enderecco){
    clipboardCopy(enderecco)
    alert('Copiado para área de transferência!')
}
function compartilharPahgina() {
    clipboardCopy('https://joamho-luiz.github.io/feedfihsica/')
    alert('Copiado para área de transferência!')
}

function clickIndisponihvel(){
    alert('Está função está temporariamente indisponível :(')
}

function mudarFoco(foco){
    if (foco == 'sobre') {
        document.querySelector('#sobre').style.display = 'block'
        document.querySelector('#tohpicos').style.display = 'none'
        document.querySelector('.sec-sobre').style.borderBottomStyle = 'solid'
        document.querySelector('.sec-tohpico').style.borderBottomStyle = 'none'
    } else if (foco == 'tohpico') {
        document.querySelector('#tohpicos').style.display = 'block'
        document.querySelector('#sobre').style.display = 'none'
        document.querySelector('.sec-tohpico').style.borderBottomStyle = 'solid'
        document.querySelector('.sec-sobre').style.borderBottomStyle = 'none'
    }
}
