import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-ng-container-example',
  templateUrl: './ng-container-example.component.html',
  styleUrls: ['./ng-container-example.component.css']
})
export class NgContainerExampleComponent implements OnInit {

  hero: Hero = new Hero(1, 'James Bond');
  birthday = new Date(1988, 3, 15);

  constructor() { }

  ngOnInit() {
  }

}
