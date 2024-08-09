import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from '../components/orders/orders.component';
import { OrdersRoutingModule } from './orders-routing';

@NgModule({
  declarations: [],
  imports: [CommonModule, OrdersComponent, OrdersRoutingModule],
})
export class OrdersModule {}
