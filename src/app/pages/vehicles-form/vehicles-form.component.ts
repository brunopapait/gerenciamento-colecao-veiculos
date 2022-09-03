import { Vehicle } from './../../model/Vehicle';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
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

  vehicle: Vehicle = new Vehicle(this.generatedUniqueId(), 'ativo', '', '', '', '', 0, 0, 2022, 2022);
  idVehicle: string = '';
  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog, private location: Location, private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.idVehicle = id);
    if (!this.idVehicle) {
       return;
    };

    this.findById(this.idVehicle);
  }

  onSubmit() {
    const fnAction = this.idVehicle ? () => this.updateVehicle() : () => this.saveVehicle();
    const action: string = this.idVehicle ? 'atualizar' : 'cadastrar';

    this.dialog.open(DialogComponent, {
      width: '350px',
      height: '300px',
      data: {fnAction, title: `Deseja ${action} o veículo "${this.vehicle.placa}" ?`, subtitle: 'Esta ação não poderá ser desfeita !'}
    });
  }

  async findById(vehicleId: string) {
    (await this.vehicleService.findById(vehicleId))
    .subscribe((vehicle: Vehicle) => {
      this.vehicle = new Vehicle(vehicle.id, vehicle.status, vehicle.placa, vehicle.cor, vehicle.marca, vehicle.modelo, vehicle.valor, vehicle.kmAtual, vehicle.anoFabricacao, vehicle.anoModelo);
    }, err => alert(err));
  }

  async saveVehicle() {
      // Salva o objeto no localStorage
      // localStorage.setItem('vehicle', JSON.stringify(this.vehicle));

      // Salva o objeto no Json-Server
      this.vehicleService.save(this.vehicle)
      .then(() => this.location.back())
      .catch((err) => alert(err));
  }

  // Atualiza o veículo
  async updateVehicle() {
    this.vehicleService.update(this.vehicle)
    .then(() => this.location.back())
    .catch((err) => alert(err));
  }

  handleCancel() {
    this.location.back();
  }

  generatedUniqueId() {
    return Math.floor(Math.random() * 2525).toString();
  }
}
