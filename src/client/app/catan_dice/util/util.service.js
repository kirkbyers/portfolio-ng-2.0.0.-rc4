"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Die = (function () {
    function Die() {
    }
    Die.prototype.creatDie = function (dieSize) {
        this.size = dieSize;
        this.value = Math.floor(Math.random() * (this.size - 1 + 1)) + 1;
        this.keep = false;
    };
    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * (this.size - 1 + 1)) + 1;
    };
    Die = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Die);
    return Die;
}());
exports.Die = Die;
var Turn = (function () {
    function Turn() {
        this.totalRolls = 0;
    }
    return Turn;
}());
exports.Turn = Turn;
//# sourceMappingURL=util.service.js.map