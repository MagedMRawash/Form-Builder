import {
  Component, EventEmitter, AfterViewInit, OnInit, DoCheck, Input, Output, AfterViewChecked, ElementRef, ViewChildren, Renderer2
}
  from '@angular/core';
import {
  DragulaService
}
  from 'ng2-dragula/ng2-dragula'; @
    Component({
      selector: 'gridComponent',
      template: require('./GridComponent.html'),
      // outputs: ['gridchanges']
    })
export class GridComponent {
  @
  Input('grids') rows: any; @
  Output() gridchanges: EventEmitter<any> = new EventEmitter(); @
  ViewChildren('gridColRef') gridColRef; @
  ViewChildren('gridRowRef') gridRowRef;
  // @ViewChild('dragPart') el:ElementRef;
  private nativeElement: Node;
  private observer: any;
  public options: any;
  public dropedData: any;
  private dragging: any = {
    isDraging: false
  };
  constructor(private rd: Renderer2, private dragulaService: DragulaService, private _elRef: ElementRef) {
    dragulaService.drop.subscribe((value) => {
      // this.dropedData = value;
    });
    dragulaService.setOptions('col-bag', {
      moves: (el, container, handle) => {
        return MoveAction(el, container, handle, 'dragCol', 'col-handle')
      },
      copy: copy,
      accepts: accepts,
      revertOnSpill: true,
      removeOnSpill: true
    });
    dragulaService.setOptions('row-bag', {
      moves: (el, container, handle) => {
        return MoveAction(el, container, handle, 'dragRow', 'row-handle')
      }, copy: copy,
      accepts: accepts,
      revertOnSpill: true,
      removeOnSpill: true
    });

    function copy(el, source) {
      let result = false;
      let allData = document.querySelectorAll('#inputMenu, #colMenu, #rowMenu')
      for (let index = 0; index < allData.length; index++) {
        if (source === allData[index]) {
          result = true
        }
      }
      return result
    }
    function accepts(el, target) {
      let result = false;
      let allData = document.querySelectorAll('#inputMenu, #colMenu, #rowMenu')
      for (let index = 0; index < allData.length; index++) {
        // console.log(target !== allData[index]);
        if (target === allData[index]) {
          result = true
        }
      }
      return !result
    }

    function MoveAction(el, container, handle, dragContainer, handleClass) {
      // console.log(container.classList.contains('dragCol'))
      if (container.classList.contains(dragContainer)) {
        return handle.classList.contains(handleClass);
      } else {
        return true
      }
    }
  }
  updateCahnges(event) {
    // console.log(event)
  }
  StartDragToResize(gridColRef, gridRowRef) {
    this.dragging.startColWidth = gridColRef.offsetWidth;
    this.dragging.rowWidth = gridRowRef.offsetWidth;
    this.dragging.columnWidthPerRow = (gridRowRef.offsetWidth / 12);
    this.dragging.DeltaDrag = {
      dragX: 0,
      dragY: 0
    }
    this.dragging.start = {
      dragX: (<DragEvent>event).pageX,
      dragY: (<DragEvent>event).pageY
    }
  }
  DragToResize(gridColRef, gridRowRef) {
    this.dragging.DeltaDrag = {
      dragX: (<DragEvent>event).pageX != 0 ? ((<DragEvent>event).pageX - this.dragging.start.dragX) : this.dragging.DeltaDrag.dragX,
      dragY: (<DragEvent>event).pageY != 0 ? ((<DragEvent>event).pageY - this.dragging.start.dragY) : this.dragging.DeltaDrag.dragY
    }
    // console.log(this.dragging.start.dragX + ' ffff  ' + this.dragging.DeltaDrag.dragX);
    let widthNewChanges = this.dragging.startColWidth + this.dragging.DeltaDrag.dragX;
    if (this.dragging.columnWidthPerRow <= widthNewChanges && widthNewChanges <= this.dragging.rowWidth) {
      gridColRef.style.width = widthNewChanges + 'px'
    }
  }
  endDragToResize(col, gridColRef) {
    col.classes.md.num = Math.abs(col.classes.md.num + Math.round(this.dragging.DeltaDrag.dragX / this.dragging.columnWidthPerRow))
    let num = parseInt(col.classes.md.num)
    if (0 >= num) {
      col.classes.md.num = 1
    } else if (12 <= num) {
      col.classes.md.num = 12
    } else {
    }
    gridColRef.removeAttribute("style");
  }
}