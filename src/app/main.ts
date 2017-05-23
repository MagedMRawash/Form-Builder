import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./main.html')
})
export class mainComponent {
  public main: object;

  constructor() {
    this.main = {value:'Hello World!',type:'number'};
  }
}
