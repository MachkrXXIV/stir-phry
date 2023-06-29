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
  private recipeSub: Subscription = new Subscription();
  private searchValSub: Subscription = new Subscription();
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
    this.isLargeScreen = window.innerWidth >= 992;
    this.recipeSub = this.searchService.queryRecipes$.subscribe({
      next: (recipes: Meal[]) => {
        this.queryRecipes = recipes;
      },
      error: (error) => {
        console.log('error', error);
        this.displayError();
      },
    });
    this.searchValSub = this.searchService.searchValue$.subscribe((query) => {
      this.searchQuery = query;
    });
  }

  displayError() {
    this.isError = true;
  }

  displayForm(isValidSubmission: boolean = false) {
    this.showForm = !this.showForm;

    if (isValidSubmission) {
      console.log('valid submit!');
      this.displayAlert();
    }
  }

  displayAlert() {
    this.showAlert = !this.showAlert;
  }

  ngOnInit(): void {
    this.queryRecipes = [];
    this.searchQuery = '';
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.queryRecipes = [];
    this.searchQuery = '';
    this.recipeSub.unsubscribe();
    this.searchValSub.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 992;
  }
}
