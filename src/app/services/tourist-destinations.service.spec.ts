import { TestBed } from '@angular/core/testing';

import { TouristDestinationsService } from './tourist-destinations.service';

describe('TouristDestinationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouristDestinationsService = TestBed.get(TouristDestinationsService);
    expect(service).toBeTruthy();
  });
});
