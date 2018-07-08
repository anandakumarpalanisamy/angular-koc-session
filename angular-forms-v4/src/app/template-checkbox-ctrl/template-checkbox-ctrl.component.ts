import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-checkbox-ctrl',
  templateUrl: './template-checkbox-ctrl.component.html',
  styleUrls: ['./template-checkbox-ctrl.component.css']
})
export class TemplateCheckboxCtrlComponent implements OnInit {

  rememberLogin = false;

  categories = [
    { title: 'Food', selected: true },
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


  checkControls(f2: NgForm) {
    console.log(f2.controls['Food']);
  }
}
