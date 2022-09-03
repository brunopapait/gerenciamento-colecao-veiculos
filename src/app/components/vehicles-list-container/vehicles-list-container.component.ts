import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/model/Vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicles-list-container',
  templateUrl: './vehicles-list-container.component.html',
  styleUrls: ['./vehicles-list-container.component.css'],
  providers: [VehicleService]
})
export class VehiclesListContainerComponent implements OnInit, AfterViewInit {
  vehicles: Vehicle[];

  @Output() qtVehicles = new EventEmitter<number>();

  constructor(private router: Router, private vehicleService: VehicleService) {
    this.vehicles = [];
   }

  async ngOnInit() {
      this.vehicleService.findAll()
      .then((vehicles) => this.vehicles = vehicles)
      .catch((err) => alert(err));
  }

  async ngAfterViewInit() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.qtVehicles.next(this.vehicles.length);
  }

  handleEditClick(vehicleId: string){
    this.router.navigateByUrl(`/vehicles/edit/${vehicleId}`);
  }

  handleRemoveClick(vehicleId: string){}

}
