import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { SearchBarService } from 'src/app/shared/services/search-bar.service';
import { Subscription } from 'rxjs';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit, OnDestroy {
  constructor(private searchService: SearchBarService) {
    this.subscription = this.searchService.queryRecipes$.subscribe(
      (recipes: Meal[]) => {
        this.queryRecipes = recipes;
      },
      (error) => {
        console.log('error', error);
        this.displayError();
        console.log('is working');
      }
    );
    this.isLargeScreen = window.innerWidth >= 992;
  }
  queryRecipes: Meal[] = [];
  private subscription: Subscription = new Subscription();
  isLargeScreen = false;
  isError = false;

  fetchQueryRecipes(meals: Meal[]) {}

  displayError() {
    this.isError = true;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 992;
  }
}
