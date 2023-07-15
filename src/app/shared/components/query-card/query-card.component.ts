import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../../interfaces/meal.interface';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
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

  constructor(private recipeService: RecipeService, private router: Router) {}

  routeToDetailedView(id: number) {
    this.recipeService.getDetailedInformation(id).subscribe({
      next: (recipe: Meal) => {
        // causes card shrink ??
        // this.query = recipe;
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

  ngOnInit(): void {}
}
