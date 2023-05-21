import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { SearchBarService } from '../../search-bar.service';
import { Meal } from '../../interfaces/meal.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private searchService: SearchBarService
  ) {}
  @Output() query = new EventEmitter<Meal[]>();

  searchValue = '';
  queryRecipes: Meal[] = [];

  getUserInput() {
    this.recipeService
      .getRecipe(this.searchValue)
      .subscribe((meals: Meal[]) => {
        // this.queryRecipes = meals;
        // this.query.emit(meals);
        this.searchService.setQueryRecipes(meals);
        // console.log(this.queryRecipes);
      });
  }

  ngOnInit(): void {}
}
