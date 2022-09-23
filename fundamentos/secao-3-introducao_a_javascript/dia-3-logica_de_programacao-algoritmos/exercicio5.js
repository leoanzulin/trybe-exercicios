let primos = []
let maiorNumero = 0
for (let index = 2; index <= 50; index += 1){
    if ((index % 1 === 0) && (index % index === 0)) {
        primos.push(index)
    }
}
console.log(primos)