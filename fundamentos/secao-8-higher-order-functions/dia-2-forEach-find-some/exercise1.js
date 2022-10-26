const books = require('./dataBase');

const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947).author.name;

console.log(authorBornIn1947())