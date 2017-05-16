import {GridComponent} from './GridComponent';
import {TestBed, async} from '@angular/core/testing';

describe('gridComponent component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [GridComponent]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(GridComponent);
    fixture.detectChanges();
  });
}); 
