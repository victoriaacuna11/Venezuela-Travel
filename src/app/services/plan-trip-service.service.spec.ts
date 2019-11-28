import { TestBed } from '@angular/core/testing';

import { PlanTripServiceService } from './plan-trip-service.service';

describe('PlanTripServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanTripServiceService = TestBed.get(PlanTripServiceService);
    expect(service).toBeTruthy();
  });
});
