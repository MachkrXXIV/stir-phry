import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat';
import { HeaderComponent } from './shared/components/header/header.component';
import {
  FirestoreModule,
  provideFirestore,
  getFirestore,
} from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './features/home/home.component';
import { MealCarouselComponent } from './features/home/meal-carousel/meal-carousel.component';
import { DiscoverComponent } from './features/discover/discover.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { CreateRecipeComponent } from './shared/components/create-recipe/create-recipe.component';
import { ExplorerComponent } from './features/discover/explorer/explorer.component';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { BannerCardComponent } from './shared/components/banner-card/banner-card.component';
import { QueryCardComponent } from './shared/components/query-card/query-card.component';
import { DetailedViewComponent } from './features/discover/detailed-view/detailed-view.component';
import { CamelCaseSplitPipe } from './shared/camel-case-split.pipe';
import { NavTabsComponent } from './features/discover/detailed-view/nav-tabs/nav-tabs.component';
import { SliderContainerComponent } from './shared/components/slider-container/slider-container.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DiscoverComponent,
    SearchBarComponent,
    CreateRecipeComponent,
    ExplorerComponent,
    BannerCardComponent,
    QueryCardComponent,
    DetailedViewComponent,
    CamelCaseSplitPipe,
    NavTabsComponent,
    SliderContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MealCarouselComponent,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
