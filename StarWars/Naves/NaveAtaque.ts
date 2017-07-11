import { Nave } from './Nave';

export interface NaveAtaque {

    atacar(nave: Nave): void;
    disparar(): void;

}