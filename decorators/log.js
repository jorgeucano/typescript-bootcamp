"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("The method args are: " + JSON.stringify(args));
        var result = originalMethod.apply(this, args);
        console.log("The return value is: " + result);
        return result;
    };
    return descriptor;
}
exports.log = log;
