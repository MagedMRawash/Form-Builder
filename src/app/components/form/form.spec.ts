import {FormComponent} from './form';
import {TestBed, async} from '@angular/core/testing';

describe('form component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [FormComponent]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
  });
});
