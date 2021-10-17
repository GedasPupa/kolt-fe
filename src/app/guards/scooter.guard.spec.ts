import { TestBed } from '@angular/core/testing';

import { ScooterGuard } from './scooter.guard';

describe('ScooterGuard', () => {
  let guard: ScooterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ScooterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
