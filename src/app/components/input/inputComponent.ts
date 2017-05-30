import { Component, Input, Output, DoCheck, OnInit, OnChanges, ElementRef, Renderer, AfterViewChecked, EventEmitter } from '@angular/core';

declare let _: any;
@Component({
  selector: 'inputComponent',
  template: require('./inputComponent.html')
})

/**
 * 
 * 
 * @export
 * @class InputComponent
 * @implements {OnInit}
 */
export class InputComponent  {
  private nativeElement: Node;
  private oldInputValue: any;

  @Input() inputObj: any;
  @Output() InputChanges: EventEmitter<any> = new EventEmitter<any>();

  /**
  * @function {InputComponent constructor }
  * @param  {this} private _elRef: ElementRef { equaly to this element }
  * @return {class} {InputComponent class}
  */
  constructor(  private _elRef: ElementRef) {
  
  }

  removeEl(g)
  { console.log(g) }

  
  ngDoCheck() {
    if (!(_.isEqual(this.inputObj, this.oldInputValue))) {
      this.InputChanges.emit(this.inputObj)
      this.oldInputValue = Object.assign({}, this.inputObj)
    }
  }
}
