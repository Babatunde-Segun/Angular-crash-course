import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { Observable, interval } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
@Component({
  standalone: true,
  selector: 'app-hero-async-message',
  template: ` <h2>Async Messages and AsyncPipe</h2>
    <p>{{ message$ | async }}</p>
    <button class="btn" type="button" (click)="resend()">
      Resend Messages
    </button>`,
  imports: [AsyncPipe],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100),
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class HeroAsyncMessageComponent {
  message$: Observable<string>;
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?',
    'i love you',
    'please my bae',
  ];
  constructor() {
    this.message$ = this.#getResendObservable();
  }
  resend() {
    this.message$ = this.#getResendObservable();
  }
  #getResendObservable() {
    return interval(2000).pipe(
      map((i) => `Message #${i + 1}: ${this.messages[i]}`),
      take(this.messages.length),
      startWith('Waiting for messages...')
    );
  }
}
