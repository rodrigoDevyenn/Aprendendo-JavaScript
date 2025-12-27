// Operador Spread (...)
/*É uma forma de espalhar ou expandir arrays, objetos ou strings. Ele basicamente desmonta algo que é " agrupado" e entrega cada parte separada.*/

// Uso para copiar os elementos de um array e objetos.
const numeros = [1, 2, 3, 4, 5];
const copia = [...numeros];
console.log(copia)

//uso para unir arrays.
const letras = ["A", "B"];
const letras2 = ["C", "D"];
const uniao = [...letras,...letras2]
console.log(uniao)

//uso para copiar objetos..
const pessoa = {nome: "Rodrigo", idade: 22};
const copiaPessoa = {...pessoa};
console.log(copiaPessoa);

// uso para unir objetos.
const pessoa2 = {nome: "Bruno", idade: 44};
const dados = {endereço: "Rua 2", telefone: "86 9 98989-9898"};
const uniaoDados = {...pessoa2, ...dados};
console.log(uniaoDados);

// uso para mudar propriedades de objetos.
const dadosAtualizados = {...uniaoDados, idade: 45};
console.log(dadosAtualizados);

//uso em funções
/*Quando temos funções que podem receber vários parâmetros, podemos usar o operador spread para passar os parâmetros todos de uma vez, armazenando-os em um array e assim passando o array com o spread, dessa forma: */

const soma = (a, b, c)=>{
    return (a + b + c);
}

const valores = [5, 3, 7];
console.log(soma(...valores));

//uso com o DOM
/*O operador spread é muito usado para copiar coleções de objetos HTML para array, já que, o array tem mais funções disponíveis do que a coleção de objetos HTML, por exemplo:*/

const htmlCollection = document.getElementsByTagName("div");
const array = [...htmlCollection];

//Dessa forma copiamos a coleçao html para array e usar mais funções disponíveis para arrays.
