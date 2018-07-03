import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-checkbox-ctrl',
  templateUrl: './template-checkbox-ctrl.component.html',
  styleUrls: ['./template-checkbox-ctrl.component.css']
})
export class TemplateCheckboxCtrlComponent implements OnInit {

  rememberLogin = false;

  categories = [
    { title: 'Food', selected: false },
    { title: 'Cars', selected: true },
    { title: 'Shopping', selected: false }
  ];

  _selected = [];

  constructor() { }

  ngOnInit() {
  }

  get selected() {
    return this.categories.filter(c => c.selected);
  }

}
