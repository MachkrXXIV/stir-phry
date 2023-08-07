import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseCard } from 'src/app/shared/interfaces/base-card.interface';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { FirestoreRecipesService } from 'src/app/shared/services/firestore-recipes.service';

@Component({
  selector: 'app-agenda-card',
  templateUrl: './agenda-card.component.html',
  styleUrls: ['./agenda-card.component.scss'],
})
export class AgendaCardComponent extends BaseCard implements OnInit {
  @Input() meal: Meal = {
    id: '',
    name: '',
    image: '',
  };
  protected isUserCreated: boolean = false;

  constructor(router: Router, firestoreRecipeService: FirestoreRecipesService) {
    super(router, firestoreRecipeService);
  }

  override routeToDetailedView(id: string): void {
    const path = '/saved-meals';
    this.firestoreRecipeService.get(id, path).subscribe({
      next: (recipe: Meal) => {
        this.router.navigate(['/cook', id], {
          state: recipe,
        });
      },
      error: (error) => {
        console.error('ERROR: ', error);
      },
    });
  }

  ngOnInit(): void {
    this.isUserCreated = this.meal.id.toString().startsWith('CUSTOM')
      ? true
      : false;
  }
}
