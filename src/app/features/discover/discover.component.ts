import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  TemplateRef,
} from '@angular/core';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { SearchBarService } from 'src/app/shared/services/search-bar.service';
import { Subscription } from 'rxjs';
import { HostListener } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Banner } from 'src/app/shared/interfaces/banner.interface';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit, OnDestroy {
  @ViewChild('default') defaultRef!: TemplateRef<ElementRef>;
  private subscription: Subscription = new Subscription();
  queryRecipes: Meal[] = [];
  searchQuery = 'test';
  showForm = false;
  showAlert = false;
  isLargeScreen = false;
  isError = false;
  faPlusCircle = faPlus;
  constructor(
    private searchService: SearchBarService,
    private cdRef: ChangeDetectorRef
  ) {
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
      console.log('valid submit!');
      this.displayAlert();
    }
  }

  displayAlert() {
    this.showAlert = !this.showAlert;
  }

  handleSearchQuery(query: string) {
    this.searchQuery = query;
    console.log(this.searchQuery);
  }

  ngOnInit(): void {
    this.queryRecipes = [];
    this.searchQuery = '';
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.queryRecipes = [];
    this.searchQuery = '';
    this.subscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 992;
  }
}
