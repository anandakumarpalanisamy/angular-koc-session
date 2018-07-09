import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HeroService, Hero } from './hero.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  template: `
    <h2>HEROES</h2>
    <div *ngIf="hero$ | async as hero">
      <h3>"{{ hero.name }}"</h3>
      <div>
        <label>Id: </label>{{ hero.id }}
      </div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <p>
        <button (click)="gotoHeroes(hero)">Back</button>
      </p>
    </div>
  `
})
export class HeroDetailComponent implements OnInit {

  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')))
    );
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }
}
