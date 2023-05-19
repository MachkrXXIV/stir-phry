import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  isLargeScreen = false;

  userName = 'Justin';

  meals: Meal[] = [
    {
      name: 'Fried Rice',
      duration: 25,
    },
    {
      name: 'Creamy Cajun Pasta',
      duration: 55,
    },
    {
      name: 'Beef Enchiladas',
      duration: 45,
    },
  ];

  ngOnInit(): void {}
}
