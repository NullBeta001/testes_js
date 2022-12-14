/*  
=====================================================================================
*/
//Exercício 5 - Criar código JS que simule um financiamento que todo mês acrescenta um percentual na dívida pendente de pagamento.

let total = 20000; // R$ 10.000,00 - Valor total do empréstimo

let parcela = 1000; // R$ 1.000,00 - Valor da parcela mensal

const juros = 0.02; // 2% - Taxa de juros ao mês

let totalMes = 0;

while (total > 0) {
    totalMes++
    console.log(`Parcela ${totalMes} + 2% de Juros = R$ ${total.toFixed()} - R$ 1.000 = Saldo devedor ${total.toFixed()}`)
    total = (total + (total * juros)) - parcela
}
/*  
=====================================================================================
*/




