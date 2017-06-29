import { log } from './log';
class MisFunciones {

    @log
    sumar(a:number, b:number) {
        return a + b;
    }

    @log
    restar(a:number, b:number) {
        return a - b;
    }
}

let funciones = new MisFunciones;

console.log(funciones.sumar(1,2));
console.log(funciones.restar(10,5));