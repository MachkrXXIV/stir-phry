import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  NgZone,
} from '@angular/core';
import { Meal } from '../../interfaces/meal.interface';
import { RecipeForm } from '../../interfaces/recipe-form';
import { FirestoreService } from '../../services/firestore.service';
import { MealClassificationsService } from '../../services/meal-classifications.service';
import { DataConversionService } from '../../services/data-conversion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss'],
})
export class CreateRecipeComponent implements OnInit {
  @ViewChild('recipeForm') recipeForm!: ElementRef;
  tagInputVal: string = '';
  ingredientInputVal: string = '';
  instructionInputVal: string = '';
  isSubmitted = false;
  mealTypes: string[] = [];
  tags: string[] = [];

  recipe: RecipeForm = {
    id: 4444,
    name: '',
    image: '',
    mealType: '',
    tags: [],
    ingredients: [],
    instructions: [],
    prepTimeInMinutes: 0,
  };
  meal!: Meal;

  constructor(
    private firestore: FirestoreService,
    private mealClassService: MealClassificationsService,
    private conversionService: DataConversionService,
    private ngZone: NgZone
  ) {
    this.mealTypes = this.mealClassService.getMealTypes();
    this.tags = this.mealClassService.getTags();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.meal = this.conversionService.convertRecipeFormToMeal(this.recipe);
    this.isSubmitted = true;
    this.firestore.addSavedMeal(this.meal);
    this.resetForm();
  }

  addTag(tag: string) {
    this.recipe.tags?.push(tag);
    tag = '';
    this.tagInputVal = '';
  }

  addIngredient(ingredient: string) {
    this.recipe.ingredients.push(ingredient);
    this.ingredientInputVal = '';
  }

  addInstruction(instruction: string) {
    this.recipe.instructions.push(instruction);
    this.instructionInputVal = '';
  }

  removeTag(tagIndex: number) {
    this.recipe.tags?.splice(tagIndex, 1);
  }

  removeIngredient(ingredientIndex: number) {
    this.recipe.ingredients.splice(ingredientIndex, 1);
  }

  removeInstruction(instructionIndex: number) {
    this.recipe.instructions.splice(instructionIndex, 1);
  }

  resetForm() {
    this.recipe = {
      id: -1,
      name: '',
      image: '',
      mealType: '',
      tags: [],
      ingredients: [],
      instructions: [],
      prepTimeInMinutes: 0,
    };
  }
}
