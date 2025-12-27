// Operador typeof 
// retorna o tipo de dado, passando como parâmetro o próprio dado ou uma variável.

let v1 = 10; 
let v2 = 10.5;  
let v3 = "10";
let v4 = (v1 === v2);
let v5 = 123456789123456789123456789n;
let v6;
let v7 = null;
let v8 = {
    nome : "Rodrigo"
    ,idade: 22
};

console.log(typeof(v1));    // number
console.log(typeof(v2));    // number
console.log(typeof(v3));    // string
console.log(typeof(v4));    // boolean
console.log(typeof(v5));    // bigint
console.log(typeof(v6));    // undefined
console.log(typeof(v7));    // object
console.log(typeof(v8));    // object

