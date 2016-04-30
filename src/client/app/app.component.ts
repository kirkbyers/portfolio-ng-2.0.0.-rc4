import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectsComponent} from './projects/projects.component';
import {SkillsComponent} from './skills/skills.component';

@Component({
    selector: 'my-app',
    templateUrl:`src/client/app/app.component.html`,
    directives:[ROUTER_DIRECTIVES],
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
        name: 'Skils',
        component: SkillsComponent
    }
])

export class AppComponent {
    title = 'My First App';
}
