import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Meal } from 'src/app/shared/interfaces/meal.interface';

@Component({
  selector: 'app-mise-en-place',
  templateUrl: './mise-en-place.component.html',
  styleUrls: ['./mise-en-place.component.scss'],
})
export class MiseEnPlaceComponent implements OnInit {
  @Input() detailedRecipe: Meal;
  @Output() relocation: EventEmitter<string>;
  isUserCreated?: boolean;

  constructor() {
    this.detailedRecipe = { id: '', name: '' };
    this.relocation = new EventEmitter<string>();
    console.log(this.isUserCreated);
  }

  routeToPrelude() {
    this.relocation.emit('prelude');
  }

  routeToInstructions() {
    this.relocation.emit('instructions');
  }

  toggleActive(item: HTMLElement) {
    item.classList.toggle('cross');
  }

  ngOnInit(): void {
    this.isUserCreated = this.detailedRecipe.id.startsWith('CUSTOM');
  }
}
