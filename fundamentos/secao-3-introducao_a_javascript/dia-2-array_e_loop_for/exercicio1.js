let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    // for(let index = 0; index < numbers.length; index += 1){
    //     console.log(numbers[index])
    // }
    let soma = 0
    let media
    for(let index = 0; index < numbers.length; index += 1){
        soma += numbers[index]
    }
    media = soma / numbers.length
    if (media > 20) {
        console.log("valor maior que 20")
    }
    else {
        console.log("valor menor ou igual a 20")
    }
    
