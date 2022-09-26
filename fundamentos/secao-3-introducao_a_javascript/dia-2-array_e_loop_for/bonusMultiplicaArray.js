let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = []
    for(let index = 0; index < numbers.length; index += 1){
        resultado.push(numbers[index] * numbers[index + 1])
        }
    resultado.push(numbers[numbers.length -1] * 2)
    console.log(resultado)




    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let multipliedNumbers = [];
    for (let index = 0; index < numbers.length - 1; index += 1) {
        multipliedNumbers.push(numbers[index] * numbers[index + 1]);
      }
      
      multipliedNumbers.push(numbers[numbers.length - 1] * 2);
      
      console.log(multipliedNumbers);