import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Banner } from 'src/app/shared/interfaces/banner.interface';
import { BannerCardComponent } from 'src/app/shared/components/banner-card/banner-card.component';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Icon } from 'src/app/shared/interfaces/icon.interface';
import { IconLibraryService } from 'src/app/shared/services/icon-library.service';
import { BannerService } from 'src/app/shared/services/banner.service';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { SearchBarService } from 'src/app/shared/services/search-bar.service';
import { Meal } from 'src/app/shared/interfaces/meal.interface';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
})
export class ExplorerComponent implements OnInit {
  @Input() isLargeScreen!: boolean;
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

    this.recipeService.getRecipe(banner.name).subscribe((meals: Meal[]) => {
      if (!banner.name) {
        meals = [];
        // this.isValidSearch.emit(false);
      } else {
        // this.isValidSearch.emit(true);
      }
      this.searchService.setQueryRecipes(meals);
      // console.log(this.queryRecipes);
    });
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.iconSize = this.isLargeScreen ? '2x' : 'lg';
  }
}
