import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { RegisterComponent } from './components/register/register.component';
import { ApiDataComponent } from './components/api-data/api-data.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'api-data',
    component: ApiDataComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
