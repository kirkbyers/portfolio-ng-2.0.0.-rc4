import {Component} from '@angular/core';

@Component({
    selector: 'skills-kirk',
    template: require('./skills.component.html')
})

export class SkillsComponent {
    public skills = [
        {
            name: 'HTML5',
            rating: 9,
            class: 'is-success'
        },
        {
            name: 'CSS3',
            rating: 8,
            class: 'is-success'
        },
        {
            name: 'VanillaJs',
            rating: 5,
            class: 'is-success'
        },
        {
            name: 'AngularJs 1.x',
            rating: 7,
            class: 'is-info'
        },
        {
            name: 'jQuery',
            rating: 6,
            class: 'is-info'
        },
        {
            name: 'Git',
            rating: 7,
            class: 'is-warning'
        },
        {
            name: 'Gulp',
            rating: 5,
            class: 'is-warning'
        },
        {
            name: 'NodeJs',
            rating: 3,
            class: 'is-danger'
        },
        {
            name: 'Python',
            rating: 4,
            class: 'is-danger'
        },
    ];
}
