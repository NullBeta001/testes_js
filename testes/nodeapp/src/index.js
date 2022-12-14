/*  
=====================================================================================
*/ 
//Exercício 4 - Criar Array com 100 número e separar os números ímpares

// let arr = Array.from({length:100},() => Math.floor(Math.random() * 1000));

const numeros = Array.from({ length: 100 }, (e, i) => i);

const filtrados = numeros.filter(function(num){
    return num % 2 !== 0;
});

console.log(filtrados);

/*  
=====================================================================================
*/ 