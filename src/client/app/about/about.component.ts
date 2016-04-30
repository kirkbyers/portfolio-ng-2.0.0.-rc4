import {Component} from 'angular2/core';

@Component({
    selector: 'about-me',
    template: '<p>This is the about page</p>',
})

export class AboutComponent {
    public name = 'Kirk';
}
