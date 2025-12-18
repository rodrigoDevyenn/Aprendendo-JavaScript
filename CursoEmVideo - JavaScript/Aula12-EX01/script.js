
function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        msg.innerHTML += 'Bom dia'
        foto.src = "Manha.jpg"
        document.body.style.background = 'rgba(199, 204, 254, 1)'
    }else if (hora >= 12 && hora < 18){
        msg.innerHTML += 'Boa Tarde'
        foto.src = "Tarde.jpg"
        document.body.style.background = 'rgb(250, 222, 147)'
    }else {
        msg.innerHTML += 'Boa Noite'
        foto.src = "Noite.jpg"
        document.body.style.background = 'rgb(6, 9, 61)'
    }
}
