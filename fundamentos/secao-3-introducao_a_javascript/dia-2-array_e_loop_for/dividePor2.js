let numbers = []
let divisao = []
for (let index = 1; index <= 25; index += 1) {
    numbers.push(index)
}
for (index2 = 0; index2 < numbers.length; index2 += 1){
        divisao.push(numbers[index2] / 2)
}
console.log("Números: " + numbers)
console.log("Números divido por 2: " + divisao)