import {Component} from '@angular/core';

@Component({
    selector: 'about-me',
    template: require('./about.component.html'),
    styles: [require('./about.component.css')]
})

export class AboutComponent {
    public name = 'Kirk';
}
