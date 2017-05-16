import { Component, AfterViewInit, OnInit, DoCheck, Input, AfterViewChecked, ElementRef } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

declare var jQuery: any;

@Component({
  selector: 'gridComponent',
  template: require('./GridComponent.html')
})

export class GridComponent implements AfterViewInit {
  @Input()
  grids: any;
  // dragulaModel: any;

  private nativeElement: Node;

  public gridAdded: any;
  public options: any;
  public dropedData: any;

  constructor(private dragulaService: DragulaService, private _elRef: ElementRef) {
    dragulaService.drop.subscribe((value) => {
      this.dropedData = value;
      this.gridAdded = "dData";
    });
  }

  createnewGrid(e) {
    // e.preventDefault()
    this.grids.push({
      "x": 1000,
      "y": 1000,
      "w": 12,
      "h": 1,
      "inputs": [{
        "type": "text",
        "name": "nametest",
        "label": "label text "
      }]
    })
    this.gridAdded = "CRG";
  }
  // ngDoCheck() {

  // }

  removeWidget(el, gridindx) {
    console.log(el + gridindx)
    this.grids.splice(gridindx, 1)
    let grid = jQuery('.grid-stack').data('gridstack');
    let gr = grid.removeWidget(document.querySelector('#' + el));
  }

  ngAfterViewChecked() {
    if (this.gridAdded == "dData") {
      let container = jQuery(this.dropedData[2])
      let containerHeight = container["0"].clientHeight
      console.log(container)
      console.log(containerHeight)
      let grid = jQuery('.grid-stack').data('gridstack');
      console.log(grid.opts.cellHeight)
      console.log( Math.ceil(containerHeight / grid.opts.cellHeight) )
      grid.update(container.parent(), null, null, null, Math.ceil(containerHeight / grid.opts.cellHeight))

      this.gridAdded = "false";
    }

    // to add grid to gridstack object i have to run next code to take new added html tags to grid Object  
    if (this.gridAdded == "CRG") {
      let grid = jQuery('.grid-stack').data('gridstack');
      let gr = grid.makeWidget(document.querySelector('.grid-stack-item:last-child'));
      // console.log(gr)
      this.gridAdded = "false";
    }
  }

  ngAfterViewInit() {
    // this line related to GridComponent put i added it into inputComponent to be sure that all tags are currectlly loaded to view 
    var options = {
      acceptWidgets: true,
      cellHeight: 70,
      verticalMargin: 10,
      alwaysShowResizeHandle: true,
      removeOnSpill: true
    };

    jQuery('.grid-stack').gridstack(options);
  }

  ngOnInit() {
  }
}
