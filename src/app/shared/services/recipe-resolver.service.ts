import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RecipeService } from './recipe.service';
import { Meal } from '../interfaces/meal.interface';
import { SavedMealsService } from './saved-meal.service';
import { computeStyles } from '@popperjs/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolverService implements Resolve<Meal> {
  constructor(
    private recipeService: RecipeService,
    private savedMealService: SavedMealsService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Meal> {
    const id: string = route.params['id'];
    if (id.includes('CUSTOM')) {
      return this.savedMealService.get(id);
    }
    return this.recipeService.getDetailedInformation(id);
    // return this.savedMealService.get()
  }
}
