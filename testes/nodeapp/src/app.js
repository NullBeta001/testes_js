/*  
=====================================================================================
*/ 
//Exercício 1 - Convertendo arquivo CSV para JSON

import { readFile, writeFile } from 'fs/promises';


const lendoArquivo = (await readFile('./dados.csv')).toString()
const arquivoDividido = lendoArquivo.split('\r\n')
const [header, ...arquivos] = arquivoDividido
const arr = []

for(const i of arquivos){
    const arquivosDs = i.split(';')
    arr.push({
        nome:arquivosDs[0],
        idade:arquivosDs[1],
        cidade:arquivosDs[2]
    })
}

// console.log(JSON.stringify(arr));

const arquivoEscrito = await writeFile('./csvToJson.json', JSON.stringify(arr))

// console.log(arr) 

/*  
=====================================================================================
*/  
// Exercício 2 - Exibindo apenas arquivos filtrados na variável escolha

let escolha = "Blumenau";

const selected = arr.filter(item => item.cidade == escolha)

// console.log(selected);

/*  
=====================================================================================
*/
// Exercício 3 - Ordenando lista em ASC e DESC
// ASC

let coluna = 'idade';

const ordenadoAsc = arr.sort(function(a, b){
    if(a[coluna] < b[coluna]) {
        return -1;
    }else{
        return true;
    }
})

// console.log(ordenadoAsc)

// DESC
let coluna1 = 'idade';

const ordenadoDesc = arr.sort(function(a, b){
    if(a[coluna1] > b[coluna1]) {
        return -1;
    }else{
        return true;
    }
})

// console.log(ordenadoDesc)


