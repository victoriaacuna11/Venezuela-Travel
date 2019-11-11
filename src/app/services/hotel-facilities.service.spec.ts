import { TestBed } from '@angular/core/testing';

import { HotelFacilitiesService } from './hotel-facilities.service';

describe('HotelFacilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelFacilitiesService = TestBed.get(HotelFacilitiesService);
    expect(service).toBeTruthy();
  });
});
