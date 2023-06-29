import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Meal } from '../interfaces/meal.interface';
@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  constructor() {}

  // private queryRecipes: Meal[] = [];
  private queryRecipesSubject: BehaviorSubject<Meal[]> = new BehaviorSubject<
    Meal[]
  >([]);
  private searchValueSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  public queryRecipes$: Observable<Meal[]> =
    this.queryRecipesSubject.asObservable();

  public searchValue$: Observable<string> =
    this.searchValueSubject.asObservable();

  setQueryRecipes(recipes: Meal[]): void {
    this.queryRecipesSubject.next(recipes);
  }
  setSearchValue(searchValue: string) {
    this.searchValueSubject.next(searchValue);
  }
}
