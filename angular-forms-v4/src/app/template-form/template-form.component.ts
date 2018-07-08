import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  submitted = false;

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Change'];

  hero = new Hero(1, 'Dr. IQ', null, 'CheakStreet');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.hero = new Hero(Math.floor(Math.random() * (10) + 1), '', '');
  }

  get diagnostic() {
    return JSON.stringify(this.hero);
  }

  onChange() {}

  showFormControls(form: any) {
    return form && form.controls['name']
     && form.controls['name'].value;
  }
}

