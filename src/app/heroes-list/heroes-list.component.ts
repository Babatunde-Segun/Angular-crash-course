import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [NgClass, NgStyle, FormsModule, NgIf],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css',
})
export class HeroesListComponent {
  hero: any;
  setUppercaseName($event: any) {
    throw new Error('Method not implemented.');
  }
  isSpecial: boolean = true;

  currentClasses: Record<string, boolean> = {};
  heroForm: Record<string, boolean> = {};
  canSave: boolean = true;
  isUnchanged: any;
  currentStyles: Record<string, string> = {};
  currentItem!: {
    name: string;
  };
  constructor() {
    this.activeClasses();
  }

  activeClasses() {
    this.setCurrentClasses(), this.setCurrentStyles(), this.setHeroForm();
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
    };
  }

  setHeroForm() {
    this.heroForm = {
      flex: this.canSave,
      gap: this.isSpecial,
    };
  }
}
