import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    selector: 'navbar',
    templateUrl: 'src/client/widgets/navbar/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {}
