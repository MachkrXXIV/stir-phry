import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DiscoverComponent } from './features/discover/discover.component';
import { DetailedViewComponent } from './features/discover/detailed-view/detailed-view.component';
import { RecipeResolverService } from './shared/services/recipe-resolver.service';
import { CookComponent } from './features/cook/cook.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'discover', component: DiscoverComponent },
  {
    path: 'discover/:name/:id',
    component: DetailedViewComponent,
    resolve: { detailedRecipe: RecipeResolverService },
  },
  {
    path: 'collections/:collectionName/:id',
    component: DetailedViewComponent,
    resolve: { detailedRecipe: RecipeResolverService },
  },
  {
    path: 'cook/:id',
    component: CookComponent,
    resolve: { detailedRecipe: RecipeResolverService },
  },
  { path: '**', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
