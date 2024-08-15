import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, DecimalPipe, CurrencyPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  loudMessage = 'we think you are doing great!';
  todayDate = new Date();
  num = 103.1234;

  cost = 4560.34;
}
