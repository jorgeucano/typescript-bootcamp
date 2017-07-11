"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Nave = (function () {
    function Nave(nombre, largo, ancho, altura, velocidad, tripulacionMinima, hipermotor) {
        this.tripulacionMinima = 0;
        this.tripulacion = [];
        this.pasajeros = [];
        this.x = 0;
        this.destruida = false;
        this.nombre = nombre;
        this.largo = largo;
        this.ancho = ancho;
        this.altura = altura;
        this.velocidad = velocidad;
        this.tripulacionMinima = tripulacionMinima;
        this.hipermotor = hipermotor;
    }
    Nave.prototype.despegar = function () {
        if (this.tripulacion.length < this.tripulacionMinima) {
            console.log(this.nombre + ": La nave requiere m\u00EDnimo " + this.tripulacionMinima + " tripulante(s) para poder despegar!");
            return;
        }
        console.log(this.nombre + ": Despegando...");
        this.desplazarse();
    };
    Nave.prototype.destruir = function () {
        this.destruida = true;
        console.log(this.nombre + ": Ha sido destruida.");
    };
    Nave.prototype.mostrarPersonasABordo = function () {
        var personasABordo = this.calcularPersonasABordo();
        if (personasABordo == 0) {
            console.log("La nave '" + this.nombre + "' no tiene personas a bordo.");
            return;
        }
        var tripulante;
        var pasajero;
        console.log("En la nave '" + this.nombre + "' hay " + this.calcularPersonasABordo() + " persona(s):");
        if (this.tripulacion.length > 0) {
            console.log("Tripulantes:");
            for (var _i = 0, _a = this.tripulacion; _i < _a.length; _i++) {
                tripulante = _a[_i];
                console.log(" - " + tripulante.nombre);
            }
        }
        if (this.pasajeros.length > 0) {
            console.log("Pasajeros:");
            for (var _b = 0, _c = this.pasajeros; _b < _c.length; _b++) {
                pasajero = _c[_b];
                console.log(" - " + pasajero.nombre);
            }
        }
    };
    Nave.prototype.agregarTripulante = function (tripulante) {
        this.tripulacion.push(tripulante);
    };
    Nave.prototype.agregarPasajero = function (pasajero) {
        this.pasajeros.push(pasajero);
    };
    Nave.prototype.calcularPersonasABordo = function () {
        return (this.tripulacion.length + this.pasajeros.length);
    };
    return Nave;
}());
exports.Nave = Nave;
