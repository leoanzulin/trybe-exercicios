const books = require('./dataBase');

const expectedResult = 43;

function averageAge() {
 return books.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0) / books.length;
}
console.log(averageAge())