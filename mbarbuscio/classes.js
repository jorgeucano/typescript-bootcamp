"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var decorator_1 = require("./decorator");
var Classes;
(function (Classes) {
    var Ship = (function () {
        function Ship(pilot, engine, maxSpeed) {
            var _this = this;
            this.accelerate = function () {
                _this._accelerate(1.1);
            };
            this._accelerate = function (multiplier) {
                var i = setInterval(function () {
                    if (_this.speed < _this.maxSpeed) {
                        _this.speed = (_this.speed + 1) * multiplier;
                        console.log(_this.pilot + " is flying at " + _this.speed + " kph");
                    }
                    else {
                        console.log(_this.pilot + " is flying at max speed");
                        clearInterval(i);
                    }
                }, 500);
            };
            this.pilot = pilot;
            this.engine = engine;
            this.maxSpeed = maxSpeed;
            this.speed = 0;
        }
        return Ship;
    }());
    Classes.Ship = Ship;
    var Xwing = (function (_super) {
        __extends(Xwing, _super);
        function Xwing(pilot, astromech) {
            var _this = _super.call(this, pilot, '4L4 Fusial Thrust Engine', 1050) || this;
            _this.primaryWeapon = 'Ion Cannon';
            _this.astromech = { model: astromech };
            _this.hyperdrive = true;
            return _this;
        }
        return Xwing;
    }(Ship));
    Classes.Xwing = Xwing;
    var T65Xwing = (function (_super) {
        __extends(T65Xwing, _super);
        function T65Xwing(pilot, astromech) {
            var _this = _super.call(this, pilot, astromech) || this;
            _this.accelerate = function () {
                _this._accelerate(1.25);
            };
            return _this;
        }
        T65Xwing = __decorate([
            decorator_1.pilotReport
        ], T65Xwing);
        return T65Xwing;
    }(Xwing));
    Classes.T65Xwing = T65Xwing;
    var T70XWing = (function (_super) {
        __extends(T70XWing, _super);
        function T70XWing(pilot, astromech, title) {
            var _this = _super.call(this, pilot, astromech) || this;
            _this.accelerate = function () {
                _this._accelerate(1.4);
            };
            _this.engine = '5L5 Fusial Thrust Engine';
            _this.primaryWeapon = 'KX12 Laser Cannon';
            _this.secondaryWeapon = 'Proton Torpedoes';
            title ? _this.title = title : _this.title = 'none';
            return _this;
        }
        T70XWing = __decorate([
            decorator_1.pilotReport
        ], T70XWing);
        return T70XWing;
    }(Xwing));
    Classes.T70XWing = T70XWing;
})(Classes = exports.Classes || (exports.Classes = {}));
