import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { Meal } from '../interfaces/meal.interface';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  private apiKey = environment.apiKey;

  getRecipe(recipeName: string): Observable<Meal[]> {
    const params = new HttpParams().set('number', 50);
    return this.http
      .get<any>(`${this.baseUrl}?apiKey=${this.apiKey}&query=${recipeName}`, {
        params,
      })
      .pipe(
        map((response) => {
          return response.results.map((recipe: any) => {
            return {
              id: recipe.id,
              name: recipe.title,
              image: recipe.image,
            } as Meal;
          });
        })
      );
  }
}
