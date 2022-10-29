//Dado o código abaixo, altere a chamada da função rectangleArea de forma que seja impressa a área dos 3 retângulos (rectangle1, rectangle2 e rectangle3). O código deve retornar em sequência 2, 15 e 54.

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); // coloquei o rectangle como parametro pois ele está passando pelos 3 rectangle fornecido como exemplo de parametro, e coloque os ... de spread operator para tirar os dados de dentro do array e fornecer como 2 parametro separados para a função.
});

