import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero, HeroService } from './hero.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes$ | async"
        [class.selected]="hero.id === selectedId">
          <a [routerLink]="['/hero', hero.id]">
            <span class="badge">{{ hero.id }}</span>{{ hero.name }}
          </a>
      </li>
    </ul>

    <button routerLink="/sidekicks">Go to sidekicks</button>
  `
})
export class HeroListComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  selectedId: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // this.selectedId = +params.get('id');
        return this.service.getHeroes();
      })
    );
  }
}
