import { Vehicle } from './../../model/Vehicle';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { Location } from '@angular/common';
import { VehicleService } from 'src/app/services/vehicle.service';
@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.css'],
  providers: [VehicleService]
})

export class VehiclesFormComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  vehicle!: Vehicle;
  idVehicle: number = 0;
  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog, private location: Location, private vehicleService: VehicleService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id}) => this.idVehicle = id);
    if (!this.idVehicle) {
       this.vehicle = new Vehicle(this.generatedUniqueId(), 'ativo', '', '', '', '', 0, 0, 2022, 2022);
       return;
    };

    alert(this.idVehicle);
  }

  onSubmit() {
    this.dialog.open(DialogComponent, {
      width: '350px',
      height: '300px',
      data: {fnAction: () => this.saveVehicle(), title: `Deseja salvar o veículo "${this.vehicle.placa}" ?`, subtitle: 'Esta ação não poderá ser desfeita !'}
    });
  }

  async saveVehicle() {
    try {
      //Salva o objeto no localStorage
      // localStorage.setItem('vehicle', JSON.stringify(this.vehicle));

      //Salva o objeto no Json-Server
      await this.vehicleService.save(this.vehicle);
      this.location.back();
    } catch (error) {
      alert(error);
    }
  }

  handleCancel() {
    this.location.back();
  }

  generatedUniqueId() {
    return Math.floor(Math.random() * 2525).toString();
  }
}
