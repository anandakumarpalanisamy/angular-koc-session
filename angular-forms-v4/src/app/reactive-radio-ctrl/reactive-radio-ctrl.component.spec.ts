import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRadioCtrlComponent } from './reactive-radio-ctrl.component';

describe('ReactiveRadioCtrlComponent', () => {
  let component: ReactiveRadioCtrlComponent;
  let fixture: ComponentFixture<ReactiveRadioCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveRadioCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveRadioCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
