const books = require('./dataBase');
//Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((acc, cur) => `${acc} ${cur.author.name},`, '')
}

console.log(reduceNames());