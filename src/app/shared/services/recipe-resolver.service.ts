import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RecipeService } from './recipe.service';
import { Meal } from '../interfaces/meal.interface';
import { FirestoreRecipesService } from './firestore-recipes.service';
import { computeStyles } from '@popperjs/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolverService implements Resolve<Meal> {
  constructor(
    private recipeService: RecipeService,
    private savedMealService: FirestoreRecipesService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Meal> {
    const id: string = route.params['id'];
    const path = '/saved-meals';
    if (id.startsWith('CUSTOM')) {
      return this.savedMealService.get(id, path);
    }
    return this.recipeService.getDetailedInformation(id);
    // return this.savedMealService.get()
  }
}
