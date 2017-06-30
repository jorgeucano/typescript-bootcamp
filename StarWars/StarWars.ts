import { DestructorEstelar } from './Naves/DestructorEstelar';
import { HalconMilenario } from './Naves/HalconMilenario';
import { Tripulante } from './Personas/Tripulante';
import { Pasajero } from './Personas/Pasajero';

let destructorEstelar: DestructorEstelar = new DestructorEstelar();
let halconMilenario: HalconMilenario = new HalconMilenario();

let tripulante1: Tripulante = new Tripulante('Leandro');
let tripulante2: Tripulante = new Tripulante('Jorge');
let pasajero: Pasajero = new Pasajero('Darth Vader');
halconMilenario.agregarTripulante(tripulante1);
halconMilenario.agregarTripulante(tripulante2);
destructorEstelar.agregarPasajero(pasajero);

destructorEstelar.mostrarPersonasABordo();
halconMilenario.mostrarPersonasABordo();

destructorEstelar.despegar();
halconMilenario.despegar();

halconMilenario.prepararEscudos();
destructorEstelar.atacar(halconMilenario);
