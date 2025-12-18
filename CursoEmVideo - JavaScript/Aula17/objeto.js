let amigo = {
    nome: 'Rodrigo',
    idade: 22,
    peso: 58.6,
    engordar(p){
        this.peso += p
        console.log('Engordou')
    }
}
console.log(amigo)
amigo.engordar(5)
console.log(amigo.peso)