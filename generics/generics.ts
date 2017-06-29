function identity(arg: any): any {
    return arg;
}


function identityG<T>(arg: T): T {
    return arg;
}

console.log(identity('hola'));
console.log(identityG('Chau'));
console.log(identityG(10));
console.log(identityG({saludo: 'hola'}));


function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length);  Error: T doesn't have .length
    return arg;
}

function loggingIdentityT<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

function loggingIdentityTT<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

function identityTTT<T>(arg: T): T {
    return arg;
}

/*
generics con interfaces
*/

interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identityTTTT<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identityTTTT;
console.log(myIdentity(10));
let myIdentity2: GenericIdentityFn<string> = identityTTTT;
console.log(myIdentity2('el 10'));

/*
generics con class
*/

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
console.log(myGenericNumber.add(10, 50));

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));