/* function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true); */

/* const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
}
  

  testingScope(true); */

  // Parte 2

/*   const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = (array) => {
    for (let index = 1; index < array.length; index += 1) {
        for (let index2 = 0; index2 < index; index2 += 1) {
            if (array[index] < array[index2]) {
                let position = array[index];
                array[index] = array[index2];
                array[index2] = position;
            }
        }
    } 
    return array;
}

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`); */

// Parte 2 Bonus

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`); */

// Em uma unica linha

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);