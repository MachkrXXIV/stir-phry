import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Banner } from 'src/app/shared/interfaces/banner.interface';
import { BannerCardComponent } from 'src/app/shared/components/banner-card/banner-card.component';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Icon } from 'src/app/shared/interfaces/icon.interface';
import { IconLibraryService } from 'src/app/shared/services/icon-library.service';
import { BannerService } from 'src/app/shared/services/banner.service';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { SearchBarService } from 'src/app/shared/services/search-bar.service';
import { Meal } from 'src/app/shared/interfaces/meal.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
})
export class ExplorerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() isLargeScreen!: boolean;
  private recipeSub: Subscription = new Subscription();
  iconSize: SizeProp = this.isLargeScreen ? '2x' : 'lg';
  iconLibrary: Icon[] = this.iconService.getIcons();
  cultureBanners: Banner[] = this.bannerService.getCultures();
  foodTypeBanners: Banner[] = this.bannerService.getFoodTypes();

  constructor(
    private iconService: IconLibraryService,
    private bannerService: BannerService,
    private recipeService: RecipeService,
    private searchService: SearchBarService
  ) {} // todo make the sidescroller into a shared component

  handleSelectedBanner(banner: any) {
    console.log(banner);

    // makes the api request and generates the cards
    this.recipeSub = this.recipeService
      .getRecipe(banner.name)
      .subscribe((meals: Meal[]) => {
        if (!banner.name) {
          meals = [];
        }
        this.searchService.setQueryRecipes(meals);
        this.searchService.setSearchValue(banner.name);
      });
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.iconSize = this.isLargeScreen ? '2x' : 'lg';
  }

  ngOnDestroy(): void {
    this.recipeSub.unsubscribe();
  }
}
