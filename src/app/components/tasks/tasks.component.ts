import { Component, signal } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TASKS } from '../../mock-task';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Observable, of } from 'rxjs';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];
  // count = signal(TASKS);

  constructor(
    private taskService: TaskService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
    console.log(task.reminder);
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((newTask: Task) => {
      this.tasks.push(newTask); // Add the new task to the tasks array
      console.log('Task added and UI updated:', newTask);
      this.cd.detectChanges();
    });
    // this.count();
  }
}
