/// <reference path="ishape.ts" />

namespace Shapes{
    export class Rectangle implements Shape{
        width:number;
        height:number;

        constructor(width:number, height:number){
            this.width = width;
            this.height = height;
        }

        getArea():number{
            return this.width * this.height;
        }
    }
}
 