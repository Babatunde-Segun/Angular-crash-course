import { Component, inject } from '@angular/core';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  standalone: true,
})
export class CommentsComponent {
  display: string;

  constructor(private carService: CarsService) {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}
