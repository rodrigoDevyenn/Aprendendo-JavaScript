function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = Number(window.document.getElementById('txtano').value)
    var res = window.document.querySelector('div#res')
    if (fano.length == 0 || fano > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var sex = window.document.getElementsByName('radsex')
        var idade = ano - fano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criançaM.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemM.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'AdultoM.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'IdosoM.jpg')
            }
        }else if ( sex[1].checked){
            genero = 'Mulher'
             if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criançaF.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemF.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'AdultoF.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'IdosoF.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}