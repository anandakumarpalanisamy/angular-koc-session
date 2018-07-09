import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutHomeComponent } from './about/about-home/about-home.component';
import { AboutItemComponent } from './about/about-item/about-item.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: '',
        component: AboutHomeComponent
      },
      {
        path: 'item/:id',
        component: AboutItemComponent
      }
    ]
  }
];
