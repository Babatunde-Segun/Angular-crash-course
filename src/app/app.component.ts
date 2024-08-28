// import {
//   Component,
//   HostBinding,
//   importProvidersFrom,
//   NgModule,
//   OnInit,
// } from '@angular/core';
// import {
//   ChildrenOutletContexts,
//   RouterLink,
//   RouterLinkActive,
//   RouterOutlet,
// } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';
// import { TasksComponent } from './components/tasks/tasks.component';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { FormControl } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RouterModule, Routes, Route } from '@angular/router';
// import { provideRouter } from '@angular/router';
// import { AboutComponent } from './components/about/about.component';
// import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroesListComponent } from './heroes-list/heroes-list.component';
// import { CssStyleExampleComponent } from './components/css-style-example/css-style-example.component';
// import { CommentsComponent } from './components/comments/comments.component';
// import {
//   BrowserAnimationsModule,
//   NoopAnimationsModule,
// } from '@angular/platform-browser/animations';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { slideInAnimation } from './animation';
// // import { ChildrenOutletContexts } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterLinkActive, RouterLink, RouterOutlet],
//   animations: [slideInAnimation],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent implements OnInit {
//   ngOnInit(): void {}
//   constructor(private contexts: ChildrenOutletContexts) {}
//   getRouteAnimationData() {
//     return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
//       'animation'
//     ];
//   }
// }

import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {
  ChildrenOutletContexts,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
// import {slideInAnimation} from './animations';
import { slideInAnimation } from './animation';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  imports: [RouterLink, RouterOutlet],
  animations: [
    slideInAnimation,
    // animation triggers go here
  ],
})
export class AppComponent {
  // constructor(private contexts: ChildrenOutletContexts) {}
  // getRouteAnimationData() {
  //   return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
  //     'animation'
  //   ];
  // }
}
