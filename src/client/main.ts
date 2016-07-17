import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app/app.component';
import {enableProdMode} from '@angular/core';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent);
