
let lista = document.querySelector('select#selvet')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (n >= 1 && n <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    let txtnum = document.getElementById('txtnum')
    let num = Number(txtnum.value)
    if(isNumero(num) && !inLista(num, valores)){
        valores.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        lista.append(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    txtnum.value = ''
    txtnum.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione um valor para finalizar!')
    }else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores adicionados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores adicionados é ${media}.</p>`
    }
}


