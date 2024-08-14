import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* template driven approach form */
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  username = 'Guzman';
  favoriteFramework = '';

  showFramework() {
    if (this.favoriteFramework === '') return;
    if (this.favoriteFramework === 'a') console.log('ok');

    alert(this.favoriteFramework);
  }
}
