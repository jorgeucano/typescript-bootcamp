// let tiene una vista local
var holaLet = "Hola como estas?";
// const no se puede modificar
var holaConst = "Hola como estas?";
// var tiene una vista global
var holaVar = "Hola Como estas?";
holaLet += 'Bien y vos?';
// holaConst += 'muy bien y vos';
// LET
function sumar() {
    var i = 0;
    var j = 0;
    while (i < 10) {
        i++;
        var j_1 = i++;
        console.log(j_1);
    }
    console.log(j);
}
sumar();
