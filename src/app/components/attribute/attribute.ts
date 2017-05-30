import { Component, Input, OnInit, DoCheck, AfterContentChecked, AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
declare let _: any;

@Component({
  selector: 'attribute',
  template: require('./attribute.html')
})

export class Attribute {

  @Input() InputAttrs: any;
  public AttArray: any;
  public previousInputSettings: any;
  private oldInputAttrs: any;

  constructor() {
  }

  ngOnInit() {
    this.createInputforAllAttrs()
    // console.log('from attr thuhj', this.AttArray);

  }

  ngDoCheck(changes: SimpleChanges) {
    let mainInput = this.InputAttrs
    if (!(_.isEqual(mainInput, this.oldInputAttrs))) {
      this.createInputforAllAttrs()
      this.oldInputAttrs = Object.assign({}, mainInput)
    }
  }


  /**
  * @function {AttrChanges}
  * @return {type} {   this function fires on any changes accure in inputs of attrs \n Coution : we cant add save code here If So it will be small infinit loop {{ change then save then change what we saved then save it again }} .. }
  */
  AttrChanges(event) {
    // console.log('from attr', event);
  }

  /**
  * @function {saveChanges}
  * @return {type} { this function saves data after click it }
  */
  saveChanges() {
    for (let i in this.AttArray) {
      this.InputAttrs[this.AttArray[i].label] = this.AttArray[i].value;
    }
  }

  /**
  * @function {createInputforAllAttrs}
  * @return {type} {dynamically create input for each Attr. in input Object to help us change its value easly }
  */
  createInputforAllAttrs() {
    // inputSettings changed
    // some logic here to react to the change
    this.AttArray = Object.keys(this.InputAttrs).map(function (key) {
      return {
        "type": "text",
        "label": key,
        "value": this.InputAttrs[key],
      };
    }.bind(this));
  }
}
