import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-output-component',
  standalone: true,
  imports: [],
  templateUrl: './output-component.component.html',
  styleUrl: './output-component.component.css',
})
export class OutputComponentComponent {
  onNameChange = output<string>(); // OutputEmitterRef<string>

  setNewName(newName: string) {
    this.onNameChange.emit(newName);
  }
}
