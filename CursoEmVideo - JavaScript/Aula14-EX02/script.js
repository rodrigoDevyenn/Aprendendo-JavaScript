function gerarTabuada(){
    let num = Number(window.document.getElementById('txtnum').value)
    let tab = document.getElementById('seltab')
    if (num.lenght == 0){
        window.alert("Por favor, digite um número")
    }else{
        tab.innerHTML = ''
        let c = 1
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }
    }
}