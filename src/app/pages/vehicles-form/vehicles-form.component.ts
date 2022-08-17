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

  vehicle: Vehicle = new Vehicle('', '', '', '', '', '', 0, 0, 0, 0, new Date(), new Date());
  idVehicle: number = 0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id}) => this.idVehicle = id);
    if (!this.idVehicle) return;

    alert(this.idVehicle);
  }

  onSubmit() {
  }

  getErrorMessage() {
    // if (this.email.hasError('required')) {
    //   return 'You must enter a value';
    // }

    // return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
