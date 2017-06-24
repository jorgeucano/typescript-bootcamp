// let tiene una vista local
let holaLet: string = `Hola como estas?`;
// const no se puede modificar
const holaConst: string = `Hola como estas?`;
// var tiene una vista global
var holaVar:string = `Hola Como estas?`;

holaLet += 'Bien y vos?';
// holaConst += 'muy bien y vos';


// LET
function sumar (){
    let i = 0;
    let j = 0;
    while (i < 10) {
        i++;
        let j = i++;
        console.log(j);
    }
    console.log(j);
}

sumar();