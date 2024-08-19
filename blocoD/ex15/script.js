function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =  ''
        var img = window.document.getElementById('imagem')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.src = 'criança_m.jpg'
            } else if(idade < 21){
                //jovem
                img.src = 'jovem_m.jpg'
            }else if (idade < 51) {
                //adulto
                img.src = 'adulto_m.jpg'
            }else{
                //idoso
                img.src = 'idoso_m.jpg'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.src = 'criança_f.jpg'
            } else if(idade < 21){
                //jovem
                img.src = 'jovem_f.jpg'
            }else if (idade < 51) {
                //adulto
                img.src = 'adulto_f.jpg'
            }else{
                //idoso
                img.src = 'idoso_f.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}