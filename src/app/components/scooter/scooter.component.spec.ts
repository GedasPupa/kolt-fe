import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScooterComponent } from './scooter.component';

describe('ScooterComponent', () => {
  let component: ScooterComponent;
  let fixture: ComponentFixture<ScooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
