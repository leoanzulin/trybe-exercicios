//Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é representado dentro de um array. Então seu chefe pede que seja mudado o formato de array para objeto. Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro:

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([car, brand, year]) => {
    return {
        car,
        brand,
        year,
    }; // usando o array destructuring consigo chamar os elementos do array como variaveis e usando o abbreviation object literal já direto com essas varias consigo criar o objeto, o nome da variavel vai ser o nome da chame e seu valor vai ser o valor da chave. o return tem que ser feito dessa forma, não da para fazer em uma linha só pois da erro.
};

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));