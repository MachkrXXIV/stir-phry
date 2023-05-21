import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Meal } from './interfaces/meal.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  constructor() {}

  // private queryRecipes: Meal[] = [];
  private queryRecipesSubject: BehaviorSubject<Meal[]> = new BehaviorSubject<
    Meal[]
  >([]);
  public queryRecipes$: Observable<Meal[]> =
    this.queryRecipesSubject.asObservable();

  setQueryRecipes(recipes: Meal[]): void {
    this.queryRecipesSubject.next(recipes);
    console.log('Set searchbar service query results');
    console.log(this.queryRecipesSubject.getValue());
  }
}
