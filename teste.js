/*Exercício 2 - Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

let fibonacci = [0,1];
let numero = Math.floor(Math.random() * 100); //gera um numero aleatório entre 1 e 100
let soma = 0;

for(var i = 1; i <= numero; i++){
    if(fibonacci[i] <= numero){
        soma += fibonacci[i] + fibonacci[i-1];
        fibonacci.push(soma);
        soma = 0;
    }
}
    if(fibonacci[i] == numero){
        console.log(`O número sorteado ${numero} pertence à sequência de Fibonacci`);
    }
    else{
        console.log(`O número sorteado ${numero} NÃO pertence à sequência de Fibonacci`);
    }

console.log(fibonacci);



//Exercício 5 - 5) Escreva um programa que inverta os caracteres de um string.

let palavra = "Olá target!";
let inversor = "";

for (var i = palavra.length - 1; i >= 0; i--) {
    inversor += palavra[i]; 
}

console.log(inversor);