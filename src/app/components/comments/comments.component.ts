import { Component, inject } from '@angular/core';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  standalone: true,
})
export class CommentsComponent {
  carService = inject(CarsService);
  display: string;

  constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}
