import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCheckboxCtrlComponent } from './template-checkbox-ctrl.component';

describe('TemplateCheckboxCtrlComponent', () => {
  let component: TemplateCheckboxCtrlComponent;
  let fixture: ComponentFixture<TemplateCheckboxCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCheckboxCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCheckboxCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
