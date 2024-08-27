import { trigger, transition, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { transitionAnimation, triggerAnimation } from '../../animation';

@Component({
  selector: 'app-reusable-animation',
  standalone: true,
  imports: [],
  templateUrl: './reusable-animation.component.html',
  styleUrl: './reusable-animation.component.css',

  animations: [triggerAnimation],
})
export class ReusableAnimationComponent {
  isOpen = true; // Default state is open

  toggle() {
    this.isOpen = !this.isOpen; // Toggle the state between open and closed
    console.log(this.isOpen);
  }
}
