import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-css-style-example',
  standalone: true,
  imports: [],
  templateUrl: './css-style-example.component.html',
  styleUrl: './css-style-example.component.css',
})
export class CssStyleExampleComponent {
  @Input({ transform: trimString }) label = 'dd';
  @Input({ transform: appendPx }) widthPx: string = '';
  @Input({ alias: 'sliderValue' }) value = 0;

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
