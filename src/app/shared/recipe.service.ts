import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  apiKey = environment.apiKey;

  getRecipe(recipeName: string) {
    this.http
      .get(`${this.baseUrl}?apiKey=${this.apiKey}&query=${recipeName}`)
      .subscribe((Response) => {
        console.log(Response);
      });
  }
}
