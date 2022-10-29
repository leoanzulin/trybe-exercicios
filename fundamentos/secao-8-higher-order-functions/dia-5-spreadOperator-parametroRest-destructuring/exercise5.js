//Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando apenas 1 linha. O retorno da função utilizando o array myList deve ser [3, 2, 5].

const myList = [5, 2, 3];

const swap = ([first, second, third]) => [third, second, first]; // utilizei array destructuring para chamar a função transformando cada item do array em uma variavel, lembrando que é basicamente igual o object destructuring, porem agora como de trata de um array, utiliza colchetes [] e não chaves {}.

console.log(swap(myList));
    
