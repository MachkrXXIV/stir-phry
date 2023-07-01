import { Injectable } from '@angular/core';
import { Icon } from '../interfaces/icon.interface';

@Injectable({
  providedIn: 'root',
})
export class IconLibraryService {
  iconLibrary: Icon[] = [
    {
      name: 'popular',
      icon: 'fire-alt',
      color: 'text-warning',
    },
    {
      name: 'for you',
      icon: 'hand-holding-heart',
      color: 'text-danger',
    },
    {
      name: 'healthy',
      icon: 'leaf',
      color: 'text-success',
    },
    {
      name: 'quick',
      icon: 'bolt',
      color: 'text-tertiary',
    },
    {
      name: 'cheap',
      icon: 'piggy-bank',
      color: 'text-info',
    },
  ];

  getIcons() {
    return this.iconLibrary;
  }

  constructor() {}
}
