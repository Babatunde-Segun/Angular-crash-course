import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  // { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'crisis-list', component: CrisisListComponent },
  { path: 'heroes-list', component: HeroesListComponent },
  {
    path: '',
    redirectTo: '/heroes-list',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

export const routes: Routes = appRoutes;
