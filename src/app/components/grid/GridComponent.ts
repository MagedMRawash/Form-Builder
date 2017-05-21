import { Component, EventEmitter, AfterViewInit, OnInit, DoCheck, Input, Output, AfterViewChecked, ElementRef } from '@angular/core';
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


  ngOnInit() {
    this.gridchanges.emit(this.grids)

    var serializeWidgetMap = function (items) {
      console.log(items);
    };
    let gridObject = jQuery('.grid-stack')

    // Events
    // added(event, items)
    gridObject.on('added', function (event, items) {
      for (var i = 0; i < items.length; i++) {
        console.log('item added');
        console.log(items);
      }
    })
      // change(event, items)
      // Occurs when adding/removing widgets or existing widgets change their position/size
      .on('change', $.proxy(function (event, items) {
        // get all grid objects from grid lib. to main form object to update its data (grid data)
        // serializeWidgetMap(items); // get just the changes of data 
        let updatedGridstackGrids = gridObject.data('gridstack').grid.nodes

        updatedGridstackGrids.forEach((el, indx) => {
          // let currUpdatedGridstackGrids =

          delete el._id
          for (let pro in el) {

            if (typeof this.grids[indx] == "undefined") {
              this.grids[indx] = {
                "inputs": [{
                  "type": "text",
                  "name": "nametest",
                  "label": "label text "
                }]
              }
            }
            this.grids[indx][pro] = el[pro]
          }
          debugger

          // el.r = "5"
        })
        console.log(this.grids)
        console.log(updatedGridstackGrids)

        // updatedGridstackGrids.forEach(
        //   (obj) => {
        //     console.log(obj)
        //   }
        // )

      }, this))
      // disable(event)
      .on('disable', function (event) {
        var grid = event.target;
      })
      // dragstart(event, ui)
      .on('dragstart', function (event, ui) {
        var grid = this;
        var element = event.target;
      })
      // dragstop(event, ui)
      .on('dragstop', function (event, ui) {
        var grid = this;
        var element = event.target;
      })
      // enable(event)
      .on('enable', function (event) {
        var grid = event.target;
      })
      // removed(event, items)
      .on('removed', function (event, items) {
        for (var i = 0; i < items.length; i++) {
          console.log('item removed');
          console.log(items[i]);
        }
      })
      // resizestart(event, ui)
      .on('resizestart', function (event, ui) {
        var grid = this;
        var element = event.target;
        // console.log(event.target);

      })
      // gsresizestop(event, ui)
      .on('gsresizestop', function (event, elem) {
        var newHeight = $(elem).attr('data-gs-height');
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
    if (this.gridAdded == "dData") {
      let container = jQuery(this.dropedData[2])
      let containerHeight = container["0"].clientHeight
      console.log(container)
      console.log(containerHeight)
      let grid = jQuery('.grid-stack').data('gridstack');
      console.log(grid.opts.cellHeight + grid.opts.verticalMargin)
      console.log(Math.ceil(containerHeight / grid.opts.cellHeight + grid.opts.verticalMargin))
      let cellHeight = Math.ceil(containerHeight / (grid.opts.cellHeight + grid.opts.verticalMargin));
      grid.update(container.parent(), null, null, null, cellHeight)

      this.gridAdded = "false";
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
      cellHeight: 60,
      verticalMargin: 10,
      alwaysShowResizeHandle: true,
      removeOnSpill: true
    };


    let gridObject = jQuery('.grid-stack')
    gridObject.gridstack(options)
      ;

  }

}
