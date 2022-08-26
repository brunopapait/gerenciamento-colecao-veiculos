import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleItemDetailComponent } from './vehicle-item-detail.component';

describe('VehicleItemDetailComponent', () => {
  let component: VehicleItemDetailComponent;
  let fixture: ComponentFixture<VehicleItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleItemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
