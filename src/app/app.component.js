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
var router_deprecated_1 = require('@angular/router-deprecated');
var about_component_1 = require('./about/about.component');
var contact_component_1 = require('./contact/contact.component');
var projects_component_1 = require('./projects/projects.component');
var skills_component_1 = require('./skills/skills.component');
var catan_dice_component_1 = require('./catan_dice/catan_dice.component');
var navbar_component_1 = require('../widgets/navbar/navbar.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Kirk Byers';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: require('./app.component.html'),
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, navbar_component_1.NavbarComponent],
            providers: [router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/about',
                name: 'About',
                component: about_component_1.AboutComponent,
                useAsDefault: true
            },
            {
                path: '/contact',
                name: 'Contact',
                component: contact_component_1.ContactComponent
            },
            {
                path: '/projects',
                name: 'Projects',
                component: projects_component_1.ProjectsComponent
            },
            {
                path: '/skills',
                name: 'Skills',
                component: skills_component_1.SkillsComponent
            },
            {
                path: '/catan',
                name: 'Catan',
                component: catan_dice_component_1.CatanDiceComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map