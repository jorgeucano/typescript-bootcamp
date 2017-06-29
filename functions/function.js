// funccion comun
function suma(x, y) {
    return x + y;
}
// funccion anonima
var sumaAnonima = function (x, y) { return x + y; };
// mezclando entre parametros globales y locales
var z = 100;
function sumarAZ(x, y) {
    return x + y + this.z;
}
// con salida de types
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) { return x + y; };
// suma con types
var myAddTypes = function (x, y) { return x + y; };
// opcionales
function setNombre(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
console.log(setNombre("Jorge"));
console.log(setNombre("Jorge", "Cano"));
// parametros opcionales con valor por default
function setNombreDefault(firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    return firstName + " " + lastName;
}
console.log(setNombreDefault('Jorge', 'Cano'));
console.log(setNombreDefault(undefined, "Adams"));
// REST PARAMETER
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
