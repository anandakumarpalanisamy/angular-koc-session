import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name-directive';
import { TemplateRadioCtrlComponent } from './template-radio-ctrl/template-radio-ctrl.component';
import { ReactiveRadioCtrlComponent } from './reactive-radio-ctrl/reactive-radio-ctrl.component';
import { ReactiveCheckboxCtrlComponent } from './reactive-checkbox-ctrl/reactive-checkbox-ctrl.component';
import { TemplateCheckboxCtrlComponent } from './template-checkbox-ctrl/template-checkbox-ctrl.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ForbiddenValidatorDirective,
    TemplateRadioCtrlComponent,
    ReactiveRadioCtrlComponent,
    ReactiveCheckboxCtrlComponent,
    TemplateCheckboxCtrlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
