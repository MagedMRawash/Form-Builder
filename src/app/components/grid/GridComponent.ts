import { Component, EventEmitter, AfterViewInit, OnInit, DoCheck, Input, Output, AfterViewChecked, ElementRef, ViewChildren } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'gridComponent',
  template: require('./GridComponent.html'),
  // outputs: ['gridchanges']
})

export class GridComponent {
  @Input('grids') rows: any;

  @Output() gridchanges: EventEmitter<any> = new EventEmitter();

  @ViewChildren('gridID') gridID;

  private nativeElement: Node;
  private observer: any;
  public options: any;
  public dropedData: any;
  public colOption: any;
  constructor(private dragulaService: DragulaService, private _elRef: ElementRef) {
    dragulaService.drop.subscribe((value) => {
      // this.dropedData = value;
    });

    // this.colOption = {
    //   moves: function (el, container, handle) {
    //     console.log(container.classList.contains('dragCol'))
    //     if (container.classList.contains('dragCol')) {
    //       return handle.classList.contains('col-handle');
    //     } else {
    //       return true
    //     }
    //   }
    // }

    dragulaService.setOptions('col-bag', {
      moves: (el, container, handle) => {
        return MoveAction(el, container, handle, 'dragCol', 'col-handle')
      }
    });

    dragulaService.setOptions('row-bag', {
      moves: (el, container, handle) => {
        return MoveAction(el, container, handle, 'dragRow', 'row-handle')
      }
    });


    function MoveAction(el, container, handle, dragContainer, handleClass) {
      // console.log(container.classList.contains('dragCol'))
      if (container.classList.contains(dragContainer)) {
        return handle.classList.contains(handleClass);
      }
    }

  }



  updateCahnges(event) {
    // console.log(event)
  }

}
