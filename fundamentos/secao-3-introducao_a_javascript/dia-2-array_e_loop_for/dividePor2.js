let numbers = [];
for (index = 1; index <= 25; index+= 1){
    numbers.push(index);
}
let numbersPerTwo = []
for (indexPerTwo = 0; indexPerTwo < numbers.length; indexPerTwo += 1) {
    numbersPerTwo.push(numbers[indexPerTwo] / 2)
}
console.log("Números: " + numbers)
console.log("Números dividido por 2: " + numbersPerTwo)