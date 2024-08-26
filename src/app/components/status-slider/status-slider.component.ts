import { Component } from '@angular/core';
import {
  trigger,
  transition,
  state,
  animate,
  style,
  keyframes,
} from '@angular/animations';
@Component({
  standalone: true,
  selector: 'app-status-slider',
  templateUrl: 'status-slider.component.html',
  styleUrls: ['status-slider.component.css'],
  animations: [
    trigger('slideStatus', [
      state('inactive', style({ backgroundColor: 'blue', height: '100px' })),
      state('active', style({ backgroundColor: '#754600', height: '*' })),
      transition('* => active', [
        animate(
          '4s',
          keyframes([
            style({
              color: 'white',
              backgroundColor: 'blue',
              offset: 0,
              height: '50px',
            }),
            style({
              backgroundColor: 'red',
              offset: 0.4,
              height: '200px',
              opacity: '0.5',
            }),
            style({ backgroundColor: 'black', offset: 0.6 }),
            style({ backgroundColor: '#754600', offset: 0.8, height: '20px' }),
          ])
        ),
      ]),
      transition('* => inactive', [
        animate(
          '2s',
          keyframes([
            style({ backgroundColor: '#754', offset: 0 }),
            style({ backgroundColor: 'red', offset: 0.2 }),
            style({ backgroundColor: 'blue', offset: 1.0 }),
          ])
        ),
      ]),
      transition('* => active', [
        animate(
          '2s',
          keyframes([
            style({ backgroundColor: 'blue' }),
            style({ backgroundColor: 'red' }),
            style({ backgroundColor: 'orange' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class StatusSliderComponent {
  status: 'active' | 'inactive' = 'inactive';
  toggle() {
    if (this.status === 'active') {
      this.status = 'inactive';
    } else {
      this.status = 'active';
    }
  }
}
