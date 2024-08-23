import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate(1000),
      ]),
      transition(':leave', [
        animate(700, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
  providers: [provideImgixLoader('https://images.pexels.com/photos/')],
})
export class ImageComponent {
  logoUrl =
    '19371080/pexels-photo-19371080/free-photo-of-streetwear-ec.jpeg?auto=compress&cs=tinysrgb&w=600';
  picture = '1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
