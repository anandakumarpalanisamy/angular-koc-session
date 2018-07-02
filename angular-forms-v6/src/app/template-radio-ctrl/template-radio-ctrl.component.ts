import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template-radio-ctrl',
  templateUrl: './template-radio-ctrl.component.html',
  styleUrls: ['./template-radio-ctrl.component.css']
})
export class TemplateRadioCtrlComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
    this.user = {
      name: '',
      gender: 'male'
    };
  }

}
