// interface es una palabra reservada =) 
interface Conf {
    nombre : string;
    lugar: string;
    hora: {
        inicio: number;
        fin: number;
    };
    anio: number;
    sucedio?: boolean; // <= el signo de pregunta lo hace optativo
}

let netConf: Conf = {
    nombre: 'NetConfAR',
    lugar: 'Facultad Cs',
    hora: {
        inicio: 10,
        fin: 18
    },
    anio: 2017
}

let netConf2: Conf = {
    nombre: 'NetConfUI',
    lugar: 'Facultad Cs',
    hora: {
        inicio: 10,
        fin: 18
    },
    anio: 2016,
    sucedio: true
}

// con error
/*
let netConf3: Conf = {
    lugar: 'Facultad Cs',
    hora: {
        inicio: 10,
        fin: 18
    },
    anio: 2016,
    sucedio: true
}
*/

console.log(netConf);
console.log(netConf2);

function print(conferencia: Conf): void {
    console.log(conferencia);
}

// error
// print('hola'); => [ts] Argument of type '"hola"' is not assignable to parameter of type 'Conf'.

print(netConf);

// readOnly

interface ConfReadOnly {
    readonly lat: number;
    readonly long: number;
    latLong: string;
}

let confReadOnly : ConfReadOnly;
// confReadOnly.lat = 10;  => error [ts] Cannot assign to 'lat' because it is a constant or a read-only property.
confReadOnly.latLong = '100,100'; // => al ser un string not readonly se puede modificar tranquilamente


// Excess Property Checks

interface ConfCheckProperty{
    lat: number;
    long: number;
}

let confCheckProperty: ConfCheckProperty;
// error
// confCheckProperty = { lat: 100, long: 100, color: red}; => [ts]
// Type '{ lat: number; long: number; color: any; }' is not assignable to type 'ConfCheckProperty'.
//  Object literal may only specify known properties, and 'color' does not exist in type 'ConfCheckProperty'.



// INDEXABLE TYPES

interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Marley"];
let myStr: string = myArray[0];

interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}

// Error: indexing with a 'string' will sometimes get you a Dog!
/*
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}
[ts] Numeric index type 'Animal' is not assignable to string index type 'Dog'.
*/