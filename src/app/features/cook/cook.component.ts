import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.scss'],
})
export class CookComponent implements OnInit {
  detailedRecipe: Meal;
  currentPage: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.detailedRecipe = { id: '', name: '' };
    this.currentPage = 'prelude';
  }

  exitPage() {
    this.router.navigate(['/home']);
  }

  handleRelocation(relocation: string) {
    console.log('routing to:', relocation);
    this.currentPage = relocation;
  }

  ngOnInit(): void {
    this.detailedRecipe = this.route.snapshot.data['detailedRecipe'];
  }
}
