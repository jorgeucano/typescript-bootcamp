/// <reference path="ishape.ts" />

namespace Shapes{
    export class Square implements Shape{
        sides:number;
        constructor (sides:number){
            this.sides = sides;
        }

        getArea():number{
            return this.sides * this.sides;
        }
    }
}