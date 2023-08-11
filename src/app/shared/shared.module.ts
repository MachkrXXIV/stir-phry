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
import { BannerService } from './services/banner.service';
import { DataConversionService } from './services/data-conversion.service';
import { FirestoreRecipesService } from './services/firestore-recipes.service';
import { IconLibraryService } from './services/icon-library.service';
import { MealClassificationsService } from './services/meal-classifications.service';
import { RecipeResolverService } from './services/recipe-resolver.service';
import { RecipeService } from './services/recipe.service';
import { SearchBarService } from './services/search-bar.service';
import { ViewportService } from './services/viewport.service';
import { DelimiterToTitlePipe } from './pipes/delimiter-to-title.pipe';
import { ToastComponent } from './components/toast/toast.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CamelCaseSplitPipe,
    BannerCardComponent,
    CreateRecipeComponent,
    HeaderComponent,
    QueryCardComponent,
    SearchBarComponent,
    SliderContainerComponent,
    DelimiterToTitlePipe,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NgbAlertModule,
    AppRoutingModule,
  ],
  exports: [
    CamelCaseSplitPipe,
    DelimiterToTitlePipe,
    BannerCardComponent,
    CreateRecipeComponent,
    HeaderComponent,
    QueryCardComponent,
    SearchBarComponent,
    SliderContainerComponent,
    FontAwesomeModule,
    ToastComponent,
  ],
  providers: [
    BannerService,
    DataConversionService,
    FirestoreRecipesService,
    IconLibraryService,
    MealClassificationsService,
    RecipeResolverService,
    RecipeService,
    SearchBarService,
    ViewportService,
  ],
})
export class SharedModule {}
