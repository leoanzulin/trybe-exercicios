const books = require('./dataBase');

const expectedResult = false;

function authorUnique() {
  return books.every((book) => 
  books.some((bookSome) => (book.author.birthYear === bookSome.author.birthYear) && (book.author.name !== bookSome.author.name)));
}

console.log(authorUnique());