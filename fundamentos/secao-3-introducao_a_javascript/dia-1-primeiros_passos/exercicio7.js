let nota = 95
if(nota > 100 || nota <0){
    console.log("Erro: nota invalida")
}
else{
    if(nota >= 90){
        nota = "A"
    }
    else if(nota >= 80) {
        nota = "B"
    }
    else if(nota >= 70) {
        nota = "C"
    }
    else if(nota >=60) {
        nota = "D"
    }
    else if(nota >= 50) {
        nota = "E"
    }
    else{
        nota = "F"
    }
    console.log(nota)
}
