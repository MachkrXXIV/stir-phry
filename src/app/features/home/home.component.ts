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
  constructor(private fs: FirestoreRecipesService) {
    // this.savedMeals$ = this.fs.getSavedMeals();
    // console.log(this.savedMeals$);
  }
  savedMeals$!: Observable<Meal[]>;

  isLargeScreen = false;

  userName = 'Justin';

  meals: Meal[] = [
    {
      id: '',
      image: '#',
      name: 'Fried Rice',
      prepTimeInMinutes: 25,
    },
    {
      id: '',
      image: '#',
      name: 'Creamy Cajun Pasta',
      prepTimeInMinutes: 55,
    },
    {
      id: '',
      image: '#',
      name: 'Beef Enchiladas',
      prepTimeInMinutes: 45,
    },
  ];

  ngOnInit(): void {}
}
