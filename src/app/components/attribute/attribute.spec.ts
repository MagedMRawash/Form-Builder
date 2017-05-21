import {Attribute} from './attribute';
import {TestBed, async} from '@angular/core/testing';

describe('attribute component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Attribute]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(Attribute);
    fixture.detectChanges();
  });
});
