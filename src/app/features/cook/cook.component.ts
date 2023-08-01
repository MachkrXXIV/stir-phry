import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.scss'],
})
export class CookComponent implements OnInit {
  detailedRecipe: Meal = {
    id: '',
    name: '',
  };

  constructor(private location: Location, private route: ActivatedRoute) {}

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.detailedRecipe = this.route.snapshot.data['detailedRecipe'];
  }
}
