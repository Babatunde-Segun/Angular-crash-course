import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeroAsyncMessageComponent } from './components/hero-async-component/hero-async-component.component';

const appRoutes: Routes = [
  // { path: '', component: TasksComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'crisis-list', title: 'Crisis', component: CrisisListComponent },
  { path: 'heroes-list', title: 'Heroes', component: HeroesListComponent },
  {
    path: 'heroes-async-message',
    title: 'Heroes-Asynce',
    component: HeroAsyncMessageComponent,
  },
  // {
  //   path: 'items',
  //   loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  // }
  {
    path: '',
    redirectTo: '/heroes-list',
    pathMatch: 'full',
  },
  { path: '**', title: 'Page not found', component: PageNotFoundComponent },
];

export const routes: Routes = appRoutes;
