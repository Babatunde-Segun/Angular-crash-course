import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    let reverse = '';
    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }
    return reverse;
  }
}

@Pipe({
  standalone: true,
  name: 'star',
})
export class StarPipe implements PipeTransform {
  transform(value: string): string {
    return `⭐️ ${value} ⭐️`;
  }
}

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    ReversePipe,
    StarPipe,
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  loudMessage = 'we think you are doing great!';
  todayDate = new Date();
  num = 103.1234;
  word = 'You are a champion';

  starBoy = '5 star general';

  cost = 4560.34;
}
