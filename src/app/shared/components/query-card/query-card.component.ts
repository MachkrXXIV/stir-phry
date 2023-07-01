import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../../interfaces/meal.interface';
import { RecipeService } from '../../services/recipe.service';
@Component({
  selector: 'app-query-card',
  templateUrl: './query-card.component.html',
  styleUrls: ['./query-card.component.scss'],
})
export class QueryCardComponent implements OnInit {
  @Input() query: Meal = {
    id: 0,
    name: 'meal',
    image: 'image',
  };

  constructor(private recipeService: RecipeService) {}

  routeToDetailedView(id: number) {
    this.recipeService.getDetailedInformation(id).subscribe({
      next: (recipe: Meal) => {
        this.query = recipe;
        console.log(recipe);
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }

  ngOnInit(): void {}
}
