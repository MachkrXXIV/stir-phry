import { Injectable } from '@angular/core';
import { Banner } from '../interfaces/banner.interface';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  cultureBanners: Banner[] = [
    {
      name: 'Asian',
      imgUrl: 'assets/imgs/asianFood.jpg',
    },
    {
      name: 'Mexican',
      imgUrl: 'assets/imgs/mexicanFood.jpg',
    },
    {
      name: 'American',
      imgUrl: 'assets/imgs/americanFood.jpg',
    },
    {
      name: 'Thai',
      imgUrl: 'assets/imgs/thaiFood.jpg',
    },
    {
      name: 'Chinese',
      imgUrl: 'assets/imgs/chineseFood.jpg',
    },
    {
      name: 'Italian',
      imgUrl: 'assets/imgs/italianFood.jpg',
    },
    {
      name: 'Japanese',
      imgUrl: 'assets/imgs/japaneseFood.jpg',
    },
    {
      name: 'Vietnamese',
      imgUrl: 'assets/imgs/vietnameseFood.jpg',
    },
    {
      name: 'Greek',
      imgUrl: 'assets/imgs/greekFood.jpg',
    },
    {
      name: 'Indian',
      imgUrl: 'assets/imgs/indianFood.jpg',
    },
    {
      name: 'Korean',
      imgUrl: 'assets/imgs/koreanFood.jpg',
    },
    {
      name: 'Mediterranean',
      imgUrl: 'assets/imgs/mediterraneanFood.jpg',
    },
    {
      name: 'Southern/Soul',
      imgUrl: 'assets/imgs/southernFood.jpg',
    },
    {
      name: 'Middle Eastern',
      imgUrl: 'assets/imgs/middleEasternFood.jpg',
    },
  ];

  foodTypeBanners: Banner[] = [
    {
      name: 'Pasta',
      imgUrl: '',
    },
    {
      name: 'Salad',
      imgUrl: '',
    },
    {
      name: 'Seafood',
      imgUrl: '',
    },
    {
      name: 'Sandwich',
      imgUrl: '',
    },
    {
      name: 'Barbeque',
      imgUrl: '',
    },
    {
      name: 'Taco',
      imgUrl: '',
    },
    {
      name: 'Soup',
      imgUrl: '',
    },
    {
      name: 'Chicken',
      imgUrl: '',
    },
    {
      name: 'Beef',
      imgUrl: '',
    },
    {
      name: 'Pork',
      imgUrl: '',
    },
    {
      name: 'Fried',
      imgUrl: '',
    },
  ];

  getCultures() {
    return this.cultureBanners;
  }

  getFoodTypes() {
    return this.foodTypeBanners;
  }

  constructor() {}
}
