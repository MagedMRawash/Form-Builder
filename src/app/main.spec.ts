import {mainComponent} from './main';
import {TestBed, async} from '@angular/core/testing';

describe('hello component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        mainComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render hello world', () => {
    const fixture = TestBed.createComponent(mainComponent);
    fixture.detectChanges();
    const hello = fixture.nativeElement;
    expect(hello.querySelector('h1').textContent).toBe('Hello World!');
  });
});
