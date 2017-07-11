/// <reference path="ishape.ts" />
var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(width, height) {
            this.width = width;
            this.height = height;
        }
        Rectangle.prototype.getArea = function () {
            return this.width * this.height;
        };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
/// <reference path="ishape.ts" />
var Shapes;
(function (Shapes) {
    var Square = (function () {
        function Square(sides) {
            this.sides = sides;
        }
        Square.prototype.getArea = function () {
            return this.sides * this.sides;
        };
        return Square;
    }());
    Shapes.Square = Square;
})(Shapes || (Shapes = {}));
/// <reference path="ishape.ts" />
var Shapes;
(function (Shapes) {
    var RightTriangle = (function () {
        function RightTriangle(base, height) {
            this.base = base;
            this.height = height;
        }
        RightTriangle.prototype.getArea = function () {
            return (this.base * this.height) / 2;
        };
        return RightTriangle;
    }());
    Shapes.RightTriangle = RightTriangle;
})(Shapes || (Shapes = {}));
/// <reference path="ishape.ts" />
/// <reference path="rectangle.ts" />
/// <reference path="squares.ts" />
/// <reference path="triangle.ts" />
var square = new Shapes.Square(5);
console.log("Área Rectangulo");
console.log(square.getArea());
var triangle = new Shapes.RightTriangle(3, 10);
console.log("Área Triangulo Rectangulo");
console.log(triangle.getArea());
var rectangle = new Shapes.Rectangle(3, 7);
console.log("Área Rectangulo");
console.log(rectangle.getArea());
