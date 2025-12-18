function contar() {
    var ini = Number(window.document.getElementById('txtinicio').value)
    var fim = Number(window.document.getElementById('txtfim').value)
    var passo = Number(window.document.getElementById('txtpasso').value)
    var res = window.document.querySelector('div#res')

    if(ini.length == 0 || fim.length == 0 || passo.length == 0 || passo == 0){
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = ''
        for(var i = ini; i <= fim; i += passo){
        res.innerHTML += `${i}`
        if (i == fim){
            res.innerHTML += '.'
        }else{
            res.innerHTML += ', '
        }
    }
    }  
}