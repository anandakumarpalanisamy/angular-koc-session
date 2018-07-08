import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-item',
  template: `<h3>About Item {{ id }}</h3>`
})
export class AboutItemComponent implements OnInit, OnDestroy {

  id: any;
  paramSub: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.paramSub = this.activatedRoute.params.subscribe(params => {
      this.id = parseInt(params['id'], 10);
    });
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
  }
}
