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
  isSaved: boolean = false;
  isLiked: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private savedMealService: SavedMealsService,
    private likedRecipeService: LikedRecipesService
  ) {}

  goBack() {
    this.router.navigate(['/discover']);
  }

  saveRecipe(isAlreadySaved: boolean) {
    if (isAlreadySaved) {
      this.savedMealService.delete(this.detailedRecipe);
      localStorage.setItem('isSaved', 'false');
      this.isSaved = false;
    } else {
      this.savedMealService.add(this.detailedRecipe);
      localStorage.setItem('isSaved', 'true');
      this.isSaved = true;
    }
  }

  tryRecipe() {}

  likeRecipe(isAlreadyLiked: boolean) {
    if (isAlreadyLiked) {
      this.likedRecipeService.delete(this.detailedRecipe);
      localStorage.setItem('isLiked', 'false');
      this.isLiked = false;
    } else {
      this.likedRecipeService.add(this.detailedRecipe);
      localStorage.setItem('isLiked', 'true');
      this.isLiked = true;
    }
  }

  checkIconStates() {}

  ngOnInit(): void {
    this.detailedRecipe = this.route.snapshot.data['detailedRecipe'];
    this.isSaved = localStorage.getItem('isSaved') === 'true' ? true : false;
    this.isLiked = localStorage.getItem('isLiked') === 'true' ? true : false;
    console.log('save state:', this.isSaved);
  }
}
