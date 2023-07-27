import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../../interfaces/meal.interface';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { FirestoreRecipesService } from '../../services/firestore-recipes.service';
@Component({
  selector: 'app-query-card',
  templateUrl: './query-card.component.html',
  styleUrls: ['./query-card.component.scss'],
})
export class QueryCardComponent implements OnInit {
  @Input() query: Meal = {
    id: '',
    name: '',
    image: '',
  };
  isUserCreated!: boolean;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private savedMealService: FirestoreRecipesService
  ) {}

  routeToDetailedView(query: Meal, isUserCreated: boolean) {
    const path = '/saved-meals';
    if (isUserCreated) {
      this.savedMealService.get(query.id, path).subscribe({
        next: (recipe: Meal) => {
          this.router.navigate(['/collections/saved-meals', query.id], {
            state: recipe,
          });
        },
        error: (error) => {
          console.error('ERROR: ', error);
        },
      });
    } else {
      console.log('not user');
      this.recipeService.getDetailedInformation(query.id).subscribe({
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
  }
}
