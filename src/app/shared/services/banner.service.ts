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
      imgUrl: '',
    },
    {
      name: 'Thai',
      imgUrl: '',
    },
    {
      name: 'Chinese',
      imgUrl: '',
    },
    {
      name: 'Italian',
      imgUrl: '',
    },
    {
      name: 'Japanese',
      imgUrl: '',
    },
    {
      name: 'Vietnamese',
      imgUrl: '',
    },
    {
      name: 'Greek',
      imgUrl: '',
    },
    {
      name: 'Indian',
      imgUrl: '',
    },
    {
      name: 'Korean',
      imgUrl: '',
    },
    {
      name: 'Mediterranean',
      imgUrl: '',
    },
    {
      name: 'Southern/Soul',
      imgUrl: '',
    },
    {
      name: 'Middle Eastern',
      imgUrl: '',
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
