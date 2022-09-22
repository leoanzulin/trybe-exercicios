const a = 20;
const b = 2;
const c = 25;
if (a > b && a > c){
    console.log(a);
}
else if (b > a && b > c){
    console.log(b);
}
else if (c > a && c > b){
    console.log(c);
}
else {
    console.log("Números iguais")
}