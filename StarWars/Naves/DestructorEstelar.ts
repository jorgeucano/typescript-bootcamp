import { Nave } from './Nave';
import { NaveAtaque } from './NaveAtaque';

export class DestructorEstelar extends Nave implements NaveAtaque {

    private enemigo: Nave;

    constructor() {
        super(
            'Destructor Estelar Imperial I',
            1600,
            1000,
            500,
            2.300,
            0,
            true
        );
    }

    public atacar(nave: Nave): void {
        console.log(`${this.nombre}: Armas listas.`);
        this.enemigo = nave;
    }

    public disparar(): void {
        if(!this.enemigo.destruida) {
            console.log(`${this.nombre}: Pium pium!`);
        }
    }

    desplazarse(): void {
        console.log(`${this.nombre}: En movimiento...`);

        let that = this;
        this.desplazamiento = setInterval(function(){
            that.x += that.velocidad * 4;
            console.log(`Posición actual de la nave ${that.nombre} > x: ${that.x}`)

            if(that.x > 100) {
                that.detenerse();
            }
            else {
                that.disparar();
            }
        }, 500);
    }

    detenerse(): void {
        clearInterval(this.desplazamiento);
        console.log(`Posición final de la nave ${this.nombre} > x: ${this.x}`);
    }

}