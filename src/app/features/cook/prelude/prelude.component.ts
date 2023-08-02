import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/shared/interfaces/meal.interface';

@Component({
  selector: 'app-prelude',
  templateUrl: './prelude.component.html',
  styleUrls: ['./prelude.component.scss'],
})
export class PreludeComponent implements OnInit {
  @Input() detailedRecipe: Meal;
  @Output() relocation: EventEmitter<string>;

  constructor(private router: Router) {
    this.detailedRecipe = { id: '', name: '' };
    this.relocation = new EventEmitter<string>();
  }

  routeToIngredients() {
    this.relocation.emit('mise-en-place');
  }

  ngOnInit(): void {}
}
