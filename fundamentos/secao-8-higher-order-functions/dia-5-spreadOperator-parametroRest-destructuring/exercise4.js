//Escreva uma função filterPeople que, dada uma lista de pessoas, retorne todas as pessoas australianas que nasceram no século 20:
const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
      // bornIn: nascido em
  ];
  
  // escreva filterPeople abaixo
  function filterPeople() {
   return people.filter(({bornIn, nationality}) => ((bornIn > 1900 && bornIn < 2000) && nationality === 'Australian')); //usei a função filter para filtra o ano de nascimento e a nacionalidade, de parametro para a função usei object destructuring, chamando apenas as chaves do objeto que utilizei na função.
  }

  console.log(filterPeople());