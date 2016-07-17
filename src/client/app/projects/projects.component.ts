import {Component} from '@angular/core';

@Component({
    selector:'projects-kirk',
    templateUrl: './src/client/app/projects/projects.component.html',
    styleUrls: ['./src/client/app/projects/projects.component.css']
})

export class ProjectsComponent {
    public projects = ['Project 1', 'Project 2'];
}
