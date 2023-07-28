import { Component, Input, OnInit } from '@angular/core';
import { FirestoreRecipesService } from '../../services/firestore-recipes.service';
import { Meal } from '../../interfaces/meal.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider-container',
  templateUrl: './slider-container.component.html',
  styleUrls: ['./slider-container.component.scss'],
})
export class SliderContainerComponent implements OnInit {
  items$?: Observable<Meal[]>;
  constructor(private savedMealService: FirestoreRecipesService) {}

  ngOnInit(): void {
    const path = '/saved-meals';
    this.items$ = this.savedMealService.getAll(path);
  }
}