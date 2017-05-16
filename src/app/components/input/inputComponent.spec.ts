import {InputComponent} from './inputComponent';
import {TestBed, async} from '@angular/core/testing';

describe('inputComponent component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [InputComponent]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(InputComponent);
    fixture.detectChanges();
  });
});
