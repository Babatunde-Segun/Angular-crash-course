import { Pipe, PipeTransform, ViewEncapsulation } from '@angular/core';
@Pipe({
  name: 'greet',
  standalone: true,
})
export class GreetPipe implements PipeTransform {
  transform(value: string): string {
    return `Hello ${value}`;
  }
}
import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-crisis-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, PercentPipe, GreetPipe],
  templateUrl: './crisis-list.component.html',
  styleUrl: './crisis-list.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CrisisListComponent {
  birthday = new Date().toLocaleDateString();
  currentTime = new Date();
  Name: string = 'babatunde';
}
