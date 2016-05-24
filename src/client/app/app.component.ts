import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectsComponent} from './projects/projects.component';
import {SkillsComponent} from './skills/skills.component';
import {CatanDiceComponent} from './catan_dice/catan_dice.component';

import {NavbarComponent} from '../widgets/navbar/navbar.component';

@Component({
    selector: 'my-app',
    templateUrl:`src/client/app/app.component.html`,
    directives:[ROUTER_DIRECTIVES, NavbarComponent],
    providers:[ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path:'/about',
        name: 'About',
        component: AboutComponent,
        useAsDefault: true
    },
    {
        path:'/contact',
        name: 'Contact',
        component: ContactComponent
    },
    {
        path:'/projects',
        name: 'Projects',
        component: ProjectsComponent
    },
    {
        path:'/skills',
        name: 'Skills',
        component: SkillsComponent
    },
    {
        path: '/catan',
        name: 'Catan',
        component: CatanDiceComponent
    }
])

export class AppComponent {
    title = 'My First App';
}
