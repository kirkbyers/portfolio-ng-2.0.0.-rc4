import {Component} from '@angular/core';

@Component({
    selector:'projects-kirk',
    template: require('./projects.component.html'),
    styles: [require('./projects.component.css')]
})

export class ProjectsComponent {
    public projects = ['Project 1', 'Project 2'];
}
