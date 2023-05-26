import { Injectable } from '@angular/core';
import { Meal } from '../interfaces/meal.interface';
import { RecipeForm } from '../interfaces/recipe-form';

@Injectable({
  providedIn: 'root',
})
export class DataConversionService {
  constructor() {}

  convertRecipeFormToMeal(recipeForm: RecipeForm): Meal {
    return {
      id: recipeForm.id,
      name: recipeForm.name,
      image: recipeForm.image,
      mealType: recipeForm.mealType,
      tags: recipeForm.tags,
      ingredients: recipeForm.ingredients,
      instructions: recipeForm.instructions,
      prepTimeInMinutes: recipeForm.prepTimeInMinutes,
    };
  }
}
