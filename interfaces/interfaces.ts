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