import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { FirestoreRecipesService } from 'src/app/shared/services/firestore-recipes.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  savedMeals$!: Observable<Meal[]>;
  collectionNames: string[];

  isLargeScreen = false;

  userName = 'Justin';
  constructor(private fs: FirestoreRecipesService) {
    this.collectionNames = ['/saved-meals', '/liked-recipes'];
  }

  ngOnInit(): void {}
}
