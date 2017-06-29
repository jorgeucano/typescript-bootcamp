// funccion comun
function suma(x, y) {
    return x + y;
}

// funccion anonima
let sumaAnonima = function(x, y) { return x+y; };

// mezclando entre parametros globales y locales
let z = 100;
function sumarAZ(x, y) {
    return x + y + this.z;
}


// con salida de types
function add(x: number, y: number): number {
    return x + y;
}
let myAdd = function(x: number, y: number): number { return x+y; };

// suma con types
let myAddTypes: (baseValue:number, increment:number) => number =
    function(x: number, y: number): number { return x + y; };


// opcionales

function setNombre(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}

console.log(setNombre("Jorge"));
console.log(setNombre("Jorge", "Cano"));

// parametros opcionales con valor por default
function setNombreDefault(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}
console.log(setNombreDefault('Jorge', 'Cano'));
console.log(setNombreDefault(undefined, "Adams"));


// REST PARAMETER
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);


/*
couples interfaces 

*/
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);