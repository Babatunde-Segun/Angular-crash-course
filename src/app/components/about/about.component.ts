import { Component } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  template: `
    <div>
      <div style="display: flex; ">
        <button routerLink="/heroes-list">Go Back</button>
      </div>
      <h1>How I feel about Angular</h1>
      <article></article>
      @defer(on viewport) {
      <comments />
      } @placeholder() {
      <p>Future comments</p>
      } @loading (minimum 2s) {
      <p>Loading comments...</p>
      }
    </div>
  `,
  standalone: true,
  imports: [CommentsComponent, RouterLink],
  styleUrl: './about.component.css',
})
export class AboutComponent {}
