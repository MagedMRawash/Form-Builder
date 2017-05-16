import { Component, Input, OnInit, ElementRef, Renderer } from '@angular/core';

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
export class InputComponent implements OnInit {
  private nativeElement: Node;

  @Input() input: any;

  /**
  * @function {InputComponent constructor }
  * @param  {this} private _elRef: ElementRef { equaly to this element }
  * @return {class} {InputComponent class}
  */
  constructor(private renderer: Renderer, private _elRef: ElementRef) {

    // console.log( _elRef.nativeElement)
    // console.log( renderer )


  }

  removeEl(g)
  { console.log(g) }
  
  ngOnInit() {
    // console.log(this.inputs)
  }

}
