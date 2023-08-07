import { Component } from '@angular/core';
import { Meal } from './meal.interface';
import { Router } from '@angular/router';
import { FirestoreRecipesService } from '../services/firestore-recipes.service';

export abstract class BaseCard {
  constructor(
    protected router: Router,
    protected firestoreRecipeService: FirestoreRecipesService
  ) {}

  abstract routeToDetailedView(id: string): void;
}
