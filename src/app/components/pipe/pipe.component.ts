import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  loudMessage = 'we think you are doing great!';
  todayDate = new Date();
}
