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

/*let numero = 16;

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

/*BISSEXTO */ /*
let ano = 2018;

if(ano % 4 === 2 ){
    console.log("ele é copa")
} else{
    console.log("ele não é copa")
} */

/*a diferença entre um ano bissexto e um ano da copa é 2 */

// for(let n1 = 0; n1 <= 100; n1++){
//     console.log(n1);
// }

// for(let n1 = 0; n1 < 50; n1++){
//     console.log(n1 + 1);
// }

// let n1 = 0;
// while(n1 < 50){
//     n1++;
//     console.log(n1);
// }

// let tabuada = 5;
// for(let n2 = 1; n2 <= 10; n2++){
//     let mensagem  = tabuada * n2;
//     console.log(mensagem);
// }


// for(let n4 = 50; n4 > 0; n4--){
//     console.log(n4 - 1);
// }

// let n3 = 0;
// while(n3 < 50){
//     n3--;
//     console.log(n3);
// }

// let number = 39;
// for(var i = 0; i <= number; i +=2 ){
//     console.log(i);
// }

// // for(var i = 0; i <= 24; i += 2){
// //     console.log(i);
// // }

// let n0 = 0
// let blablabla = 12
// while(n0 < blablabla){
//     n0 = n0 + 2;
//     console.log(n0);
// }

/*let notas = [9.0, 5.2,7.1,2.3,8.0];// cria vetor

notas.push(4.4); //adiciona 1 item no vetor(no final)
notas.splice(3,1)

//console.log(notas.length); //(LENGHT)tamanho do vetor

for(let i = 0; i <notas.length; i++){
    console.log("A nota " + (i+ 1) + " é "+ notas[i]);
}*/

//VETOR

// let vetor = ["artur","alicia","mariana","tariq","diego"];

// for(let i = 0; i < 5; i++){
//     console.log("o nome "+ (i + 1)+ " é " + vetor[i]);
// }

// let sla = [23, 16, 2.0, 5, 2];
//     for(let i = 0; i < sla.length; i++){
//         if(sla[i] > 10){
//             console.log("os numeros maiores são" + sla[i]);
//         }
//     } 
    
// let frutas = ["banana","maça","kiwi"];
//     frutas.push("pera", "laranja");

//     console.log("o total de frutas é igual a: " + frutas);

// let notas = [12, 4, 8, 64, 32];
// let media = 0;

//     for(let i = 0; i < notas.length; i++){
//         media += notas[i];
//         // media = media + notas[i]
//     }
//     let soma = media / notas.length;

//     console.log(soma);

let livros = [
    {
        titulo : "Percy Jackson",
        autor : "RICK RIORDAN",
        ano : "2008",
    },
];
livros[0].ano = "2009";
console.log(livros[0].titulo);

let carro = [
    {
        modelo: "sedan",
        cor: "verde-agua",
        ano: "1999",
    },
];

carro[0].cor = "roxo";
console.log("A cor do carro é: " + carro[0].cor);

let muie = [
    {
        cabelo: "loiro",
        nivel_brava: "7",
        beleza: "9",
    },
];

console.log(muie[0].nivel_brava);

muie[0].nivel_brava = "9";
console.log(muie[0].nivel_brava);

let alunos = [
    {
        nome: "guilherme",
        nota: 7,
    },

    {
        nome: "alicia",
        nota: 8,
    },
    {
        nome: "gustavo",
        nota: 5,
    },
];

for(let i = 0; i <alunos.length; i++){ //aqui eu acesso cada aluno, o i começa em 0, que é o indice do primeiro item no array
    if(alunos[i].nota >= 6){  //aqui acessa os itens nota do array alunos
      console.log(`os alunos aprovados são:  ${alunos[i].nome}`);
    }
};
