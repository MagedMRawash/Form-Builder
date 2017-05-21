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
  // public attrs: object;

  constructor() {
    this.form = {
      "action": "page.html"
      , "method": "post"
      , "grids": [{
        "x": 0,
        "y": 0,
        "width": 5,
        "height": 1,
        "inputs": [{
          "type": "text",
          "name": "nametest",
          "label": "label text ",
          "value": "text"
        }]
      }, {
        "x": 5,
        "y": 0,
        "width": 7,
        "height": 1,
        "inputs": [{
          "type": "text",
          "name": "nametest",
          "label": "label text "
        }]
      }
      ]
    }

  }
  formData() {
    console.log(this.form)
    // this.form["grids"].forEach(element => {
    //   console.log(element)
    // });
  }

}
