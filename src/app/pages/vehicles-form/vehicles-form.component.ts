import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.css']
})

export class VehiclesFormComponent implements OnInit {
  idVehicle: number = 0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.idVehicle = id);
    if (!this.idVehicle) return;

    alert(this.idVehicle);
  }
}
