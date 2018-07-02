import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCheckboxCtrlComponent } from './reactive-checkbox-ctrl.component';

describe('ReactiveCheckboxCtrlComponent', () => {
  let component: ReactiveCheckboxCtrlComponent;
  let fixture: ComponentFixture<ReactiveCheckboxCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveCheckboxCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveCheckboxCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
