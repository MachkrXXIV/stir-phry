import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { SearchBarService } from 'src/app/shared/services/search-bar.service';
import { Subscription } from 'rxjs';
import { HostListener } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  queryRecipes: Meal[] = [];
  showForm = false;
  showAlert = false;
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

  displayForm(isValidSubmission: boolean = false) {
    this.showForm = !this.showForm;
    this.showAlert = false;

    if (isValidSubmission) {
      this.displayAlert();
    }
  }

  displayAlert() {
    this.showAlert = !this.showAlert;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 992;
    console.log('screen change!', this.isLargeScreen);
  }
}
