import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountVehiclesComponent } from './count-vehicles.component';

describe('CountVehiclesComponent', () => {
  let component: CountVehiclesComponent;
  let fixture: ComponentFixture<CountVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
