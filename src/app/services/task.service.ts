import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TASKS } from '../mock-task';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  console() {
    console.log('good');
  }

  getTasks(): Observable<Task[]> {
    this.console();
    console.log(this.apiUrl);
    return this.http.get<Task[]>(this.apiUrl);
  }
}
