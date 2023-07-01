import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../../interfaces/meal.interface';

@Component({
  selector: 'app-query-card',
  templateUrl: './query-card.component.html',
  styleUrls: ['./query-card.component.scss'],
})
export class QueryCardComponent implements OnInit {
  @Input() query: Meal = {
    id: 0,
    name: 'meal',
    image: 'image',
  };

  constructor() {}

  ngOnInit(): void {}
}
