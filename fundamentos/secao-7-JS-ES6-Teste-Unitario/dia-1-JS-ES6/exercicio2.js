const factorial = (number) => {
    let result = 1
    for (let index = 1; index < number; index += 1){
     result += result * index;       
    }
    console.log(`Esse é o fatorial ${result}`)  
}
factorial(4);