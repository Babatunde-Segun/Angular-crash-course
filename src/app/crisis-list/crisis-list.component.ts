import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe, LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-crisis-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe],
  templateUrl: './crisis-list.component.html',
  styleUrl: './crisis-list.component.css',
})
export class CrisisListComponent {
  birthday = new Date().toLocaleDateString();
  currentTime = new Date();
}
