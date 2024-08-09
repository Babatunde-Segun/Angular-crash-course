import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing';
import { CustomersComponent } from '../components/customers/customers.component';
@NgModule({
  imports: [CommonModule, CustomersRoutingModule, CustomersComponent],
})
export class CustomersModule {}
