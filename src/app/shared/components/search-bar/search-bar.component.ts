import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Meal } from '../../interfaces/meal.interface';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  searchValue = '';
  data: any;
  // queryRecipes$: Observable<Meal[]> = new Observable<Meal[]>();
  queryRecipes: Meal[] = [];

  getUserInput() {
    this.recipeService
      .getRecipe(this.searchValue)
      .subscribe((meals: Meal[]) => {
        this.queryRecipes = meals;
        console.log(this.queryRecipes);
      });
  }

  ngOnInit(): void {}
}
