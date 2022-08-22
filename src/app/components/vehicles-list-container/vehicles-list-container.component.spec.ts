import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesListContainerComponent } from './vehicles-list-container.component';

describe('VehiclesListContainerComponent', () => {
  let component: VehiclesListContainerComponent;
  let fixture: ComponentFixture<VehiclesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesListContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
