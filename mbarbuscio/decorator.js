"use strict";
exports.__esModule = true;
function pilotReport(target) {
    var original = target;
    function construct(constructor, args) {
        var c = function () {
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c();
    }
    var f = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args[0] + " flying " + original.name + " reporting");
        return original.apply(this, args);
    };
    f.prototype = original.prototype;
    return f;
}
exports.pilotReport = pilotReport;
