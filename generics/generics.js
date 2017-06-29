function identity(arg) {
    return arg;
}
function identityG(arg) {
    return arg;
}
console.log(identity('hola'));
console.log(identityG('Chau'));
console.log(identityG(10));
console.log(identityG({ saludo: 'hola' }));
function loggingIdentity(arg) {
    // console.log(arg.length);  Error: T doesn't have .length
    return arg;
}
function loggingIdentityT(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function loggingIdentityTT(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function identityTTT(arg) {
    return arg;
}
function identityTTTT(arg) {
    return arg;
}
var myIdentity = identityTTTT;
console.log(myIdentity(10));
var myIdentity2 = identityTTTT;
console.log(myIdentity2('el 10'));
/*
generics con class
*/
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(10, 50));
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
