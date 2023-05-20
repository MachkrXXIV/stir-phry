import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  searchValue = '';

  getUserInput() {
    this.recipeService.getRecipe(this.searchValue);
    console.log(this.searchValue);
  }

  ngOnInit(): void {}
}
