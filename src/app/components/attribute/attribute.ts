import { Component, Input, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'attribute',
  template: require('./attribute.html')
})
export class Attribute {

  @Input() InputAttrs: any;
  public AttArray: any;

  // public attrInput: any;

  constructor() {
  }

  ngOnInit() {
    // console.log("this.AttArray")

    // var self = this;
    // let obj = self.InputAttrs;
    this.AttArray = Object.keys(this.InputAttrs).map(function (key) {

      // console.log(this)

      return {
        "type": "text",
        "label": key,
        "value": this.InputAttrs[key],
      };

    }.bind(this));
  }

  ngAfterContentChecked() {
    // console.log(this.AttArray)
    // console.log(self.AttArray)
    for (let i in this.AttArray) {
      this.InputAttrs[this.AttArray[i].label] = this.AttArray[i].value;
    }
  }

}
