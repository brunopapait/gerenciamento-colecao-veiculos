import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/model/Vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-vehicles-list-container',
  templateUrl: './vehicles-list-container.component.html',
  styleUrls: ['./vehicles-list-container.component.css'],
  providers: [VehicleService]
})
export class VehiclesListContainerComponent implements OnInit {
  vehicles: Vehicle[];

  @Output() qtVehicles = new EventEmitter<number>();

  constructor(private router: Router, private vehicleService: VehicleService, private dialog: MatDialog) {
    this.vehicles = [];
   }

  async ngOnInit() {
      this.vehicleService.findAll()
      .then((vehicles) => {
        this.vehicles = vehicles;
        this.qtVehicles.next(vehicles.length);
      })
      .catch((err) => alert(err));
  }

  handleEditClick(vehicleId: string){
    this.router.navigateByUrl(`/vehicles/edit/${vehicleId}`);
  }

  handleRemoveClick(vehicle: Vehicle) {
    this.dialog.open(DialogComponent, {
      width: '350px',
      height: '300px',
      data: {fnAction: () => this.onRemoveVehicle(vehicle.id), title: `Tem certeza que deseja remover o veículo "${vehicle.placa}" ?`, subtitle: 'Esta ação não poderá ser desfeita !'}
    });
  }

  onRemoveVehicle(vehicleId: string) {
    this.vehicleService.remove(vehicleId)
    .then(() => {
      this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== vehicleId)
      this.qtVehicles.next(this.vehicles.length);
    })
    .catch((err) => alert(err));
  }
}
