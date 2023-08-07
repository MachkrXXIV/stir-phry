import { TestBed } from '@angular/core/testing';

import { RecipeStateMachineService } from './recipe-state-machine.service';

describe('RecipeStateMachineService', () => {
  let service: RecipeStateMachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeStateMachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
