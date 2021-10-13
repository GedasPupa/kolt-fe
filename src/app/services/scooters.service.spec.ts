import { TestBed } from '@angular/core/testing';

import { ScootersService } from './scooters.service';

describe('ScootersService', () => {
  let service: ScootersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScootersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
