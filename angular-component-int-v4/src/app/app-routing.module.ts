import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';

const appRoutes: Routes = [
  {
    path: 'passDataFromParentToChild',
    component: HeroParentComponent
  },
  {
    path: 'intercepDataInChild',
    component: NameParentComponent
  },
  {
    path: 'interceptNgOnChanges',
    component: VersionParentComponent
  },
  {
    path: 'parentListensForChildEvent',
    component: VotetakerComponent
  },
  {
    path: 'parentChildInternWithViewChild',
    component: CountdownParentComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
