import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl:`src/client/app/app.component.html`,
    directives:[ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS]
})

@RouteConfig([])

export class AppComponent {
    title = 'My First App';
}
