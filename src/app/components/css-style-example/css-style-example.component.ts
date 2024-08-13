import { Component, Input, output } from '@angular/core';
import { OutputComponentComponent } from '../output-component/output-component.component';

@Component({
  selector: 'app-css-style-example',
  standalone: true,
  imports: [OutputComponentComponent],
  templateUrl: './css-style-example.component.html',
  styleUrl: './css-style-example.component.css',
})
export class CssStyleExampleComponent {
  showNewName($event: string) {
    console.log('showNewName');
  }
  @Input({ transform: trimString }) label = 'dd';
  @Input({ transform: appendPx }) widthPx: string = '';
  @Input({ alias: 'sliderValue' }) value = 0;
  onNameChange = output<string>();

  trimString(value: string | undefined) {
    return value?.trim() ?? '';
  }
}

function trimString(value: string | undefined) {
  return value?.trim() ?? '';
}

function appendPx(value: number) {
  return `${value}px`;
}
