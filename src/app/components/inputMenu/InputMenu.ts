import { Component } from '@angular/core';

@Component({
  selector: 'inputMenu',
  template: require('./InputMenu.html')
})

export class InputMenu {
  public text: string;
  public options: any;
  public inputs: any;


  // public $: any;
  /**
   * Creates an instance of InputMenu.
   * from this component you can mange menu of all availabole inputs 
   * @memberof InputMenu
   */
  constructor() {
    this.text = "Input Menu";
    this.options = {
      copy: function (el, source) {
        return source === document.querySelector('#menu')
      },
      accepts: function (el, target) {
        return target !== document.querySelector('#menu')
      },
      revertOnSpill: true,
    }


    /**
     * this var "input" is the main container of all inputs to be showen in 
     * menu as icon 
     * required data is [type , icon ] in menu .. you get it just in menu 
     */
    this.inputs = [{
      "type": "text",
      "name": "nametest",
      "id": "idname",
      "placeholder": "placeholder Text",
      "value": true,
      "label": "text Input ",
      "icon": " fa-font"
    },
    {
      "type": "number",
      "icon": "fa-calculator"
    },
    {
      "type": "email",
      "icon": "fa-envelope-o"
    }, {
      "type": "password",
      "icon": "fa-unlock-alt"
    }, {
      "type": "file",
      "icon": "fa-file"
    }, {
      "type": "checkbox",
      "icon": "fa-check-square-o"
    }, {
      "type": "radio",
      "icon": "fa-circle"
    }, {
      "type": "button",
      "value" : "button"
      // "icon": "fa-button"
    }, {
      "type": "submit",
      "value" : "submit"
      // "icon": "fa-submit"
    },
    {
      "type": "color",
      "icon": "fa-paint-brush"
    },
    {
      "type": "range",
      "icon": "fa-arrows-h"
    },
    {
      "type": "search",
      "icon": "fa-search"
    },
    {
      "type": "reset",
      // "icon": "fa-button"
      "value": "reset"
    },
    {
      "type": "select",
      "icon": "fa-select",
      "options": ["one", "two", "three"],
      "selected" : 1
    },
    {
      "type": "textarea",
      "icon": "fa-align-left"
    }]

  }
}
