import { TestBed } from '@angular/core/testing';

import { FirestoreRecipesService } from './firestore-recipes.service';

describe('FirestoreService', () => {
  let service: FirestoreRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
