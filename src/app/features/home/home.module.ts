import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaCardComponent } from './agenda-card/agenda-card.component';
import { MealCarouselComponent } from './meal-carousel/meal-carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { RecipePreviewComponent } from './recipe-preview/recipe-preview.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AgendaCardComponent,
    MealCarouselComponent,
    RecipePreviewComponent,
  ],
  imports: [CommonModule, SharedModule, NgbCarouselModule],
  exports: [MealCarouselComponent],
})
export class HomeModule {}
