/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const preço_do_combustivel = 5.79;
const gasto_médio_de_combustivel = 12;
const distância_em_km = 1580;

const litros = distância_em_km / gasto_médio_de_combustivel;

const gasto_total = litros * preço_do_combustivel;

console.log(gasto_total.toFixed(2));







