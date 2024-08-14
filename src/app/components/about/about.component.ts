import { Component } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-about',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article></article>
      @defer(on viewport) {
      <comments />
      } @placeholder() {
      <p>Future comments</p>
      } @loading (minimum 5s) {
      <p>Loading comments...</p>
      }
    </div>
  `,
  standalone: true,
  imports: [CommentsComponent],
  styleUrl: './about.component.css',
})
export class AboutComponent {}
