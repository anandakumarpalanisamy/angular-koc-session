import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-radio-ctrl',
  templateUrl: './reactive-radio-ctrl.component.html',
  styleUrls: ['./reactive-radio-ctrl.component.css']
})
export class ReactiveRadioCtrlComponent implements OnInit {

  genderForm;

  constructor() {
    this.genderForm = new FormGroup({
      'gender': new FormControl('male')
    });
  }

  ngOnInit() {
  }

}
