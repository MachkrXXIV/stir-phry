import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../../../../shared/interfaces/meal.interface';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss'],
})
export class NavTabsComponent implements OnInit {
  @Input() summary?: string;
  @Input() ingredients?: any[];
  @Input() instructions?: string[];
  currentTab = 'summary';

  constructor() {}

  navigateToTab(tab: string) {
    this.currentTab = tab;
    console.log('current tab', this.currentTab);
  }

  ngOnInit(): void {}
}
