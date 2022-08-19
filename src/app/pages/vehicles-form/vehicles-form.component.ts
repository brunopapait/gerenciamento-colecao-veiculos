import { Vehicle } from './../../model/Vehicle';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.css']
})

export class VehiclesFormComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  vehicle!: Vehicle;
  idVehicle: number = 0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id}) => this.idVehicle = id);
    if (!this.idVehicle) {
       this.vehicle = new Vehicle(Math.floor(Math.random() * 2525).toString(), 'ativo', '', '', '', '', 0, 0, 2022, 2022);
       return;
    };

    alert(this.idVehicle);
  }

  onSubmit() {
    //Salva o objeto no localStorage
    localStorage.setItem('vehicle', JSON.stringify(this.vehicle));
  }
}
