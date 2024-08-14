import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit {
  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(4), Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  handleSubmit() {
    alert(this.myForm.value.name + ' | ' + this.myForm.value.email);
  }
}
