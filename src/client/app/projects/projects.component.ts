import {Component} from 'angular2/core';

@Component({
    selector:'projects-kirk',
    template: '<p>This is the projects page.</p>'
})

export class ProjectsComponent {
    public projects = ['Project 1', 'Project 2', 'Project 3'];
}
