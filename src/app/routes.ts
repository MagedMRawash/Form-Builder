import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {mainComponent} from './main';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: mainComponent
  }
];

export const routing = RouterModule.forRoot(routes);
