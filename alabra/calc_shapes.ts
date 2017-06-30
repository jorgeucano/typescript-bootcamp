/// <reference path="ishape.ts" />
/// <reference path="rectangle.ts" />
/// <reference path="squares.ts" />
/// <reference path="triangle.ts" />

let square = new Shapes.Square(5);
console.log("Área Rectangulo");
console.log(square.getArea());

let triangle = new Shapes.RightTriangle(3,10);
console.log("Área Triangulo Rectangulo");
console.log(triangle.getArea());

let rectangle = new Shapes.Rectangle(3,7);
console.log("Área Rectangulo");
console.log(rectangle.getArea());