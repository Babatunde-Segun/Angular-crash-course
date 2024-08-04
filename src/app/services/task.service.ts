import { computed, effect, Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TASKS } from '../mock-task';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';

const httpOtions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // count = signal(TASKS);
  count = signal<Task[]>([]);
  showCount = signal(false);
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
  }

  console() {
    console.log('good');
  }

  getTasks(): Observable<Task[]> {
    this.console();
    console.log(this.apiUrl);
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    console.log(task.id);
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOtions);
  }

  addTask(task: Task): any {
    console.log(`The current count is: ${this.count()}`);

    !this.showCount();
    return this.http.post<Task>(this.apiUrl, task, httpOtions);
  }
}

// import { effect, Injectable, signal } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Task } from '../Task';
// import { Observable } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//   }),
// };

// @Injectable({
//   providedIn: 'root',
// })
// export class TaskService {
//   count = signal<Task[]>([]);
//   private apiUrl = 'http://localhost:5000/tasks';

//   constructor(private http: HttpClient) {
//     effect(() => {
//       console.log(`The current count is: ${this.count()}`);
//     });
//   }

//   getTasks(): Observable<Task[]> {
//     return this.http.get<Task[]>(this.apiUrl);
//   }

//   deleteTask(task: Task): Observable<Task> {
//     const url = `${this.apiUrl}/${task.id}`;
//     return this.http.delete<Task>(url);
//   }

//   updateTaskReminder(task: Task): Observable<Task> {
//     const url = `${this.apiUrl}/${task.id}`;
//     return this.http.put<Task>(url, task, httpOptions);
//   }

//   addTask(task: Task): Observable<Task> {
//     return this.http.post<Task>(this.apiUrl, task, httpOptions).pipe(
//       tap(newTask => {
//         const currentTasks = this.count();
//         this.count([...currentTasks, newTask]);
//       })
//     );
//   }
// }
