import { Nave } from './Nave';
import { NaveDefensa } from './NaveDefensa';

export class HalconMilenario extends Nave implements NaveDefensa {

    constructor() {
        super(
            'Halcon Milenario',
            34.75,
            25.61,
            8.27,
            6.050,
            2
        );
    }

    public prepararEscudos(): void {
        console.log(`${this.nombre}: Escudos listos.`);
    }

    public defenderse(): void {
        console.log(`${this.nombre}: Refuerza sus escudos.`);
    }

    desplazarse(): void {
        console.log(`${this.nombre}: En movimiento...`);

        let that = this;
        this.desplazamiento = setInterval(function(){
            that.x += that.velocidad * 4;
            console.log(`Posición actual de la nave ${that.nombre} > x: ${that.x}`)

            if(that.x > 100) {
                that.detenerse();
                that.destruir();
            }
            else {
                that.defenderse();
            }
        }, 500);
    }

    detenerse(): void {
        clearInterval(this.desplazamiento);
    }

}