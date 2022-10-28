const books = require('./dataBase');
//Encontre o livro com o maior nome.
const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  function longestNamedBook() {
    return books.reduce((acc, curr) => {
     if(curr.name.length > acc.length) {
            acc = curr;
        }
    return acc
    },'' )
  }


console.log(longestNamedBook());