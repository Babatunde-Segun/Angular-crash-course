import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list.component';
import { HeroListRoutingModule } from './heroList-routing';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeroesListComponent, HeroListRoutingModule],
})
export class HeroListModule {}
