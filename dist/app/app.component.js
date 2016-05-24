System.register(['@angular/core', '@angular/router-deprecated', './about/about.component', './contact/contact.component', './projects/projects.component', './skills/skills.component', './catan_dice/catan_dice.component', '../widgets/navbar/navbar.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, about_component_1, contact_component_1, projects_component_1, skills_component_1, catan_dice_component_1, navbar_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (projects_component_1_1) {
                projects_component_1 = projects_component_1_1;
            },
            function (skills_component_1_1) {
                skills_component_1 = skills_component_1_1;
            },
            function (catan_dice_component_1_1) {
                catan_dice_component_1 = catan_dice_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'My First App';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "src/client/app/app.component.html",
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
            exports_1("AppComponent", AppComponent);
        }
    }
});