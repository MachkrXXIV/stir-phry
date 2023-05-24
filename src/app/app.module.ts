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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './features/home/home.component';
import { MealCarouselComponent } from './features/home/meal-carousel/meal-carousel.component';
import { DiscoverComponent } from './features/discover/discover.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { CreateRecipeComponent } from './shared/components/create-recipe/create-recipe.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DiscoverComponent,
    SearchBarComponent,
    CreateRecipeComponent,
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
export class AppModule {}
