import { TestBed } from '@angular/core/testing';

import { FitnessDataService } from './fitness-data.service';

describe('FitnessDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FitnessDataService = TestBed.get(FitnessDataService);
    expect(service).toBeTruthy();
  });
});
