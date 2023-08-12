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
    private firestoreService: FirestoreRecipesService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Meal> {
    const id: string = route.params['id'];
    const collectionName = route.params['collectionName'];
    const isSaved = route.url[0].path === 'collections';
    if (id.startsWith('CUSTOM') || isSaved) {
      console.log('collection Name', collectionName);
      return this.firestoreService.get(id, collectionName);
    }
    return this.recipeService.getDetailedInformation(id);
  }
}
