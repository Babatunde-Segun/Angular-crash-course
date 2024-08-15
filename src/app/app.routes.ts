import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeroAsyncMessageComponent } from './components/hero-async-component/hero-async-component.component';
import { CssStyleExampleComponent } from './components/css-style-example/css-style-example.component';
import { ImageComponent } from './components/image/image.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { PipeComponent } from './components/pipe/pipe.component';

const appRoutes: Routes = [
  // { path: '', component: TasksComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'pipe', title: 'Pipe', component: PipeComponent },
  { path: 'image', title: 'Image', component: ImageComponent },
  { path: 'form', title: 'Form', component: FormComponent },
  {
    path: 'reactive-form',
    title: 'Reactive-Form',
    component: ReactiveFormComponent,
  },
  { path: 'crisis-list', title: 'Crisis', component: CrisisListComponent },
  {
    path: 'heroes-list',
    title: 'Heroes',
    loadChildren: () =>
      import('./heroes-list/heroes.module').then((m) => m.HeroListModule),
  },
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
    path: 'customers',
    loadChildren: () =>
      import('./components/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },

  {
    path: 'orders',
    loadChildren: () =>
      import('./components/orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'css-style-example',
    title: 'Css styling Example',
    component: CssStyleExampleComponent,
  },
  {
    path: '',
    redirectTo: '/heroes-list',
    pathMatch: 'full',
  },
  { path: '**', title: 'Page not found', component: PageNotFoundComponent },
];

export const routes: Routes = appRoutes;
