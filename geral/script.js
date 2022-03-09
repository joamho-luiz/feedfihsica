window.onload = function() {
    // init();
    screen.orientation.lock('portrait')
};

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
function clickComentar(){
    alert('indisponível')
}
function clickCompartilhar(){
    alert('indisponível')
}
function clickFoco() {
    alert('indisponível')
}