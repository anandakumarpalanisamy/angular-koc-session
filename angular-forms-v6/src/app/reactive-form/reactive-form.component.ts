import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name-directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  submitted = false;

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Change'];

  hero = new Hero(1, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  heroForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name,
                  [
                      Validators.required,
                      Validators.minLength(4),
                      forbiddenNameValidator(/bob/i)
                  ]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power, Validators.required)
    });

    this.onChanges();
  }

  onChanges(): void {
    this.heroForm.get('name').valueChanges.subscribe(val => {
        console.log(val);
    });
  }

  onSubmit() {
    this.submitted = true;
  }

  get name() {
    return this.heroForm.get('name').value;
  }

  get power() {
    return this.heroForm.get('power').value;
  }

  get alterEgo() {
    return this.heroForm.get('alterEgo').value;
  }

  get diagnostic() {
    return JSON.stringify(this.heroForm.value);
  }

}
