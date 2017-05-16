import {InputMenu} from './InputMenu';
import {TestBed, async} from '@angular/core/testing';

describe('inputMenu component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [InputMenu]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(InputMenu);
    fixture.detectChanges();
  });
});

// /////  check list 
// i have to chech if all inputs has its required info like {
//   "type": "text",
//   "name": "nametest",
//   "id": "idname",
// }