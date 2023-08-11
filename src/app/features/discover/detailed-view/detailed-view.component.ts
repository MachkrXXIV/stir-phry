import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { FirestoreRecipesService } from 'src/app/shared/services/firestore-recipes.service';
import { RecipeStateMachineService } from 'src/app/core/services/recipe-state-machine.service';
import { RecipeState } from 'src/app/core/interfaces/recipe-state.interface';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss'],
})
export class DetailedViewComponent implements OnInit, OnDestroy {
  private key: string;
  detailedRecipe: Meal;
  recipeState!: RecipeState;
  isUserCreated: boolean;
  isError: boolean;

  constructor(
    private route: ActivatedRoute,
    private firestoreRecipesService: FirestoreRecipesService,
    private location: Location,
    private recipeStateService: RecipeStateMachineService
  ) {
    this.detailedRecipe = { id: '', name: '' };
    // this.recipeState = { isLiked: false, isSaved: false, isTried: false };
    this.isUserCreated = false;
    this.key = '';
    this.isError = false;
  }
  // can definitely refactor this to get $event name as params and attempt to do that button name's action

  goBack() {
    this.location.back();
  }

  saveRecipe() {
    const path = '/saved-meals';

    // checks saveState and delete if already saved previously
    if (this.recipeState.isSaved) {
      this.firestoreRecipesService.delete(this.detailedRecipe, path);
      this.recipeState.isSaved = false;
    } else {
      this.firestoreRecipesService.add(this.detailedRecipe, path);
      this.recipeState.isSaved = true;
    }

    this.recipeStateService.setRecipeState(this.key, this.recipeState);
  }

  async tryRecipe() {
    const path = '/meal-agenda';
    let itemCount = await this.firestoreRecipesService
      .getItemCount(path)
      .then((count) => count);
    this.isError = itemCount >= 3;

    if (this.recipeState.isTried) {
      this.firestoreRecipesService.delete(this.detailedRecipe, path);
      this.recipeState.isTried = false;
    } else if (itemCount >= 3) {
      console.log('CANNOT ADD');
    } else {
      this.firestoreRecipesService.add(this.detailedRecipe, path);
      this.recipeState.isTried = true;
    }

    this.recipeStateService.setRecipeState(this.key, this.recipeState);
  }

  likeRecipe() {
    const path = '/liked-recipes';

    if (this.recipeState.isLiked) {
      this.firestoreRecipesService.delete(this.detailedRecipe, path);
      this.recipeState.isLiked = false;
    } else {
      this.firestoreRecipesService.add(this.detailedRecipe, path);
      this.recipeState.isLiked = true;
    }

    this.recipeStateService.setRecipeState(this.key, this.recipeState);
  }

  ngOnInit(): void {
    this.detailedRecipe = this.route.snapshot.data['detailedRecipe'];
    this.recipeState = this.recipeStateService.getRecipeState(
      this.detailedRecipe.id
    );
    this.isUserCreated = this.detailedRecipe.id.startsWith('CUSTOM');
    if (this.isUserCreated) {
      this.recipeState.isSaved = true;
    }
    this.key = this.detailedRecipe.id;
    console.log('save state:', this.recipeState);
  }

  ngOnDestroy(): void {
    // fix this jawn
    // console.log('exiting recipe state', this.recipeState);
    this.recipeStateService.deleteEmpty(this.key, this.recipeState);
  }
}
