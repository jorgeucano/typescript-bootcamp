"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Nave_1 = require("./Nave");
var DestructorEstelar = (function (_super) {
    __extends(DestructorEstelar, _super);
    function DestructorEstelar() {
        return _super.call(this, 'Destructor Estelar Imperial I', 1600, 1000, 500, 2.300, 0, true) || this;
    }
    DestructorEstelar.prototype.atacar = function (nave) {
        console.log(this.nombre + ": Armas listas.");
        this.enemigo = nave;
    };
    DestructorEstelar.prototype.disparar = function () {
        if (!this.enemigo.destruida) {
            console.log(this.nombre + ": Pium pium!");
        }
    };
    DestructorEstelar.prototype.desplazarse = function () {
        console.log(this.nombre + ": En movimiento...");
        var that = this;
        this.desplazamiento = setInterval(function () {
            that.x += that.velocidad * 4;
            console.log("Posici\u00F3n actual de la nave " + that.nombre + " > x: " + that.x);
            that.disparar();
            if (that.x > 100) {
                that.detenerse();
            }
        }, 500);
    };
    DestructorEstelar.prototype.detenerse = function () {
        clearInterval(this.desplazamiento);
        console.log("Posici\u00F3n final de la nave " + this.nombre + " > x: " + this.x);
    };
    return DestructorEstelar;
}(Nave_1.Nave));
exports.DestructorEstelar = DestructorEstelar;
