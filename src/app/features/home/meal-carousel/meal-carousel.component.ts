import { Component, HostListener, OnInit } from '@angular/core';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FirestoreRecipesService } from 'src/app/shared/services/firestore-recipes.service';

@Component({
  selector: 'app-meal-carousel',
  templateUrl: './meal-carousel.component.html',
  styleUrls: ['./meal-carousel.component.scss'],
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
})
export class MealCarouselComponent implements OnInit {
  constructor(private firestore: FirestoreRecipesService) {}
  isLargeScreen = false;
  mealAgenda$?: Observable<Meal[]>;

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

  ngOnInit(): void {
    const path = '/saved-meals';
    this.isLargeScreen = window.innerWidth >= 992;
    this.mealAgenda$ = this.firestore.getAll(path);
    console.log(this.mealAgenda$);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: WindowEventHandlers) {
    this.isLargeScreen = window.innerWidth >= 992;
  }
}
