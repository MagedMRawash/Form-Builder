import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
@Component({
  selector: 'inputMenu',
  template: require('./InputMenu.html')
})
export class InputMenu {
  public text: string;
  public options: any;
  public inputs: any;
  public gridsData: any;
  public gridsOptions: any;
  public rowsData: any;
	/**
	 * Creates an instance of InputMenu.
	 * from this component you can mange menu of all availabole inputs 
	 * @memberof InputMenu
	 */
  constructor(private dragulaService: DragulaService) {
    // NodeList.prototype.forEach = Array.prototype.forEach;
    this.text = "Input Menu";
    this.options = {
      copy: function (el, source) {
        let result = false;
        let allData = document.querySelectorAll('#inputMenu, #colMenu, #rowMenu')
        for (let index = 0; index < allData.length; index++) {
          if (source === allData[index]) {
            result = true
          }
        }
        return result
      },
      accepts: function (el, target) {
        let result = false;
        let allData = document.querySelectorAll('#inputMenu, #colMenu, #rowMenu')
        for (let index = 0; index < allData.length; index++) {
          // console.log(target !== allData[index]);
          if (target === allData[index]) {
            result = true
          }
        }
        return !result
      },
      revertOnSpill: true,
      removeOnSpill: function (o, t, th) {
        console.log('o', o)
        console.log('t', t)
        console.log('th', th)
      }
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
    }, {
      "type": "number",
      "icon": "fa-calculator"
    }, {
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
      "value": "button"
      // "icon": "fa-button"
    }, {
      "type": "submit",
      "value": "submit"
      // "icon": "fa-submit"
    }, {
      "type": "color",
      "icon": "fa-paint-brush"
    }, {
      "type": "range",
      "icon": "fa-arrows-h"
    }, {
      "type": "search",
      "icon": "fa-search"
    }, {
      "type": "reset",
      // "icon": "fa-button"
      "value": "reset"
    }, {
      "type": "select",
      "icon": "fa-select",
      "options": ["one", "two", "three"],
      "selected": 1
    }, {
      "type": "textarea",
      "icon": "fa-align-left"
    }]
    this.gridsData = [{
      "classes": {
        "md": {
          "name": "col-md-",
          "num": 12
        },
        "xs": {
          "name": "col-xs-",
          "num": 12
        }
      },
      "inputs": [{
        "type": "text",
        "name": "nametest",
        "label": "label text ",
        "value": "text",
      }]
    }]
    this.rowsData =
      [[{
        "classes": {
          "md": {
            "name": "col-md-",
            "num": 12
          },
          "xs": {
            "name": "col-xs-",
            "num": 12
          }
        },
        "inputs": [{
          "type": "text",
          "name": "nametest",
          "label": "label text ",
          "value": "text",
        }]
      }]]

    //        this.inputs.map(item=>{
    //   item.inputs= []
    //   return item 
    // })
  }
}