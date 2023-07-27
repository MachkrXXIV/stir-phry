import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaCardComponent } from './agenda-card/agenda-card.component';
import { MealCarouselComponent } from './meal-carousel/meal-carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AgendaCardComponent, MealCarouselComponent],
  imports: [CommonModule, NgbCarouselModule],
  exports: [MealCarouselComponent],
})
export class HomeModule {}
