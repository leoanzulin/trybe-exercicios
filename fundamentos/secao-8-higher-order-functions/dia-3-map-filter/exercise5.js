const books = require('./baseCode');
//Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
  
  function fantasyOrScienceFictionAuthors() {
    return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((booke) => booke.author.name).sort()
  }

  console.log(fantasyOrScienceFictionAuthors())