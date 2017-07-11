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
var HalconMilenario = (function (_super) {
    __extends(HalconMilenario, _super);
    function HalconMilenario() {
        return _super.call(this, 'Halcon Milenario', 34.75, 25.61, 8.27, 6.050, 2) || this;
    }
    HalconMilenario.prototype.prepararEscudos = function () {
        console.log(this.nombre + ": Escudos listos.");
    };
    HalconMilenario.prototype.defenderse = function () {
        console.log(this.nombre + ": Refuerza sus escudos.");
    };
    HalconMilenario.prototype.desplazarse = function () {
        console.log(this.nombre + ": En movimiento...");
        var that = this;
        this.desplazamiento = setInterval(function () {
            that.x += that.velocidad * 4;
            console.log("Posici\u00F3n actual de la nave " + that.nombre + " > x: " + that.x);
            that.defenderse();
            if (that.x > 100) {
                that.detenerse();
                that.destruir();
            }
        }, 500);
    };
    HalconMilenario.prototype.detenerse = function () {
        clearInterval(this.desplazamiento);
    };
    return HalconMilenario;
}(Nave_1.Nave));
exports.HalconMilenario = HalconMilenario;
