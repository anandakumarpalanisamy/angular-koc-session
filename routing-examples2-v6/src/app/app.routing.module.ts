import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/not-found.component';
import { ComposeMessageComponent } from './contact/compose-message.component';
import { AuthGuard } from './guards/auth-guard.service';
import { CanDeactivateGuard } from './guards/can-deactivate-guard.service';

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: '../app/admin/admin.module#AdminModule',
    canLoad: [ AuthGuard ]
  },
  {
    path: 'crisis-center',
    loadChildren: '../app/crisis-center/crisis-center.module#CrisisCenterModule'
  },
  {
    path: '',
    redirectTo: '/superheroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    AuthGuard
  ]
})
export class AppRoutingModule {}
