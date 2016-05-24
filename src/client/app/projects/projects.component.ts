import {Component} from '@angular/core';

@Component({
    selector:'projects-kirk',
    template: '<p>This is the projects page.</p>'
})

export class ProjectsComponent {
    public projects = ['Project 1', 'Project 2', 'Project 3'];
}
