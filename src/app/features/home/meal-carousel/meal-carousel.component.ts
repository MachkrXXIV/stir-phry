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
})
export class MealCarouselComponent implements OnInit {
  mealAgenda$?: Observable<Meal[]>;
  isLargeScreen = false;
  constructor(private firestore: FirestoreRecipesService) {}

  ngOnInit(): void {
    const path = '/meal-agenda';
    this.isLargeScreen = window.innerWidth >= 992;
    this.mealAgenda$ = this.firestore.getAll(path);
    console.log(this.mealAgenda$);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: WindowEventHandlers) {
    this.isLargeScreen = window.innerWidth >= 992;
  }
}
