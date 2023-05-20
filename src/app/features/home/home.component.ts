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
