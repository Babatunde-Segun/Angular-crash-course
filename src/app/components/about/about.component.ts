import { Component } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [CommentsComponent, RouterLink],
  styleUrl: './about.component.css',
})
export class AboutComponent {}
