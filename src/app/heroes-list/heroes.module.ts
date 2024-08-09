import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './HeroList.component';
import { HeroListRoutingModule } from './HeroList-routing';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeroListComponent, HeroListRoutingModule],
})
export class HeroListModule {}
