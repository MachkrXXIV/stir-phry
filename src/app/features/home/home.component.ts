import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private fs: FirestoreService) {
    // this.savedMeals$ = this.fs.getSavedMeals();
    // console.log(this.savedMeals$);
  }
  savedMeals$!: Observable<Meal[]>;

  isLargeScreen = false;

  userName = 'Justin';

  meals: Meal[] = [
    {
      id: 1,
      image: '#',
      name: 'Fried Rice',
      duration: 25,
    },
    {
      id: 2,
      image: '#',
      name: 'Creamy Cajun Pasta',
      duration: 55,
    },
    {
      id: 3,
      image: '#',
      name: 'Beef Enchiladas',
      duration: 45,
    },
  ];

  ngOnInit(): void {}
}
