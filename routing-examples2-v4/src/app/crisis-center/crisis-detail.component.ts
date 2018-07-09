import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Crisis } from './crisis.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  template: `
    <div *ngIf="crisis">
      <h3>"{{ editName }}"</h3>
      <div>
        <label>Id: </label>{{ crisis.id }}
      </div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="editName" placeholder="name"/>
      </div>
      <p>
        <button (click)="save()">Save</button>
        <button (click)="cancel()">Cancel</button>
      </p>
    </div>
  `,
  styles: [
    'input { width: 20em }'
  ]
})
export class CrisisDetailComponent implements OnInit {

  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { crisis: Crisis}) => {
        this.editName = data.crisis.name;
        this.crisis = data.crisis;
    });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo'}], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return this.dialogService.confirm('Discard Changes?');
  }
}
