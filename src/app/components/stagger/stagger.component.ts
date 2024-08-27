import {
  trigger,
  transition,
  style,
  stagger,
  animate,
  query,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stagger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stagger.component.html',
  styleUrl: './stagger.component.css',
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero-items', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(100, [
            animate(
              '500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class StaggerComponent {
  isTrue: boolean = true;
  items: { name: string; emoji: string; id: number }[] = [
    { name: 'Item 1', emoji: '🍏', id: 1 },
    { name: 'Item 2', emoji: '🍎', id: 2 },
    { name: 'Item 3', emoji: '🍊', id: 3 },
    { name: 'Item 4', emoji: '🍇', id: 4 },
    { name: 'Item 5', emoji: '🍉', id: 5 },
    { name: 'Item 6', emoji: '🍌', id: 6 },
    { name: 'Item 7', emoji: '🍒', id: 7 },
    { name: 'Item 8', emoji: '🍍', id: 8 },
    { name: 'Item 9', emoji: '🥝', id: 9 },
    { name: 'Item 10', emoji: '🍓', id: 10 },
  ];
}
