import { Component } from '@angular/core';
import { GridComponent } from '../grid/GridComponent';


@Component({
  selector: 'form-com',
  template: require('./form.html'),
})



/**
 * 
 * 
 * @export 
 * @class FormComponent
 */

export class FormComponent {
  
  public form: object;

  constructor() {
    this.form = {
      "action": "page.html"
      , "method": "post"
      , "grids": [{
        "x": 0,
        "y": 0,
        "w":5,
        "h": 1.5,
        "inputs": [{
          "type": "text", 
          "name": "nametest",
          "label" : "label text "
        }]
      }, {
        "x": 5,
        "y": 0,
        "w": 7,
        "h": 1,
        "inputs": [{
          "type": "text",
          "name": "nametest",
          "label" : "label text "
        }]
      }
      ]
    }


  }

}
