import { TestBed } from '@angular/core/testing';

import { MealClassificationsService } from './meal-classifications.service';

describe('MealClassificationsService', () => {
  let service: MealClassificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealClassificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
