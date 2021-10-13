import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScootersComponent } from './scooters.component';

describe('ScootersComponent', () => {
  let component: ScootersComponent;
  let fixture: ComponentFixture<ScootersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScootersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
