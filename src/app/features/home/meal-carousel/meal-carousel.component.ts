import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-carousel',
  templateUrl: './meal-carousel.component.html',
  styleUrls: ['./meal-carousel.component.scss'],
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
})
export class MealCarouselComponent implements OnInit {
  constructor() {}

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
