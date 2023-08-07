import { TestBed } from '@angular/core/testing';

import { RecipeResolverService } from './recipe-resolver.service';

describe('ResolverService', () => {
  let service: RecipeResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
