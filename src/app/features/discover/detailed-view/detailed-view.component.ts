import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { FirestoreRecipesService } from 'src/app/shared/services/firestore-recipes.service';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss'],
})
export class DetailedViewComponent implements OnInit {
  detailedRecipe: Meal = {
    id: '',
    name: '',
  };
  recipeState = {
    isSaved: false,
    isTried: false,
    isLiked: false,
  };
  isUserCreated!: boolean;
  constructor(
    private route: ActivatedRoute,
    private firestoreRecipesService: FirestoreRecipesService,
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }

  saveRecipe() {
    const path = '/saved-meals';
    if (this.recipeState.isSaved) {
      this.firestoreRecipesService.delete(this.detailedRecipe, path);
      this.recipeState.isSaved = false;
      let state = JSON.stringify(this.recipeState);
      localStorage.setItem(this.detailedRecipe.id.toString(), state);
    } else {
      this.firestoreRecipesService.add(this.detailedRecipe, path);
      this.recipeState.isSaved = true;
      let state = JSON.stringify(this.recipeState);
      localStorage.setItem(this.detailedRecipe.id.toString(), state);
    }
  }

  tryRecipe() {}

  likeRecipe() {
    const path = '/liked-recipes';
    if (this.recipeState.isLiked) {
      this.firestoreRecipesService.delete(this.detailedRecipe, path);
      this.recipeState.isLiked = false;
      let state = JSON.stringify(this.recipeState);
      localStorage.setItem(this.detailedRecipe.id.toString(), state);
    } else {
      this.firestoreRecipesService.add(this.detailedRecipe, path);
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
      this.recipeState = JSON.parse(state);
    }
    this.isUserCreated = this.detailedRecipe.id.startsWith('CUSTOM')
      ? true
      : false;
    this.recipeState.isSaved = this.isUserCreated ? true : false;
    console.log('save state:', this.recipeState);
  }
}
