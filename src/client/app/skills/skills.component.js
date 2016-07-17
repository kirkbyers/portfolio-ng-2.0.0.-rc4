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
var SkillsComponent = (function () {
    function SkillsComponent() {
        this.skills = [
            {
                name: 'HTML5',
                rating: 9,
                class: 'is-success'
            },
            {
                name: 'CSS3',
                rating: 8,
                class: 'is-success'
            },
            {
                name: 'VanillaJs',
                rating: 5,
                class: 'is-success'
            },
            {
                name: 'AngularJs 1.x',
                rating: 7,
                class: 'is-info'
            },
            {
                name: 'jQuery',
                rating: 6,
                class: 'is-info'
            },
            {
                name: 'Git',
                rating: 7,
                class: 'is-warning'
            },
            {
                name: 'Gulp',
                rating: 5,
                class: 'is-warning'
            },
            {
                name: 'NodeJs',
                rating: 3,
                class: 'is-danger'
            },
            {
                name: 'Python',
                rating: 4,
                class: 'is-danger'
            },
        ];
    }
    SkillsComponent = __decorate([
        core_1.Component({
            selector: 'skills-kirk',
            templateUrl: './src/client/app/skills/skills.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;
//# sourceMappingURL=skills.component.js.map