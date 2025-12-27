// Operador ternário (?)
// usado quando queremos fazer dois retornos possíveis através de uma expressão lógica.
// estrutura: (condição ? retono se true : retorno se false);

let v1 = 20;
let v2 = 10;

let res1 = (v1==v2 ? "v1 e v2 são iguais.": "v1 e v2 são diferentes.");
console.log(res1)

let res2 = (v1 > v2) ? "Sim, v1 é maior que v2.": "Não, v1 não é maior que v2."
console.log(res2)