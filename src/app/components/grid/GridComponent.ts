import { Component, EventEmitter, AfterViewInit, OnInit, DoCheck, Input, Output, AfterViewChecked, ElementRef, ViewChildren } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

declare var jQuery: any;

@Component({
  selector: 'gridComponent',
  template: require('./GridComponent.html'),
  // outputs: ['gridchanges']
})

export class GridComponent implements AfterViewInit {
  @Input()
  grids: any;
  // dragulaModel: any;
  //  : EventEmitter<Array<any>>
  @Output() gridchanges: EventEmitter<any> = new EventEmitter();
  @ViewChildren('gridID') gridID;


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

    // var grid = $('.grid-stack').data('gridstack');
    // let cl: any = document.querySelector("#grid0").cloneNode(true)
    // cl.removeAttribute("id")
    // console.log(cl)
    // grid.addWidget(cl, 1000, 1000, 3, 2, true, null, null, null, null, "grid" + this.grids.length);


    this.grids.push({
      // "x": 8000,
      // "y": 1000,
      "width": 12,
      "height": 2,
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
      this.gridID._results.forEach(el => {
          console.log(el)
        })
   
        
    // console.log(this.grids);

    if (this.gridAdded == "dData") {
      // let container = jQuery(this.dropedData[2])
      // let containerHeight = container["0"].clientHeight
      // console.log(container)
      // console.log(containerHeight)
      // let grid = jQuery('.grid-stack').data('gridstack');
      // console.log(grid.opts.cellHeight + grid.opts.verticalMargin)
      // console.log(Math.ceil(containerHeight / grid.opts.cellHeight + grid.opts.verticalMargin))
      // let cellHeight = Math.ceil(containerHeight / (grid.opts.cellHeight + grid.opts.verticalMargin));
      // grid.update(container.parent(), null, null, null, cellHeight)

      // this.gridAdded = "false";
    }

    // to add grid to gridstack object i have to run next code to take new added html tags to grid Object  
    if (this.gridAdded == "CRG") {
      let grid = jQuery('.grid-stack').data('gridstack');
      let gr = grid.makeWidget(document.querySelector('.grid-stack-item:last-child'));
      console.log(gr)
      this.gridAdded = "false";
    }
  }

  ngAfterViewInit() {
    // this line related to GridComponent put i added it into inputComponent to be sure that all tags are currectlly loaded to view 
    var options = {
      acceptWidgets: true,
      cellHeight: 60
      , verticalMargin: 10
      , alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      , removeOnSpill: true,
    };


    let gridObject = jQuery('.grid-stack')
    // gridObject.gridstack(options);
    console.log(this.gridID);

  }

}
