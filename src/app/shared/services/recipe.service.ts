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
  private baseUrl = 'https://api.spoonacular.com/recipes/';
  private apiKey = environment.apiKey;

  getRecipe(recipeName: string): Observable<Meal[]> {
    const params = new HttpParams().set('number', 50);
    return this.http
      .get<any>(
        `${this.baseUrl}/complexSearch?apiKey=${this.apiKey}&query=${recipeName}`,
        {
          params,
        }
      )
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

  getDetailedInformation(id: number): Observable<Meal> {
    const params = new HttpParams().set('includeNutrition', true);
    return this.http
      .get<any>(`${this.baseUrl}/${id}/information?apiKey=${this.apiKey}`, {
        params,
      })
      .pipe(
        map((response) => {
          const recipe = response;
          return {
            id: recipe.id,
            name: recipe.title,
            image: recipe.image,
            tags: recipe.cuisines,
            calories: recipe.nutrition.nutrients[0].amount,
            fat: recipe.nutrition.nutrients[1].amount,
            carbohydrates: recipe.nutrition.nutrients[3].amount,
            sugar: recipe.nutrition.nutrients[5].amount,
            cholesterol: recipe.nutrition.nutrients[6].amount,
            sodium: recipe.nutrition.nutrients[7].amount,
            protein: recipe.nutrition.nutrients[9].amount,
            sourceUrl: recipe.sourceUrl,
          } as Meal;
        })
      );
  }
}
