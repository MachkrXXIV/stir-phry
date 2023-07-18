import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss'],
})
export class DetailedViewComponent implements OnInit {
  detailedRecipe: Meal = {
    id: -1,
    name: '',
  };
  isSaved: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private firestore: FirestoreService
  ) {}

  goBack() {
    this.router.navigate(['/discover']);
  }

  saveRecipe(isAlreadySaved: boolean) {
    if (isAlreadySaved) {
      this.firestore.deleteSavedMeal(this.detailedRecipe);
      localStorage.setItem('isSaved', 'false');
      this.isSaved = false;
    } else {
      this.firestore.addSavedMeal(this.detailedRecipe);
      localStorage.setItem('isSaved', 'true');
      this.isSaved = true;
    }
  }

  tryRecipe() {}

  likeRecipe() {}

  checkIconStates() {}

  ngOnInit(): void {
    this.detailedRecipe = this.route.snapshot.data['detailedRecipe'];
    this.isSaved = localStorage.getItem('isSaved') === 'true' ? true : false;
    console.log('save state:', this.isSaved);
  }
}
