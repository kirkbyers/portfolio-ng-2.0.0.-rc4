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
var util_service_1 = require('./util/util.service');
var CatanDiceComponent = (function () {
    function CatanDiceComponent() {
        this.dice = [new util_service_1.Die, new util_service_1.Die, new util_service_1.Die, new util_service_1.Die, new util_service_1.Die, new util_service_1.Die];
        this.turn = new util_service_1.Turn;
    }
    CatanDiceComponent.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.dice; _i < _a.length; _i++) {
            var die = _a[_i];
            die.creatDie(6);
        }
    };
    CatanDiceComponent.prototype.rollTurn = function () {
        if (this.turn.totalRolls < 2) {
            for (var _i = 0, _a = this.dice; _i < _a.length; _i++) {
                var die = _a[_i];
                if (!die.keep) {
                    die.roll();
                }
            }
            this.turn.totalRolls++;
        }
    };
    CatanDiceComponent.prototype.endTurn = function () {
        this.turn = new util_service_1.Turn;
        for (var _i = 0, _a = this.dice; _i < _a.length; _i++) {
            var die = _a[_i];
            die.creatDie(6);
        }
    };
    CatanDiceComponent = __decorate([
        core_1.Component({
            selector: 'catan-dice',
            templateUrl: 'src/client/app/catan_dice/catan_dice.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CatanDiceComponent);
    return CatanDiceComponent;
}());
exports.CatanDiceComponent = CatanDiceComponent;
//# sourceMappingURL=catan_dice.component.js.map