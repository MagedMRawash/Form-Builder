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
  "action": "page.html",
  "method": "post",
  "rows": [
    [
      {
        "classes": [
          "col-md-12",
          "col-xs-12"
        ],
        "inputs": [
          {
            "type": "text",
            "name": "nametest",
            "label": "label text ",
            "value": "text",
            "validation": "numeric"
          }
        ]
      },
      {
        "classes": [
          "col-md-12",
          "col-xs-12"
        ],
        "inputs": [
          {
            "type": "text",
            "name": "nametest",
            "label": "label text ",
            "value": "text",
            "validation": "numeric"
          }
        ]
      }
    ],
    [
      {
        "classes": [
          "col-md-12",
          "col-xs-12"
        ],
        "inputs": [
          {
            "type": "text",
            "name": "nametest",
            "label": "label text ",
            "value": "texttwo"
          }
        ]
      }
    ]
  ]
}

  }
  formData() {
    console.log(this.form)
  }

}
