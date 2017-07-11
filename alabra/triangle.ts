/// <reference path="ishape.ts" />

namespace Shapes{
    export class RightTriangle  implements Shape{
        base:number;
        height:number;

        constructor(base:number, height:number) {
            this.base = base;
            this.height = height;
        }

        getArea():number{
            return (this.base * this.height)/2;
        }
    }
}