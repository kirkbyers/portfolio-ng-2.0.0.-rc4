import {Component} from '@angular/core';

@Component({
    selector: 'about-me',
    templateUrl: 'src/client/app/about/about.component.html',
    styleUrls: ['src/client/app/about/about.component.css']
})

export class AboutComponent {
    public name = 'Kirk';
}
