import {Component} from '@angular/core';

@Component({
    selector: 'skills-kirk',
    templateUrl: 'src/client/app/skills/skills.component.html'
})

export class SkillsComponent {
    public basicSkills = [
        {
            name: 'HTML5',
            rating: 5
        },
        {
            name: 'CSS3',
            rating: 5
        },
        {
            name: 'Git',
            rating: 1
        },
        {
            name: 'VanilaJs',
            rating: 1
        },
        {
            name: 'AngularJs 1.x',
            rating: 1
        },
        {
            name: 'NodeJs',
            rating: 1
        },
        {
            name: 'Python',
            rating: 1
        },
    ];
}
