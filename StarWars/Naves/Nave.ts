import { Tripulante } from '../Personas/Tripulante';
import { Pasajero } from '../Personas/Pasajero';

export abstract class Nave {

    protected nombre: string;
    protected largo: number;
    protected ancho: number;
    protected altura: number;
    protected velocidad: number;
    protected hipermotor?: boolean;
    protected tripulacionMinima: number = 0;
    protected tripulacion: Tripulante[] = [];
    protected pasajeros: Pasajero[] = [];

    protected x: number = 0;
    protected desplazamiento: any;

    public destruida: boolean = false;

    constructor(nombre: string, largo: number, ancho: number, altura: number, velocidad: number, tripulacionMinima: number, hipermotor?: boolean) {
        this.nombre = nombre;
        this.largo = largo;
        this.ancho = ancho;
        this.altura = altura;
        this.velocidad = velocidad;
        this.tripulacionMinima = tripulacionMinima;
        this.hipermotor = hipermotor;
    }

    public despegar(): void {
        if(this.tripulacion.length < this.tripulacionMinima) {
            console.log(`${this.nombre}: La nave requiere mínimo ${this.tripulacionMinima} tripulante(s) para poder despegar!`);
            return;
        }

        console.log(`${this.nombre}: Despegando...`);

        this.desplazarse();
    }

    abstract desplazarse(): void;
    abstract detenerse(): void;

    public destruir(): void {
        this.destruida = true;
        console.log(`${this.nombre}: Ha sido destruida.`);
    }

    public mostrarPersonasABordo() {

        let personasABordo = this.calcularPersonasABordo();

        if(personasABordo == 0) {
            console.log(`La nave '${this.nombre}' no tiene personas a bordo.`);
            return;
        }

        let tripulante: any;
        let pasajero: any;

        console.log(`En la nave '${this.nombre}' hay ${this.calcularPersonasABordo()} persona(s):`);
        
        if(this.tripulacion.length > 0) {
            console.log(`Tripulantes:`);
            for(tripulante of this.tripulacion) {
                console.log(` - ${tripulante.nombre}`);
            }
        }

        if(this.pasajeros.length > 0) {
            console.log(`Pasajeros:`);
            for(pasajero of this.pasajeros) {
                console.log(` - ${pasajero.nombre}`);
            }
        }

    }

    public agregarTripulante(tripulante: Tripulante) {
        this.tripulacion.push(tripulante);
    }

    public agregarPasajero(pasajero: Pasajero) {
        this.pasajeros.push(pasajero);
    }

    private calcularPersonasABordo(): number {
        return (this.tripulacion.length + this.pasajeros.length);
    }

}