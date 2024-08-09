import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroesListComponent } from './heroes-list.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroListRoutingModule {}
