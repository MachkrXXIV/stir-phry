import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
})
export class ExplorerComponent implements OnInit {
  iconLibrary: any[] = [
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
  constructor() {}

  ngOnInit(): void {}
}
