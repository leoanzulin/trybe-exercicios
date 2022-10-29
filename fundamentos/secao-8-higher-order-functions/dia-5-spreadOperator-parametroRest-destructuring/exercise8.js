//Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:

const greet = (nome, frase = 'Hi') => `${frase} ${nome}` // quando passamos um parametro para a função podemos utilizar default params, que utilizamos um = na frente do paramentro com um resultado que queremos caso não seja passado esse parametro na chamada da função

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'