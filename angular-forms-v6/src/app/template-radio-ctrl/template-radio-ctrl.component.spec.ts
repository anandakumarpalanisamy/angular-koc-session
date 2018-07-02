import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRadioCtrlComponent } from './template-radio-ctrl.component';

describe('TemplateRadioCtrlComponent', () => {
  let component: TemplateRadioCtrlComponent;
  let fixture: ComponentFixture<TemplateRadioCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRadioCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRadioCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
