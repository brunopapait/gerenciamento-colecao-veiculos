import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  qtVehicles: number = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

}
