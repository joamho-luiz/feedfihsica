// Verifica se é um dispositivo móvel conhecido.
function checarDispositivo() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true  // É um dispositivo móvel.
    } else {
       return false // Não é.
    }
}

// Redirecionar
if (checarDispositivo()) {
    window.location.href = "celular/inihcio-celular.html";
} else {
    window.location.href = "computador/inihcio-pc.html";
}