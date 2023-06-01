import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { SearchBarService } from '../../services/search-bar.service';
import { Meal } from '../../interfaces/meal.interface';
import { HostListener } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
  // @Output() query = new EventEmitter<Meal[]>();

  searchValue = '';
  queryRecipes: Meal[] = [];
  isLargeScreen = false;
  searchIcon = faSearch;

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

  ngOnInit(): void {
    this.isLargeScreen = window.innerWidth >= 992;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 992;
  }
}
