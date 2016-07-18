import {Component} from '@angular/core';

@Component({
    selector: 'contact-kirk',
    template: require('./contact.component.html'),
    styles: [require('./contact.component.css')]
})

export class ContactComponent {
    public contact = 'kirklbyers@gmail.com';
}
