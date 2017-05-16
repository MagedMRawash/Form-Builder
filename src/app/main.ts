import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./main.html')
})
export class mainComponent {
  public main: string;

  constructor() {
    this.main = 'Hello World!';
  }
}
