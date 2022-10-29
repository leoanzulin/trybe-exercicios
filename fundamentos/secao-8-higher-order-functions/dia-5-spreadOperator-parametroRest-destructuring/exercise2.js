//Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.
const sum = (...numbers) => {
    return numbers.reduce((acc, number) => acc + number,0) //usou os ... de rest parameter antes do paremetro da função sum para podermos passar qualquer quantidade de parametro quando chamar a função e depois um reduce para realizar a soma e retornar apenas o resultado
}

console.log(sum(4,5,6));