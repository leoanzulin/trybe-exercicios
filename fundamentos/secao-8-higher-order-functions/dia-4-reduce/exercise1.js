const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce((acc, cur) => acc.concat(cur), []); // o concat faz está fazendo concatenar o valor acumulado com o valor correte em um novo array.
  }

console.log(flatten());