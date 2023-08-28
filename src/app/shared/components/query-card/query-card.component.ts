import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../../interfaces/meal.interface';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { FirestoreRecipesService } from '../../services/firestore-recipes.service';
import { BaseCard } from '../../interfaces/base-card.interface';
@Component({
  selector: 'app-query-card',
  templateUrl: './query-card.component.html',
  styleUrls: ['./query-card.component.scss'],
})
export class QueryCardComponent extends BaseCard implements OnInit {
  @Input() query: Meal = {
    id: '',
    name: '',
    image: '',
  };
  @Input() collectionName?: string;
  isUserCreated!: boolean;
  isSaved?: boolean;

  constructor(
    router: Router,
    firestoreRecipeService: FirestoreRecipesService,
    private recipeService: RecipeService
  ) {
    super(router, firestoreRecipeService);
    this.collectionName = '/saved-meals';
  }

  override routeToDetailedView(id: string) {
    const path = this.collectionName!;
    console.log('collection path', path);
    if (this.isUserCreated || this.isSaved) {
      this.firestoreRecipeService.get(id, path).subscribe({
        next: (recipe: Meal) => {
          this.router.navigate(['/collections/', path, id], {
            state: recipe,
          });
        },
        error: (error) => {
          console.error('ERROR: ', error);
        },
      });
    } else {
      console.log('not user');
      this.recipeService.getDetailedInformation(id).subscribe({
        next: (recipe: Meal) => {
          let nameUrl = recipe.name.split(' ').join('-');
          console.log(recipe);
          this.router.navigate(['/discover', nameUrl, recipe.id], {
            state: recipe,
          });
        },
        error: (error) => {
          console.log('error', error);
        },
      });
    }
  }

  ngOnInit(): void {
    this.isUserCreated = this.query.id.toString().startsWith('CUSTOM')
      ? true
      : false;
    this.isSaved = localStorage.getItem(this.query.id) ? true : false;
  }
}
