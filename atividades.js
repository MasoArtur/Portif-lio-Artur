/*let fnome = "Artur";
let snome = "Maso";

let numero = "9923-7479";
let idade = 16;
const cpf = "123.451.589-73";

console.log(fnome);
console.log(snome);
console.log(numero);
console.log(idade);
console.log(cpf);


if(idade <= 18){
    console.log("voce é menor de idade")
} else{
    console.log("voce é maior de idade")
} */



/*if(idade <= 13 ){
    console.log("voce é uma criança")
} else{
    console.log("voce nao é uma criança")
}
if(idade >= 13){
    console.log("voce é um adolescente")
}else{
    console.log("voce é uma criança")
} 

if(idade >= 23){
    console.log("voce é um adulto")
} else{
    console.log("voce é um adolescente")
}

if(idade >= 55){
    console.log("voce é um idoso")
}else{
    console.log("voce nao é um idoso")
}*/

let numero = 16;

if(numero % 2 === 0){
    console.log("ele é par")
} else{
    console.log("ele é impar")
}

let nota = 6;

if(nota < 5){
    console.log("voce reprovou")
}  else if(nota > 7 ){
    console.log("Parabéns voce passou")
} else{
    console.log("voce esta em recuperação")
}

let n1 = 18;
n1 = parseInt(n1);

let n2 = 24;
n2 = parseInt(n2);

let op = "+";"-";"*";"/";

if(op == "+"){
    console.log(n1 + n2);
}else if(op == "-"){
    console.log(n1 - n2);
}else if(op == "*"){
    console.log(n1 * n2);
}else if(op == "/"){
    console.log(n1 / n2);
}


let n3 = 6;
let n4 = 4;
let n5 = 24;

if(n3 > n4 && n3 > n5){
    console.log("o" + n3 + "é o maior");
} else if(n4 > n3 && n4 > n5){
    console.log("o" + n4 + "é o maior");
} else if(n5 > n3 && n5 > n4){
    console.log("o " + n5 + " é o maior");
}

/*BISSEXTO */
let ano = 2018;

if(ano % 4 === 2 ){
    console.log("ele é copa")
} else{
    console.log("ele não é copa")
}

/*a diferença entre um ano bissexto e um ano da copa é 2 */