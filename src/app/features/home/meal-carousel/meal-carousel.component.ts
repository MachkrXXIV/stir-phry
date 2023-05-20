import { Component, HostListener, OnInit } from '@angular/core';
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
  isLargeScreen = false;

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

  ngOnInit(): void {
    this.isLargeScreen = window.innerWidth >= 992;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: WindowEventHandlers) {
    this.isLargeScreen = window.innerWidth >= 992;
  }
}