import { TestBed } from '@angular/core/testing';

import { SavedMealsService } from './saved-meal.service';

describe('FirestoreService', () => {
  let service: SavedMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
