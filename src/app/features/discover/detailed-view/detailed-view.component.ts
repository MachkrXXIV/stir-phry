import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { SavedMealsService } from 'src/app/shared/services/saved-meal.service';
import { LikedRecipesService } from 'src/app/shared/services/liked-recipes.service';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss'],
})
export class DetailedViewComponent implements OnInit {
  detailedRecipe: Meal = {
    id: -1,
    name: '',
  };
  recipeState = {
    isSaved: false,
    isTried: false,
    isLiked: false,
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private savedMealService: SavedMealsService,
    private likedRecipeService: LikedRecipesService
  ) {}

  goBack() {
    this.router.navigate(['/discover']);
  }

  saveRecipe() {
    if (this.recipeState.isSaved) {
      this.savedMealService.delete(this.detailedRecipe);
      this.recipeState.isSaved = false;
      let state = JSON.stringify(this.recipeState);
      localStorage.setItem(this.detailedRecipe.id.toString(), state);
    } else {
      this.savedMealService.add(this.detailedRecipe);
      this.recipeState.isSaved = true;
      let state = JSON.stringify(this.recipeState);
      localStorage.setItem(this.detailedRecipe.id.toString(), state);
    }
  }

  tryRecipe() {}

  likeRecipe() {
    let state = JSON.stringify(this.recipeState);

    if (this.recipeState.isLiked) {
      this.likedRecipeService.delete(this.detailedRecipe);
      this.recipeState.isLiked = false;
      let state = JSON.stringify(this.recipeState);
      localStorage.setItem(this.detailedRecipe.id.toString(), state);
    } else {
      this.likedRecipeService.add(this.detailedRecipe);
      this.recipeState.isLiked = true;
      let state = JSON.stringify(this.recipeState);
      localStorage.setItem(this.detailedRecipe.id.toString(), state);
    }
  }

  checkIconStates() {}

  ngOnInit(): void {
    this.detailedRecipe = this.route.snapshot.data['detailedRecipe'];
    let state = localStorage.getItem(this.detailedRecipe.id.toString());
    if (state) {
      console.log('parsing!');
      this.recipeState = JSON.parse(state);
    }
    console.log('save state:', this.recipeState);
  }
}
