import { Component, effect, inject, signal } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  // @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  subscription: Subscription = new Subscription();

  taskservice = inject(TaskService);
  profileForm = new FormGroup({
    taskName: new FormControl(''),
    dayAndTime: new FormControl(''),
    reminder: new FormControl(false),
  });
  showAddTask: boolean = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  // text: string = '';
  // day: string = '';
  // reminder: boolean = false;

  onSubmit() {
    // console.log(this.profileForm.controls);
    // TODO: Use EventEmitter with form value
    if (this.profileForm.value.taskName === '') {
      alert('please add a task');
      return;
    }

    const newTask = {
      text: this.profileForm.value.taskName ?? '',
      day: this.profileForm.value.dayAndTime ?? '',
      reminder: this.profileForm.value.reminder ?? false,
    };
    console.log(this.profileForm.value);

    this.taskservice.addTask(newTask).subscribe((task: Task) => {
      console.log('Task added:', task);
    });

    // this.onAddTask.emit(this.profileForm)

    // @todo - emit event
  }

  onAddTask(task: Task) {
    // const httpService = inject(TaskService);
    const submitTask = this.taskservice.addTask(task);
    console.log(submitTask);
    // console.log(task);?
  }
}
