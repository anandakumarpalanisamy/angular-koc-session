import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-checkbox-ctrl',
  templateUrl: './reactive-checkbox-ctrl.component.html',
  styleUrls: ['./reactive-checkbox-ctrl.component.css']
})
export class ReactiveCheckboxCtrlComponent implements OnInit {

  form;
  reactiveForm;

  _categories = [
    { title: 'Food', selected: false },
    { title: 'Cars', selected: true },
    { title: 'Shopping', selected: false }
  ];

  constructor(private fb: FormBuilder) {
    const defaultCategory = { title: 'Cars', selected: true};
    // Single Control form is created in a Verbose way
    this.form = new FormGroup({
      rememberLogin: new FormControl(false)
    });

    // Multi Control form is created in a short hand way usinbg Form Builder API
    this.reactiveForm = this.fb.group({
      categories: this.fb.array(this._categories.map(category => defaultCategory.title === category.title))
    });
  }

  get categories(): FormArray {
    return this.reactiveForm.get('categories') as FormArray;
  }

  ngOnInit() {
  }

}
