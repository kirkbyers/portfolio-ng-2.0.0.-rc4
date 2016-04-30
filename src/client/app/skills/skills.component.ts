import {Component} from 'angular2/core';

@Component({
    selector: 'skills-kirk',
    template: '<p>This is the skills page.</p>'
})

export class SkillsComponent {
    public skills = [
        {
        name: 'skill 1',
        rating: 5
        },
        {
        name: 'skill 2',
        rating: 5
        },
        {
        name: 'skill 3',
        rating: 1
        },
        {
        name: 'skill 4',
        rating: 2
        }
    ];
}
