import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/shared/interfaces/meal.interface';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss'],
})
export class DetailedViewComponent implements OnInit {
  detailedRecipe: Meal;
  constructor(private router: Router) {
    this.detailedRecipe = this.router.getCurrentNavigation()!.extras
      .state as Meal;
    console.log(this.detailedRecipe.name);
  }

  ngOnInit(): void {}
}
