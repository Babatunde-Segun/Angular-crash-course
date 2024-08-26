import { Component } from '@angular/core';
import {
  trigger,
  transition,
  state,
  animate,
  style,
} from '@angular/animations';
import { CommonModule, NgStyle } from '@angular/common';
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-open-close-boolean',
  animations: [
    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', animate(500)),
    ]),
  ],
  templateUrl: 'increment.component.html',
  styleUrls: ['increment.component.css'],
})
export class IncrementComponent {
  isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
