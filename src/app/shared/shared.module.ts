import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamelCaseSplitPipe } from './camel-case-split.pipe';
import { BannerCardComponent } from './components/banner-card/banner-card.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { HeaderComponent } from './components/header/header.component';
import { QueryCardComponent } from './components/query-card/query-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SliderContainerComponent } from './components/slider-container/slider-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CamelCaseSplitPipe,
    BannerCardComponent,
    CreateRecipeComponent,
    HeaderComponent,
    QueryCardComponent,
    SearchBarComponent,
    SliderContainerComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule, AppRoutingModule],
  exports: [
    CamelCaseSplitPipe,
    BannerCardComponent,
    CreateRecipeComponent,
    HeaderComponent,
    QueryCardComponent,
    SearchBarComponent,
    SliderContainerComponent,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
