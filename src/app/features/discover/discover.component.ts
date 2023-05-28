import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { SearchBarService } from 'src/app/shared/services/search-bar.service';
import { Subscription } from 'rxjs';
import { HostListener } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  showForm = false;
  queryRecipes: Meal[] = [];
  isLargeScreen = false;
  isError = false;
  faPlusCircle = faPlus;
  constructor(private searchService: SearchBarService) {
    this.subscription = this.searchService.queryRecipes$.subscribe({
      next: (recipes: Meal[]) => {
        this.queryRecipes = recipes;
      },
      error: (error) => {
        console.log('error', error);
        this.displayError();
      },
    });
    this.isLargeScreen = window.innerWidth >= 992;
  }

  displayError() {
    this.isError = true;
  }

  displayForm() {
    this.showForm = !this.showForm;
    console.log('Display form: ', this.showForm);
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
