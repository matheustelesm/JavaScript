function carregar() { 
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12) { //BOM DIA
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } 
    else if (hora >= 12 && hora <= 18) { //BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }
    else if(hora >= 19 && hora < 23){ //BOA NOITE
            img.src = 'noite.jpg'
            document.body.style.background = '#515154'

    }
    else {
        img.src = 'madrugada.jpg'
            document.body.style.background = '#1E1E1E'
    }

}


